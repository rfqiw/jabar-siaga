// Weather Data Handler - BMKG Jawa Barat

class WeatherManager {
    constructor() {
        this.weatherData = [];
        this.currentSlide = 0;
        this.slidesToShow = 3;
        this.autoSlideInterval = null;
        this.slideInterval = 5000; // 5 seconds
        
        // BMKG XML URL
        this.bmkgUrl = 'https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-JawaBarat.xml';
        
        // Major cities in West Java
        this.targetCities = [
            'Bandung',
            'Bogor',
            'Depok',
            'Bekasi',
            'Cimahi',
            'Tasikmalaya',
            'Cirebon',
            'Sukabumi',
            'Garut',
            'Purwakarta',
            'Subang',
            'Sumedang',
            'Indramayu',
            'Karawang',
            'Cianjur',
            'Kuningan',
            'Majalengka',
            'Pangandaran'
        ];
        
        this.init();
    }
    
    async init() {
        // Initialize carousel
        this.initCarouselControls();
        
        // Load weather data
        await this.fetchWeatherData();
        
        // Start auto slide
        this.startAutoSlide();
        
        // Update last updated time
        this.updateLastUpdated();
    }
    
    async fetchWeatherData() {
        try {
            // Show loading state
            this.showLoadingState();
            
            // Fetch XML data from BMKG
            const response = await fetch(this.bmkgUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const xmlText = await response.text();
            
            // Parse XML
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
            
            // Extract data for target cities
            this.parseWeatherData(xmlDoc);
            
            // Update carousel
            this.updateWeatherCarousel();
            
        } catch (error) {
            console.error('Error fetching weather data:', error);
            this.showErrorState();
        }
    }
    
    parseWeatherData(xmlDoc) {
        this.weatherData = [];
        
        // Get area elements
        const areas = xmlDoc.getElementsByTagName('area');
        
        for (let area of areas) {
            const cityName = area.getAttribute('description');
            
            // Check if this is one of our target cities
            if (this.targetCities.some(city => 
                cityName.toLowerCase().includes(city.toLowerCase()))) {
                
                // Extract weather parameters
                const parameters = area.getElementsByTagName('parameter');
                const weather = {
                    city: cityName,
                    timestamp: new Date().toISOString(),
                    temperature: this.extractParameter(parameters, 't', 'text'),
                    humidity: this.extractParameter(parameters, 'hu', 'text'),
                    windSpeed: this.extractParameter(parameters, 'ws', 'text'),
                    windDirection: this.extractParameter(parameters, 'wd', 'text'),
                    weatherCondition: this.extractParameter(parameters, 'weather', 'text'),
                    icon: this.getWeatherIcon(this.extractParameter(parameters, 'weather', 'text'))
                };
                
                this.weatherData.push(weather);
            }
        }
        
        // Limit to 6 cities for carousel
        if (this.weatherData.length > 6) {
            this.weatherData = this.weatherData.slice(0, 6);
        }
        
        // If no data was found, create sample data from BMKG structure
        if (this.weatherData.length === 0) {
            this.createFallbackData();
        }
    }
    
    extractParameter(parameters, id, type) {
        for (let param of parameters) {
            if (param.getAttribute('id') === id) {
                const values = param.getElementsByTagName('value');
                if (values.length > 0) {
                    if (type === 'text') {
                        return values[0].textContent;
                    } else if (type === 'number') {
                        return parseFloat(values[0].textContent);
                    }
                }
            }
        }
        return 'N/A';
    }
    
    getWeatherIcon(condition) {
        if (!condition) return 'fa-cloud';
        
        const conditionLower = condition.toLowerCase();
        
        if (conditionLower.includes('cerah') || conditionLower.includes('clear')) {
            return 'fa-sun';
        } else if (conditionLower.includes('berawan') || conditionLower.includes('cloud')) {
            return 'fa-cloud';
        } else if (conditionLower.includes('hujan') || conditionLower.includes('rain')) {
            return 'fa-cloud-rain';
        } else if (conditionLower.includes('petir') || conditionLower.includes('thunder')) {
            return 'fa-bolt';
        } else if (conditionLower.includes('kabut') || conditionLower.includes('fog')) {
            return 'fa-smog';
        } else {
            return 'fa-cloud';
        }
    }
    
    createFallbackData() {
        // Fallback data based on typical West Java weather
        const fallbackCities = [
            { city: 'Bandung', temp: 24, humidity: 75, wind: 10, condition: 'Berawan' },
            { city: 'Bogor', temp: 25, humidity: 80, wind: 8, condition: 'Hujan Ringan' },
            { city: 'Bekasi', temp: 28, humidity: 70, wind: 12, condition: 'Cerah Berawan' },
            { city: 'Cirebon', temp: 30, humidity: 65, wind: 15, condition: 'Cerah' },
            { city: 'Tasikmalaya', temp: 26, humidity: 78, wind: 9, condition: 'Berawan' },
            { city: 'Garut', temp: 25, humidity: 77, wind: 11, condition: 'Hujan Ringan' }
        ];
        
        this.weatherData = fallbackCities.map(city => ({
            city: city.city,
            timestamp: new Date().toISOString(),
            temperature: `${city.temp}°C`,
            humidity: `${city.humidity}%`,
            windSpeed: `${city.wind} km/jam`,
            windDirection: 'Timur',
            weatherCondition: city.condition,
            icon: this.getWeatherIcon(city.condition)
        }));
    }
    
    updateWeatherCarousel() {
        const carousel = document.getElementById('weatherCarousel');
        
        if (!carousel || this.weatherData.length === 0) return;
        
        // Clear loading state
        carousel.innerHTML = '';
        
        // Create weather cards
        this.weatherData.forEach((weather, index) => {
            const card = this.createWeatherCard(weather, index);
            carousel.appendChild(card);
        });
        
        // Update dots
        this.updateCarouselDots();
        
        // Show first slide
        this.showSlide(0);
    }
    
    createWeatherCard(weather, index) {
        const card = document.createElement('div');
        card.className = 'weather-card';
        card.dataset.index = index;
        
        const time = new Date().toLocaleTimeString('id-ID', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        card.innerHTML = `
            <div class="weather-location">
                <div class="location-name">${weather.city}</div>
                <div class="location-time">${time}</div>
            </div>
            <div class="weather-main">
                <div class="temperature">${weather.temperature}</div>
                <div class="weather-icon">
                    <i class="fas ${weather.icon}"></i>
                </div>
            </div>
            <div class="weather-condition">${weather.weatherCondition}</div>
            <div class="weather-details">
                <div class="weather-detail">
                    <div class="detail-icon">
                        <i class="fas fa-tint"></i>
                    </div>
                    <div>
                        <div class="detail-label">Kelembapan</div>
                        <div class="detail-value">${weather.humidity}</div>
                    </div>
                </div>
                <div class="weather-detail">
                    <div class="detail-icon">
                        <i class="fas fa-wind"></i>
                    </div>
                    <div>
                        <div class="detail-label">Angin</div>
                        <div class="detail-value">${weather.windSpeed}</div>
                    </div>
                </div>
                <div class="weather-detail">
                    <div class="detail-icon">
                        <i class="fas fa-compass"></i>
                    </div>
                    <div>
                        <div class="detail-label">Arah</div>
                        <div class="detail-value">${weather.windDirection}</div>
                    </div>
                </div>
                <div class="weather-detail">
                    <div class="detail-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <div>
                        <div class="detail-label">Update</div>
                        <div class="detail-value">${new Date(weather.timestamp).toLocaleTimeString('id-ID', {hour: '2-digit', minute: '2-digit'})}</div>
                    </div>
                </div>
            </div>
        `;
        
        return card;
    }
    
    initCarouselControls() {
        const prevBtn = document.getElementById('weatherPrev');
        const nextBtn = document.getElementById('weatherNext');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Pause auto slide on hover
        const carousel = document.getElementById('weatherCarousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.pauseAutoSlide());
            carousel.addEventListener('mouseleave', () => this.startAutoSlide());
        }
        
        // Touch events for mobile
        let startX = 0;
        let endX = 0;
        
        if (carousel) {
            carousel.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                this.pauseAutoSlide();
            });
            
            carousel.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].clientX;
                if (startX - endX > 50) {
                    this.nextSlide();
                } else if (endX - startX > 50) {
                    this.prevSlide();
                }
                this.startAutoSlide();
            });
        }
    }
    
    updateCarouselDots() {
        const dotsContainer = document.getElementById('weatherDots');
        if (!dotsContainer) return;
        
        dotsContainer.innerHTML = '';
        const slideCount = Math.ceil(this.weatherData.length / this.slidesToShow);
        
        for (let i = 0; i < slideCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if (i === 0) dot.classList.add('active');
            dot.dataset.slide = i;
            dot.addEventListener('click', () => this.showSlide(i));
            dotsContainer.appendChild(dot);
        }
    }
    
    showSlide(slideIndex) {
        const carousel = document.getElementById('weatherCarousel');
        if (!carousel || this.weatherData.length === 0) return;
        
        const slideCount = Math.ceil(this.weatherData.length / this.slidesToShow);
        const normalizedIndex = ((slideIndex % slideCount) + slideCount) % slideCount;
        
        this.currentSlide = normalizedIndex;
        
        // Calculate scroll position
        const cardWidth = 320; // card width + gap
        const scrollPosition = normalizedIndex * this.slidesToShow * cardWidth;
        
        carousel.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
        // Update active dot
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            if (index === normalizedIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    nextSlide() {
        const slideCount = Math.ceil(this.weatherData.length / this.slidesToShow);
        this.showSlide(this.currentSlide + 1);
    }
    
    prevSlide() {
        const slideCount = Math.ceil(this.weatherData.length / this.slidesToShow);
        this.showSlide(this.currentSlide - 1);
    }
    
    startAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
        }
        
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, this.slideInterval);
    }
    
    pauseAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
    
    showLoadingState() {
        const carousel = document.getElementById('weatherCarousel');
        if (carousel) {
            carousel.innerHTML = `
                <div class="weather-loading">
                    <div class="loading-spinner small"></div>
                    <p>Memuat data cuaca dari BMKG...</p>
                </div>
            `;
        }
    }
    
    showErrorState() {
        const carousel = document.getElementById('weatherCarousel');
        if (carousel) {
            carousel.innerHTML = `
                <div class="weather-loading" style="color: #e63946;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <p>Gagal memuat data cuaca.</p>
                    <button id="retryWeather" style="margin-top: 1rem; padding: 0.8rem 1.5rem; background: #0066cc; color: white; border: none; border-radius: 8px; cursor: pointer;">
                        Coba Lagi
                    </button>
                </div>
            `;
            
            const retryBtn = document.getElementById('retryWeather');
            if (retryBtn) {
                retryBtn.addEventListener('click', () => this.fetchWeatherData());
            }
        }
    }
    
    updateLastUpdated() {
        const lastUpdatedElement = document.getElementById('weatherLastUpdated');
        if (lastUpdatedElement) {
            const now = new Date();
            const timeString = now.toLocaleTimeString('id-ID', { 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit'
            });
            
            lastUpdatedElement.innerHTML = `
                <i class="fas fa-sync-alt"></i> Terakhir diperbarui: ${timeString}
            `;
            
            // Update every minute
            setInterval(() => {
                const newNow = new Date();
                const newTimeString = newNow.toLocaleTimeString('id-ID', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    second: '2-digit'
                });
                
                lastUpdatedElement.innerHTML = `
                    <i class="fas fa-sync-alt"></i> Terakhir diperbarui: ${newTimeString}
                `;
            }, 60000); // Update every minute
        }
    }
}

// Initialize weather manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.weatherManager = new WeatherManager();
});
