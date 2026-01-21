// Interactive Particle Background with tsParticles

class ParticleBackground {
    constructor() {
        this.containerId = 'tsparticles';
        this.particles = null;
        this.isInitialized = false;
        
        // Configuration for disaster-themed particles
        this.config = {
            autoPlay: true,
            background: {
                color: {
                    value: "transparent"
                }
            },
            backgroundMask: {
                cover: {
                    color: {
                        value: "#0a1929"
                    },
                    opacity: 0.5
                },
                enable: false
            },
            clear: true,
            defaultThemes: {},
            delay: 0,
            fullScreen: {
                enable: true,
                zIndex: -1
            },
            detectRetina: true,
            duration: 0,
            fpsLimit: 120,
            interactivity: {
                detectsOn: "window",
                events: {
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    onDiv: {
                        selectors: [],
                        enable: false,
                        mode: [],
                        type: "circle"
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                        parallax: {
                            enable: true,
                            force: 60,
                            smooth: 10
                        }
                    },
                    resize: {
                        delay: 0.5,
                        enable: true
                    }
                },
                modes: {
                    attract: {
                        distance: 200,
                        duration: 0.4,
                        easing: "ease-out-quad",
                        factor: 1,
                        maxSpeed: 50,
                        speed: 1
                    },
                    bounce: {
                        distance: 200
                    },
                    bubble: {
                        distance: 400,
                        duration: 2,
                        mix: false,
                        opacity: 0.8,
                        size: 40,
                        divs: {
                            distance: 200,
                            duration: 0.4,
                            mix: false,
                            selectors: []
                        }
                    },
                    connect: {
                        distance: 80,
                        links: {
                            opacity: 0.5
                        },
                        radius: 60
                    },
                    grab: {
                        distance: 400,
                        links: {
                            blink: false,
                            consent: false,
                            opacity: 1
                        }
                    },
                    push: {
                        default: true,
                        groups: [],
                        quantity: 4
                    },
                    remove: {
                        quantity: 2
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                        factor: 100,
                        speed: 1,
                        maxSpeed: 50,
                        easing: "ease-out-quad",
                        divs: {
                            distance: 200,
                            duration: 0.4,
                            factor: 100,
                            speed: 1,
                            maxSpeed: 50,
                            easing: "ease-out-quad",
                            selectors: []
                        }
                    },
                    slow: {
                        factor: 3,
                        radius: 200
                    },
                    trail: {
                        delay: 1,
                        pauseOnStop: false,
                        quantity: 1
                    },
                    light: {
                        area: {
                            gradient: {
                                start: {
                                    value: "#ffffff"
                                },
                                stop: {
                                    value: "#000000"
                                }
                            },
                            radius: 1000
                        },
                        shadow: {
                            color: {
                                value: "#000000"
                            },
                            length: 2000
                        }
                    }
                }
            },
            manualParticles: [],
            motion: {
                disable: false,
                reduce: {
                    factor: 4,
                    value: true
                }
            },
            particles: {
                bounce: {
                    horizontal: {
                        random: {
                            enable: false,
                            minimumValue: 0.1
                        },
                        value: 1
                    },
                    vertical: {
                        random: {
                            enable: false,
                            minimumValue: 0.1
                        },
                        value: 1
                    }
                },
                collisions: {
                    absorb: {
                        speed: 2
                    },
                    bounce: {
                        horizontal: {
                            random: {
                                enable: false,
                                minimumValue: 0.1
                            },
                            value: 1
                        },
                        vertical: {
                            random: {
                                enable: false,
                                minimumValue: 0.1
                            },
                            value: 1
                        }
                    },
                    enable: false,
                    maxSpeed: 50,
                    mode: "bounce",
                    overlap: {
                        enable: true,
                        retries: 0
                    }
                },
                color: {
                    value: [
                        "#0066cc",  // Primary blue
                        "#ff6600",  // Accent orange
                        "#2a9d8f",  // Accent green
                        "#7209b7",  // Accent purple
                        "#e63946"   // Accent red
                    ],
                    animation: {
                        h: {
                            count: 0,
                            enable: true,
                            speed: 20,
                            decay: 0,
                            delay: 0,
                            sync: true,
                            offset: 0
                        },
                        s: {
                            count: 0,
                            enable: false,
                            speed: 1,
                            decay: 0,
                            delay: 0,
                            sync: true,
                            offset: 0
                        },
                        l: {
                            count: 0,
                            enable: false,
                            speed: 1,
                            decay: 0,
                            delay: 0,
                            sync: true,
                            offset: 0
                        }
                    }
                },
                effect: {
                    close: true,
                    fill: true,
                    options: {},
                    type: []
                },
                groups: {},
                move: {
                    angle: {
                        offset: 0,
                        value: 90
                    },
                    attract: {
                        distance: 200,
                        enable: false,
                        rotate: {
                            x: 3000,
                            y: 3000
                        }
                    },
                    center: {
                        x: 50,
                        y: 50,
                        mode: "percent",
                        radius: 0
                    },
                    decay: 0,
                    distance: {},
                    direction: "none",
                    drift: 0,
                    enable: true,
                    gravity: {
                        acceleration: 9.81,
                        enable: false,
                        inverse: false,
                        maxSpeed: 50
                    },
                    path: {
                        clamp: true,
                        delay: {
                            random: {
                                enable: false,
                                minimumValue: 0
                            },
                            value: 0
                        },
                            enable: false,
                        options: {}
                    },
                    outModes: {
                        default: "out",
                        bottom: "out",
                        left: "out",
                        right: "out",
                        top: "out"
                    },
                    random: false,
                    size: false,
                    speed: {
                        min: 0.1,
                        max: 1
                    },
                    spin: {
                        acceleration: 0,
                        enable: false
                    },
                    straight: false,
                    trail: {
                        enable: false,
                        length: 10,
                        fill: {}
                    },
                    vibrate: false,
                    warp: false
                },
                number: {
                    density: {
                        enable: true,
                        width: 1920,
                        height: 1080
                    },
                    limit: 0,
                    value: 80
                },
                opacity: {
                    random: {
                        enable: true,
                        minimumValue: 0.3
                    },
                    value: {
                        min: 0.3,
                        max: 0.8
                    },
                    animation: {
                        count: 0,
                        enable: true,
                        speed: 0.5,
                        decay: 0,
                        delay: 0,
                        sync: false,
                        mode: "auto",
                        startValue: "random",
                        destroy: "none"
                    }
                },
                reduceDuplicates: false,
                shadow: {
                    blur: 0,
                    color: {
                        value: "#000"
                    },
                    enable: false,
                    offset: {
                        x: 0,
                        y: 0
                    }
                },
                shape: {
                    close: true,
                    fill: true,
                    options: {},
                    type: "circle"
                },
                size: {
                    random: {
                        enable: true,
                        minimumValue: 1
                    },
                    value: {
                        min: 1,
                        max: 3
                    },
                    animation: {
                        count: 0,
                        enable: true,
                        speed: 3,
                        decay: 0,
                        delay: 0,
                        sync: false,
                        mode: "auto",
                        startValue: "random",
                        destroy: "none"
                    }
                },
                stroke: {
                    width: 0
                },
                zIndex: {
                    random: {
                        enable: false,
                        minimumValue: 0
                    },
                    value: 0,
                    opacityRate: 1,
                    sizeRate: 1,
                    velocityRate: 1
                },
                life: {
                    count: 0,
                    delay: {
                        random: {
                            enable: false,
                            minimumValue: 0
                        },
                        value: 0,
                        sync: false
                    },
                    duration: {
                        random: {
                            enable: false,
                            minimumValue: 0.0001
                        },
                        value: 0,
                        sync: false
                    }
                },
                rotate: {
                    random: {
                        enable: false,
                        minimumValue: 0
                    },
                    value: 0,
                    animation: {
                        enable: false,
                        speed: 0,
                        decay: 0,
                        sync: false
                    },
                    direction: "clockwise",
                    path: false
                },
                destroy: {
                    bounds: {},
                    mode: "none",
                    split: {
                        count: 1,
                        factor: {
                            random: {
                                enable: false,
                                minimumValue: 0
                            },
                            value: 3
                        },
                        rate: {
                            random: {
                                enable: false,
                                minimumValue: 0
                            },
                            value: {
                                min: 4,
                                max: 9
                            }
                        },
                        sizeOffset: true,
                        particles: {}
                    }
                },
                roll: {
                    darken: {
                        enable: false,
                        value: 0
                    },
                    enable: false,
                    enlighten: {
                        enable: false,
                        value: 0
                    },
                    mode: "vertical",
                    speed: 25
                },
                tilt: {
                    random: {
                        enable: false,
                        minimumValue: 0
                    },
                    value: 0,
                    animation: {
                        enable: false,
                        speed: 0,
                        decay: 0,
                        sync: false
                    },
                    direction: "clockwise",
                    enable: false
                },
                twinkle: {
                    lines: {
                        enable: false,
                        frequency: 0.05,
                        opacity: 1
                    },
                    particles: {
                        enable: true,
                        frequency: 0.05,
                        opacity: 1
                    }
                },
                wobble: {
                    distance: 5,
                    enable: false,
                    speed: {
                        angle: 50,
                        move: 10
                    }
                },
                orbit: {
                    animation: {
                        count: 0,
                        enable: false,
                        speed: 1,
                        decay: 0,
                        delay: 0,
                        sync: false
                    },
                    enable: false,
                    opacity: 1,
                    rotation: {
                        random: {
                            enable: false,
                            minimumValue: 0
                        },
                        value: 45
                    },
                    width: 1
                },
                links: {
                    blink: false,
                    color: {
                        value: "#ffffff"
                    },
                    consent: false,
                    distance: 150,
                    enable: true,
                    frequency: 1,
                    opacity: 0.4,
                    shadow: {
                        blur: 5,
                        color: {
                            value: "#000"
                        },
                        enable: false
                    },
                    triangles: {
                        enable: false,
                        frequency: 1
                    },
                    width: 1,
                    warp: false
                },
                repulse: {
                    random: {
                        enable: false,
                        minimumValue: 0
                    },
                    value: 0,
                    enabled: false,
                    distance: 1,
                    duration: 1,
                    factor: 1,
                    speed: 1
                }
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            responsive: [],
            smooth: true,
            style: {},
            themes: [],
            zLayers: 100,
            emitters: [],
            absorbers: []
        };
        
        this.init();
    }
    
    async init() {
        try {
            // Check if tsParticles is loaded
            if (typeof tsParticles === 'undefined') {
                console.error('tsParticles not loaded. Loading from CDN...');
                await this.loadParticlesLibrary();
            }
            
            // Initialize particles
            await this.initParticles();
            
        } catch (error) {
            console.error('Error initializing particle background:', error);
            this.createFallbackAnimation();
        }
    }
    
    async loadParticlesLibrary() {
        // Already loaded via CDN in HTML head
        // Wait for library to be available
        return new Promise((resolve, reject) => {
            const checkInterval = setInterval(() => {
                if (typeof tsParticles !== 'undefined') {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 100);
            
            // Timeout after 5 seconds
            setTimeout(() => {
                clearInterval(checkInterval);
                reject(new Error('tsParticles library failed to load'));
            }, 5000);
        });
    }
    
    async initParticles() {
        try {
            // Load basic preset
            await tsParticles.loadBasic({
                id: this.containerId,
                options: this.config
            });
            
            // Get the instance for further manipulation
            const container = await tsParticles.load({
                id: this.containerId,
                options: this.config
            });
            
            if (container) {
                this.particles = container;
                this.isInitialized = true;
                console.log('Particle background initialized successfully');
                
                // Add event listeners for interactive effects
                this.addEventListeners();
                
            } else {
                throw new Error('Failed to create particle container');
            }
            
        } catch (error) {
            console.error('Error loading particles:', error);
            throw error;
        }
    }
    
    addEventListeners() {
        // Add click effect to push particles
        document.addEventListener('click', (event) => {
            if (!this.particles || !this.isInitialized) return;
            
            // Get click position
            const rect = this.particles.canvas.element.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            // Add particles at click position
            this.particles.addParticle({
                x: x,
                y: y,
                color: this.getRandomColor()
            });
        });
        
        // Add hover effect enhancement
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.addEventListener('mousemove', (event) => {
                if (!this.particles || !this.isInitialized) return;
                
                // Enhance hover effect in hero section
                const rect = heroSection.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                
                // Create a gentle attraction effect
                this.createAttractionField(x, y);
            });
        }
    }
    
    getRandomColor() {
        const colors = [
            "#0066cc",  // Primary blue
            "#ff6600",  // Accent orange
            "#2a9d8f",  // Accent green
            "#7209b7",  // Accent purple
            "#e63946"   // Accent red
        ];
        
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    createAttractionField(x, y) {
        if (!this.particles || !this.particles.particles) return;
        
        // Get all particles
        const particles = this.particles.particles.array;
        
        // Apply gentle push effect to nearby particles
        particles.forEach(particle => {
            const dx = particle.position.x - x;
            const dy = particle.position.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Only affect particles within 200px
            if (distance < 200) {
                const force = (200 - distance) / 200;
                const angle = Math.atan2(dy, dx);
                
                // Apply gentle push away from cursor
                particle.velocity.x += Math.cos(angle) * force * 0.5;
                particle.velocity.y += Math.sin(angle) * force * 0.5;
            }
        });
    }
    
    createFallbackAnimation() {
        // Create a simple CSS-based fallback animation
        const container = document.getElementById(this.containerId);
        if (!container) return;
        
        container.innerHTML = `
            <div class="fallback-animation">
                <style>
                    .fallback-animation {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        z-index: -1;
                    }
                    
                    .fallback-particle {
                        position: absolute;
                        border-radius: 50%;
                        background: linear-gradient(135deg, #0066cc, #7209b7);
                        animation: float 20s infinite linear;
                        opacity: 0.3;
                    }
                    
                    @keyframes float {
                        0% {
                            transform: translate(0, 0) rotate(0deg);
                        }
                        100% {
                            transform: translate(100vw, 100vh) rotate(360deg);
                        }
                    }
                </style>
            </div>
        `;
        
        // Create some fallback particles
        const fallbackContainer = container.querySelector('.fallback-animation');
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'fallback-particle';
            
            // Random properties
            const size = Math.random() * 100 + 20;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const delay = Math.random() * 20;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${x}vw`;
            particle.style.top = `${y}vh`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;
            
            fallbackContainer.appendChild(particle);
        }
        
        console.log('Fallback particle animation created');
    }
    
    // Public methods for controlling particles
    play() {
        if (this.particles && this.isInitialized) {
            this.particles.play();
        }
    }
    
    pause() {
        if (this.particles && this.isInitialized) {
            this.particles.pause();
        }
    }
    
    destroy() {
        if (this.particles && this.isInitialized) {
            this.particles.destroy();
            this.isInitialized = false;
        }
    }
    
    // Change particle density
    setDensity(density) {
        if (this.particles && this.isInitialized) {
            this.particles.options.particles.number.value = density;
            this.particles.refresh();
        }
    }
    
    // Change color theme
    setColorTheme(colors) {
        if (this.particles && this.isInitialized) {
            this.particles.options.particles.color.value = colors;
            this.particles.refresh();
        }
    }
}

// Initialize particle background when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.particleBackground = new ParticleBackground();
    
    // Add global controls for debugging (remove in production)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('%c🔧 Particle Controls Available:', 'color: #ff6600; font-weight: bold;');
        console.log('- window.particleBackground.play()');
        console.log('- window.particleBackground.pause()');
        console.log('- window.particleBackground.setDensity(number)');
    }
});
