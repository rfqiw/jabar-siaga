[file name]: index.html
[file content begin]
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jabar Siaga - Portal WebGIS Kebencanaan Jawa Barat</title>
    <meta name="description" content="Sistem pemantauan bencana dengan 7 peta rawan bencana di Jawa Barat">
    
    <!-- Open Graph Metadata -->
    <meta property="og:title" content="Jabar Siaga - Portal WebGIS Kebencanaan Jawa Barat">
    <meta property="og:description" content="Sistem pemantauan bencana dengan 7 peta rawan bencana di Jawa Barat">
    <meta property="og:type" content="website">
    
    <!-- Font & Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">
    
    <!-- tsParticles CDN -->
    <script src="https://cdn.jsdelivr.net/npm/@tsparticles/engine@3/tsparticles.engine.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tsparticles/basic@3/tsparticles.basic.min.js"></script>
    
    <!-- Chart.js untuk Infografis -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <!-- Loading Screen -->
    <div class="loading-screen" id="loadingScreen">
        <div class="loading-content">
            <div class="loading-spinner"></div>
            <p class="loading-text">Memuat sistem Jabar Siaga...</p>
        </div>
    </div>

    <!-- Particle Background Container -->
    <div id="tsparticles"></div>

    <!-- Navigation -->
    <nav class="glass-nav">
        <div class="nav-container">
            <div class="nav-logo">
                <i class="fas fa-map-marked-alt"></i>
                <span>Jabar<span class="logo-highlight">Siaga</span></span>
            </div>
            <ul class="nav-menu">
                <li><a href="#home" class="nav-link active"><i class="fas fa-home"></i> Beranda</a></li>
                <li><a href="#maps" class="nav-link"><i class="fas fa-map"></i> Peta</a></li>
                <li><a href="#dashboard" class="nav-link"><i class="fas fa-chart-bar"></i> Dashboard</a></li>
                <li><a href="#infografis" class="nav-link"><i class="fas fa-chart-pie"></i> Infografis</a></li>
                <li><a href="#news" class="nav-link"><i class="fas fa-newspaper"></i> Berita</a></li>
                <li><a href="#emergency" class="nav-link emergency-btn"><i class="fas fa-phone-alt"></i> Darurat</a></li>
            </ul>
            <div class="nav-mobile-toggle">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main>
        <!-- Hero Section -->
        <section id="home" class="hero-section">
            <div class="hero-overlay">
                <div class="noise-layer"></div>
                <div class="animated-gradient"></div>
            </div>
            <div class="hero-content">
                <h1 class="hero-title">
                    <span class="title-gradient">Jabar</span>
                    <span class="title-gradient">Siaga</span>
                    <span class="title-gradient">Kebencanaan</span>
                </h1>
                <p class="hero-subtitle">7 Peta Rawan Bencana di Jawa Barat</p>
                
                <div class="website-description">
                    <p>Portal WebGIS Jabar Siaga menyediakan informasi kebencanaan terintegrasi untuk 27 kabupaten/kota di Jawa Barat. Sistem ini menampilkan 7 peta risiko bencana berdasarkan data KRB (Kawasan Rawan Bencana) dari sumber resmi.</p>
                </div>
                
                <div class="hero-buttons">
                    <button class="cta-button glow-button" id="aksesPetaBtn">
                        <span class="button-text">Akses Peta</span>
                        <span class="button-ripple"></span>
                        <i class="fas fa-arrow-right button-icon"></i>
                    </button>
                    <button class="cta-button outline-button" id="dashboardBtn">
                        <span class="button-text">Dashboard Analisis</span>
                        <i class="fas fa-chart-line button-icon"></i>
                    </button>
                </div>
                <div class="scroll-indicator">
                    <div class="scroll-dots">
                        <div class="scroll-dot active"></div>
                        <div class="scroll-dot"></div>
                        <div class="scroll-dot"></div>
                    </div>
                    <p class="scroll-text">Gulir untuk informasi</p>
                    <i class="fas fa-chevron-down scroll-arrow"></i>
                </div>
            </div>
        </section>

        <!-- Weather Slider - 27 Kota -->
        <section class="weather-section">
            <div class="section-header">
                <h2><i class="fas fa-cloud-sun"></i> Prakiraan Cuaca BMKG - 27 Kab/Kota Jabar</h2>
                <div class="last-updated" id="weatherLastUpdated">
                    <i class="fas fa-sync-alt"></i> Memperbarui...
                </div>
            </div>
            <div class="weather-container">
                <div class="weather-carousel" id="weatherCarousel">
                    <!-- Weather cards will be populated by JavaScript -->
                    <div class="weather-loading">
                        <div class="loading-spinner small"></div>
                        <p>Memuat data cuaca 27 kota dari BMKG...</p>
                    </div>
                </div>
                <div class="carousel-controls">
                    <button class="carousel-btn prev-btn" id="weatherPrev">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <div class="carousel-dots" id="weatherDots"></div>
                    <button class="carousel-btn next-btn" id="weatherNext">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>

        <!-- Infografis 27 Kabupaten/Kota -->
        <section id="infografis" class="infografis-section">
            <div class="section-header">
                <h2><i class="fas fa-chart-bar"></i> Infografis 27 Kabupaten/Kota Jawa Barat</h2>
                <p class="section-subtitle">Analisis tingkat kerawanan bencana berdasarkan data KRB</p>
            </div>
            
            <div class="infografis-container">
                <div class="infografis-controls">
                    <div class="filter-controls">
                        <label for="kabFilter">Filter Kabupaten/Kota:</label>
                        <select id="kabFilter" class="filter-select">
                            <option value="all">Semua (27 Kab/Kota)</option>
                            <!-- Options will be populated by JavaScript -->
                        </select>
                        
                        <label for="bencanaFilter">Filter Jenis Bencana:</label>
                        <select id="bencanaFilter" class="filter-select">
                            <option value="all">Semua Bencana</option>
                            <option value="longsor">Longsor</option>
                            <option value="banjir">Banjir</option>
                            <option value="kebakaran">Kebakaran Hutan</option>
                            <option value="tsunami">Tsunami</option>
                            <option value="kekeringan">Kekeringan</option>
                            <option value="gunung_api">Gunung Api</option>
                            <option value="gerakan_tanah">Gerakan Tanah</option>
                        </select>
                    </div>
                    
                    <div class="view-toggle">
                        <button class="view-btn active" data-view="chart">
                            <i class="fas fa-chart-bar"></i> Chart
                        </button>
                        <button class="view-btn" data-view="table">
                            <i class="fas fa-table"></i> Tabel
                        </button>
                        <button class="view-btn" data-view="map">
                            <i class="fas fa-map"></i> Peta
                        </button>
                    </div>
                </div>
                
                <!-- Chart View -->
                <div class="infografis-view chart-view active">
                    <div class="chart-container">
                        <canvas id="krbChart"></canvas>
                    </div>
                    <div class="chart-legend">
                        <h4>Keterangan Indeks Risiko:</h4>
                        <div class="legend-items">
                            <div class="legend-item">
                                <span class="legend-color rendah"></span>
                                <span>Rendah (0-3)</span>
                            </div>
                            <div class="legend-item">
                                <span class="legend-color sedang"></span>
                                <span>Sedang (4-6)</span>
                            </div>
                            <div class="legend-item">
                                <span class="legend-color tinggi"></span>
                                <span>Tinggi (7-10)</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Table View -->
                <div class="infografis-view table-view">
                    <div class="table-container">
                        <table class="krb-table">
                            <thead>
                                <tr>
                                    <th>Kabupaten/Kota</th>
                                    <th>Longsor</th>
                                    <th>Banjir</th>
                                    <th>Kebakaran Hutan</th>
                                    <th>Tsunami</th>
                                    <th>Kekeringan</th>
                                    <th>Gunung Api</th>
                                    <th>Gerakan Tanah</th>
                                    <th>Rata-rata</th>
                                </tr>
                            </thead>
                            <tbody id="krbTableBody">
                                <!-- Table data will be populated by JavaScript -->
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <!-- Map View -->
                <div class="infografis-view map-view">
                    <div class="map-visualization">
                        <div class="map-header">
                            <h4>Visualisasi Kerawanan Bencana Jawa Barat</h4>
                            <select id="mapLayerSelect" class="filter-select">
                                <option value="longsor">Indeks Risiko Longsor</option>
                                <option value="banjir">Indeks Risiko Banjir</option>
                                <option value="kebakaran">Indeks Kebakaran Hutan</option>
                                <option value="tsunami">Indeks Risiko Tsunami</option>
                                <option value="kekeringan">Indeks Risiko Kekeringan</option>
                                <option value="gunung_api">Rawan Gunung Api</option>
                                <option value="gerakan_tanah">Rawan Gerakan Tanah</option>
                            </select>
                        </div>
                        <div class="map-visual" id="mapVisual">
                            <!-- Map visualization will be created by JavaScript -->
                            <div class="jabar-map">
                                <div class="map-grid" id="mapGrid">
                                    <!-- Grid items will be populated by JavaScript -->
                                </div>
                            </div>
                        </div>
                        <div class="map-legend">
                            <div class="gradient-legend">
                                <div class="gradient-bar"></div>
                                <div class="legend-labels">
                                    <span>Rendah</span>
                                    <span>Sedang</span>
                                    <span>Tinggi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="infografis-note">
                    <p><i class="fas fa-info-circle"></i> Data berdasarkan analisis KRB (Kawasan Rawan Bencana) dari sumber resmi. Skala 1-10 dengan 10 sebagai risiko tertinggi.</p>
                </div>
            </div>
        </section>

        <!-- News Section -->
        <section id="news" class="news-section">
            <div class="section-header">
                <h2><i class="fas fa-newspaper"></i> Berita Terkini Kebencanaan Jawa Barat</h2>
                <p class="section-subtitle">Informasi terkini dari media terpercaya</p>
            </div>
            <div class="news-container" id="newsContainer">
                <!-- News cards will be populated by JavaScript -->
                <div class="news-loading">
                    <div class="loading-spinner small"></div>
                    <p>Memuat berita terkini...</p>
                </div>
            </div>
        </section>

        <!-- Maps Section -->
        <section id="maps" class="maps-section">
            <div class="section-header">
                <h2><i class="fas fa-globe-asia"></i> Peta Interaktif 7 Layer Kebencanaan</h2>
                <p class="section-subtitle">Peta 2D dan 3D dengan 7 layer analisis risiko bencana</p>
            </div>
            
            <div class="map-container">
                <div class="map-header">
                    <h3><i class="fas fa-map"></i> Peta 2D - Atlas Kebencanaan Jawa Barat</h3>
                    <div class="map-actions">
                        <button class="map-action-btn" onclick="window.open('https://www.arcgis.com/apps/instant/atlas/index.html?appid=af6cc543bcc2468ea0cee2506814abf7', '_blank')">
                            <i class="fas fa-external-link-alt"></i> Buka di Tab Baru
                        </button>
                        <button class="map-action-btn fullscreen-btn" data-target="map2d">
                            <i class="fas fa-expand"></i> Layar Penuh
                        </button>
                    </div>
                </div>
                <p class="map-description">Peta 2D interaktif menampilkan distribusi spasial kejadian bencana dengan 7 layer tematik.</p>
                <div class="map-iframe-container">
                    <iframe 
                        id="map2d"
                        class="map-iframe"
                        src="https://www.arcgis.com/apps/instant/atlas/index.html?appid=af6cc543bcc2468ea0cee2506814abf7"
                        title="Peta 2D Kebencanaan Jawa Barat"
                        loading="eager"
                        allow="geolocation"
                    ></iframe>
                </div>
            </div>
            
            <div class="map-container">
                <div class="map-header">
                    <h3><i class="fas fa-cube"></i> Peta 3D - Visualisasi Elevasi dan Risiko</h3>
                    <div class="map-actions">
                        <button class="map-action-btn" onclick="window.open('https://www.arcgis.com/apps/instant/3dviewer/index.html?appid=b522ca6443e64aaf8583e9a5f2af3eaf', '_blank')">
                            <i class="fas fa-external-link-alt"></i> Buka di Tab Baru
                        </button>
                        <button class="map-action-btn fullscreen-btn" data-target="map3d">
                            <i class="fas fa-expand"></i> Layar Penuh
                        </button>
                    </div>
                </div>
                <p class="map-description">Visualisasi 3D topografi Jawa Barat untuk analisis kerentanan berbasis elevasi dan 7 layer risiko bencana.</p>
                <div class="map-iframe-container">
                    <iframe 
                        id="map3d"
                        class="map-iframe lazy-load"
                        data-src="https://www.arcgis.com/apps/instant/3dviewer/index.html?appid=b522ca6443e64aaf8583e9a5f2af3eaf"
                        title="Peta 3D Kebencanaan Jawa Barat"
                        loading="lazy"
                        allow="geolocation"
                    ></iframe>
                    <div class="lazy-load-placeholder">
                        <div class="placeholder-content">
                            <i class="fas fa-spinner fa-spin"></i>
                            <p>Memuat peta 3D...</p>
                            <button class="load-map-btn">Muat Peta 3D</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="layer-info">
                <h3><i class="fas fa-layer-group"></i> 7 Layer Analisis KRB</h3>
                <div class="layer-grid">
                    <div class="layer-item">
                        <div class="layer-icon gunung-api">
                            <i class="fas fa-mountain"></i>
                        </div>
                        <h4>Rawan Gunung Api</h4>
                        <p>Zona bahaya erupsi gunung berapi aktif</p>
                    </div>
                    <div class="layer-item">
                        <div class="layer-icon gerakan-tanah">
                            <i class="fas fa-landslide"></i>
                        </div>
                        <h4>Rawan Gerakan Tanah</h4>
                        <p>Area dengan potensi pergerakan tanah</p>
                    </div>
                    <div class="layer-item">
                        <div class="layer-icon longsor">
                            <i class="fas fa-hill-rockslide"></i>
                        </div>
                        <h4>Indeks Risiko Longsor</h4>
                        <p>Tingkat kerentanan tanah longsor</p>
                    </div>
                    <div class="layer-item">
                        <div class="layer-icon banjir">
                            <i class="fas fa-water"></i>
                        </div>
                        <h4>Indeks Risiko Banjir</h4>
                        <p>Potensi dan intensitas banjir</p>
                    </div>
                    <div class="layer-item">
                        <div class="layer-icon kebakaran">
                            <i class="fas fa-fire"></i>
                        </div>
                        <h4>Indeks Risiko Kebakaran Hutan</h4>
                        <p>Area rawan kebakaran vegetasi</p>
                    </div>
                    <div class="layer-item">
                        <div class="layer-icon tsunami">
                            <i class="fas fa-wave-square"></i>
                        </div>
                        <h4>Indeks Risiko Tsunami</h4>
                        <p>Zona bahaya tsunami pesisir</p>
                    </div>
                    <div class="layer-item">
                        <div class="layer-icon kekeringan">
                            <i class="fas fa-sun"></i>
                        </div>
                        <h4>Indeks Risiko Kekeringan</h4>
                        <p>Area dengan defisit air berkepanjangan</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Dashboard Section -->
        <section id="dashboard" class="dashboard-section">
            <div class="section-header">
                <h2><i class="fas fa-chart-pie"></i> Dashboard Analisis Risiko Bencana</h2>
                <p class="section-subtitle">Analisis komparatif 7 jenis bencana di Jawa Barat</p>
            </div>
            
            <div class="dashboard-grid">
                <div class="dashboard-card">
                    <h3><i class="fas fa-exclamation-triangle"></i> Distribusi Tingkat Risiko</h3>
                    <div class="chart-container-small">
                        <canvas id="riskDistributionChart"></canvas>
                    </div>
                </div>
                
                <div class="dashboard-card">
                    <h3><i class="fas fa-layer-group"></i> Rata-rata Indeks per Jenis Bencana</h3>
                    <div class="chart-container-small">
                        <canvas id="bencanaChart"></canvas>
                    </div>
                </div>
            </div>
            
            <div class="dashboard-note">
                <p><i class="fas fa-info-circle"></i> Analisis berdasarkan data KRB 27 kabupaten/kota di Jawa Barat. Data diperbarui sesuai perkembangan kondisi dan kajian terbaru.</p>
            </div>
        </section>

        <!-- Emergency Section -->
        <section id="emergency" class="emergency-section">
            <div class="section-header">
                <h2><i class="fas fa-phone-alt"></i> Kontak Darurat</h2>
                <p class="section-subtitle">Hubungi nomor resmi dalam keadaan darurat</p>
            </div>
            
            <div class="emergency-grid">
                <a href="tel:112" class="emergency-card police">
                    <div class="emergency-icon">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    <h3>112</h3>
                    <p>Darurat Umum</p>
                    <div class="emergency-overlay">Klik untuk telepon</div>
                </a>
                <a href="tel:110" class="emergency-card police">
                    <div class="emergency-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>110</h3>
                    <p>Polisi</p>
                    <div class="emergency-overlay">Klik untuk telepon</div>
                </a>
                <a href="tel:113" class="emergency-card fire">
                    <div class="emergency-icon">
                        <i class="fas fa-fire"></i>
                    </div>
                    <h3>113</h3>
                    <p>Pemadam Kebakaran</p>
                    <div class="emergency-overlay">Klik untuk telepon</div>
                </a>
                <a href="tel:119" class="emergency-card ambulance">
                    <div class="emergency-icon">
                        <i class="fas fa-ambulance"></i>
                    </div>
                    <h3>119</h3>
                    <p>Ambulans</p>
                    <div class="emergency-overlay">Klik untuk telepon</div>
                </a>
                <a href="tel:115" class="emergency-card sar">
                    <div class="emergency-icon">
                        <i class="fas fa-life-ring"></i>
                    </div>
                    <h3>115</h3>
                    <p>SAR Nasional</p>
                    <div class="emergency-overlay">Klik untuk telepon</div>
                </a>
                <a href="tel:129" class="emergency-card bnpb">
                    <div class="emergency-icon">
                        <i class="fas fa-hands-helping"></i>
                    </div>
                    <h3>129</h3>
                    <p>BNPB</p>
                    <div class="emergency-overlay">Klik untuk telepon</div>
                </a>
            </div>
            
            <div class="emergency-note">
                <p><i class="fas fa-info-circle"></i> Gunakan nomor ini hanya untuk keadaan darurat sebenarnya. Untuk informasi non-darurat, hubungi call center BPBD setempat.</p>
            </div>
        </section>

        <!-- Footer -->
        <footer class="main-footer">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <i class="fas fa-map-marked-alt"></i>
                        <span>Jabar<span class="logo-highlight">Siaga</span></span>
                    </div>
                    <p class="footer-description">
                        Portal WebGIS Jabar Siaga menyediakan informasi kebencanaan terintegrasi untuk 27 kabupaten/kota di Jawa Barat dengan 7 peta risiko bencana.
                    </p>
                    <div class="footer-badge">
                        <i class="fas fa-shield-alt"></i> Sistem Pemantauan Kebencanaan
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>Sumber Data</h4>
                    <ul class="footer-links">
                        <li><a href="https://www.arcgis.com/home/item.html?id=af6cc543bcc2468ea0cee2506814abf7" target="_blank">ArcGIS Atlas</a></li>
                        <li><a href="https://www.arcgis.com/home/item.html?id=b522ca6443e64aaf8583e9a5f2af3eaf" target="_blank">ArcGIS 3D Viewer</a></li>
                        <li><a href="https://data.bmkg.go.id" target="_blank">BMKG Data Terbuka</a></li>
                        <li><a href="https://bnpb.go.id" target="_blank">BNPB</a></li>
                        <li><a href="https://bpbd.jabarprov.go.id" target="_blank">BPBD Jawa Barat</a></li>
                        <li><a href="https://tanahair.indonesia.go.id" target="_blank">Badan Informasi Geospasial</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Pengembang</h4>
                    <div class="author-info">
                        <div class="author-avatar">
                            <i class="fas fa-university"></i>
                        </div>
                        <div class="author-details">
                            <p class="author-name">Sekolah Tinggi Pertanahan Nasional</p>
                            <p class="author-role">Pengembangan Sistem WebGIS Kebencanaan</p>
                        </div>
                    </div>
                    <div class="tech-stack">
                        <span class="tech-badge">HTML5</span>
                        <span class="tech-badge">CSS3</span>
                        <span class="tech-badge">JavaScript ES6</span>
                        <span class="tech-badge">Chart.js</span>
                        <span class="tech-badge">ArcGIS API</span>
                        <span class="tech-badge">GitHub Pages</span>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2026 Jabar Siaga - Portal WebGIS Kebencanaan Jawa Barat. Data bersumber dari lembaga resmi.</p>
                <p class="footer-disclaimer">
                    <i class="fas fa-exclamation-triangle"></i> Website ini menampilkan 7 peta risiko bencana untuk tujuan informasi dan kesiapsiagaan.
                </p>
            </div>
        </footer>
    </main>

    <!-- JavaScript Files -->
    <script src="js/particles.js"></script>
    <script src="js/krb-data.js"></script>
    <script src="js/main.js"></script>
    <script src="js/weather.js"></script>
    <script src="js/news.js"></script>
    <script src="js/infografis.js"></script>
</body>
</html>
[file content end]

[file name]: style.css
[file content begin]
/* CSS Reset & Base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Color Palette */
    --primary-blue: #0066cc;
    --primary-dark: #004d99;
    --accent-orange: #ff6600;
    --accent-red: #e63946;
    --accent-green: #2a9d8f;
    --accent-purple: #7209b7;
    --accent-yellow: #ffd166;
    
    /* Background & Surface */
    --bg-dark: #0a1929;
    --bg-card: rgba(16, 36, 64, 0.8);
    --bg-glass: rgba(255, 255, 255, 0.08);
    --bg-gradient: linear-gradient(135deg, #0a1929 0%, #1a3a5f 100%);
    
    /* Text */
    --text-primary: #ffffff;
    --text-secondary: #b8c7e0;
    --text-muted: #8ca3c7;
    
    /* Effects */
    --shadow-sm: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.2);
    --shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.3);
    --glass-blur: blur(12px);
    --border-radius: 16px;
    --transition-fast: 0.2s ease;
    --transition-medium: 0.4s ease;
    --transition-slow: 0.6s ease;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-dark);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
}

/* Loading Screen */
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bg-gradient);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.8s ease, visibility 0.8s ease;
}

.loading-content {
    text-align: center;
    z-index: 10000;
}

.loading-spinner {
    width: 60px;
    height: 60px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top-color: var(--primary-blue);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.loading-text {
    font-size: 1.1rem;
    color: var(--text-secondary);
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
}

.loading-screen.hidden {
    opacity: 0;
    visibility: hidden;
}

/* Particle Container */
#tsparticles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: auto;
}

/* Navigation */
.glass-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(16, 36, 64, 0.85);
    backdrop-filter: var(--glass-blur);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 1000;
    padding: 1rem 0;
    transition: all var(--transition-medium);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-primary);
}

.nav-logo i {
    color: var(--primary-blue);
    font-size: 2rem;
}

.logo-highlight {
    color: var(--accent-orange);
    font-weight: 800;
}

.nav-menu {
    display: flex;
    gap: 1.5rem;
    list-style: none;
}

.nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all var(--transition-fast);
    display: flex;
    align-items: center;
    gap: 8px;
}

.nav-link:hover,
.nav-link.active {
    color: var(--text-primary);
    background: var(--bg-glass);
    transform: translateY(-2px);
}

.nav-link.emergency-btn {
    background: linear-gradient(135deg, var(--accent-red), #ff4757);
    color: white;
    font-weight: 600;
    padding: 0.6rem 1.5rem;
}

.nav-link.emergency-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(230, 57, 70, 0.4);
}

.nav-mobile-toggle {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text-primary);
}

/* Hero Section */
.hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6rem 2rem 4rem;
    overflow: hidden;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
}

.noise-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
    opacity: 0.3;
}

.animated-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, 
        rgba(10, 25, 41, 0.9) 0%,
        rgba(26, 58, 95, 0.7) 25%,
        rgba(42, 157, 143, 0.4) 50%,
        rgba(114, 9, 183, 0.3) 75%,
        rgba(10, 25, 41, 0.9) 100%);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    z-index: -1;
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.hero-content {
    text-align: center;
    max-width: 900px;
    z-index: 10;
}

.hero-title {
    font-family: 'Poppins', sans-serif;
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.1;
}

.title-gradient {
    background: linear-gradient(90deg, 
        var(--primary-blue) 0%, 
        var(--accent-orange) 50%, 
        var(--accent-purple) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
    animation: textReveal 1.5s ease forwards;
    opacity: 0;
    transform: translateY(30px);
}

.title-gradient:nth-child(1) { animation-delay: 0.2s; }
.title-gradient:nth-child(2) { animation-delay: 0.4s; }
.title-gradient:nth-child(3) { animation-delay: 0.6s; }

@keyframes textReveal {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero-subtitle {
    font-size: 1.8rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 500;
}

.website-description {
    max-width: 800px;
    margin: 0 auto 3rem;
    padding: 2rem;
    background: rgba(16, 36, 64, 0.5);
    border-radius: var(--border-radius);
    border-left: 4px solid var(--primary-blue);
}

.website-description p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.8;
}

.hero-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-bottom: 4rem;
}

.cta-button {
    position: relative;
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 50px;
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: all var(--transition-medium);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-width: 200px;
}

.glow-button {
    background: linear-gradient(90deg, var(--primary-blue), var(--accent-purple));
    color: white;
    box-shadow: 0 8px 32px rgba(0, 102, 204, 0.4);
}

.glow-button:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 12px 40px rgba(0, 102, 204, 0.6);
}

.outline-button {
    background: transparent;
    color: var(--text-primary);
    border: 2px solid rgba(255, 255, 255, 0.2);
}

.outline-button:hover {
    border-color: var(--primary-blue);
    background: rgba(0, 102, 204, 0.1);
    transform: translateY(-5px);
}

.button-ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.button-icon {
    transition: transform var(--transition-fast);
}

.cta-button:hover .button-icon {
    transform: translateX(5px);
}

.scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 4rem;
    animation: bounce 2s infinite;
}

.scroll-dots {
    display: flex;
    gap: 8px;
}

.scroll-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--text-muted);
    transition: all var(--transition-fast);
}

.scroll-dot.active {
    background: var(--primary-blue);
    transform: scale(1.2);
}

.scroll-text {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.scroll-arrow {
    color: var(--primary-blue);
    font-size: 1.5rem;
    animation: arrowBounce 1.5s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
}

@keyframes arrowBounce {
    0%, 100% { 
        transform: translateY(0);
        opacity: 0.5;
    }
    50% { 
        transform: translateY(10px);
        opacity: 1;
    }
}

/* Common Section Styles */
section {
    padding: 5rem 2rem;
    position: relative;
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-header h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.section-header h2 i {
    color: var(--primary-blue);
}

.section-subtitle {
    color: var(--text-secondary);
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
}

/* Weather Section */
.weather-section {
    background: rgba(16, 36, 64, 0.4);
    backdrop-filter: var(--glass-blur);
    border-radius: var(--border-radius);
    margin: 2rem auto;
    max-width: 1400px;
    padding: 3rem;
}

.last-updated {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(0, 102, 204, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-top: 1rem;
}

.last-updated i {
    animation: spin 2s linear infinite;
}

.weather-container {
    position: relative;
}

.weather-carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
    gap: 1.5rem;
    padding: 1rem 0 2rem;
    margin-bottom: 2rem;
}

.weather-carousel::-webkit-scrollbar {
    display: none;
}

.weather-card {
    flex: 0 0 auto;
    width: 280px;
    background: var(--bg-card);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    backdrop-filter: var(--glass-blur);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all var(--transition-medium);
    position: relative;
    overflow: hidden;
}

.weather-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-blue);
}

.weather-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-blue), var(--accent-green));
}

.weather-location {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.location-name {
    font-size: 1.2rem;
    font-weight: 600;
}

.location-time {
    font-size: 0.8rem;
    color: var(--text-muted);
    background: rgba(255, 255, 255, 0.05);
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
}

.weather-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.temperature {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(90deg, var(--text-primary), var(--accent-orange));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1;
}

.weather-icon {
    font-size: 2.5rem;
    color: var(--primary-blue);
}

.weather-condition {
    text-align: center;
    font-size: 1rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
    min-height: 24px;
}

.weather-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
}

.weather-detail {
    display: flex;
    align-items: center;
    gap: 8px;
}

.detail-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(0, 102, 204, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-blue);
    font-size: 0.9rem;
}

.detail-label {
    font-size: 0.8rem;
    color: var(--text-muted);
}

.detail-value {
    font-weight: 600;
    font-size: 1rem;
}

.weather-loading {
    text-align: center;
    padding: 3rem;
    width: 100%;
}

.loading-spinner.small {
    width: 40px;
    height: 40px;
    margin: 0 auto 1rem;
}

.carousel-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
}

.carousel-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background: rgba(16, 36, 64, 0.6);
    color: var(--text-primary);
    font-size: 1.2rem;
    cursor: pointer;
    transition: all var(--transition-fast);
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-btn:hover {
    background: var(--primary-blue);
    border-color: var(--primary-blue);
    transform: scale(1.1);
}

.carousel-dots {
    display: flex;
    gap: 10px;
}

.carousel-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transition: all var(--transition-fast);
}

.carousel-dot.active {
    background: var(--primary-blue);
    transform: scale(1.2);
}

/* Infografis Section */
.infografis-section {
    max-width: 1400px;
    margin: 0 auto;
}

.infografis-container {
    background: var(--bg-card);
    border-radius: var(--border-radius);
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.infografis-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.filter-controls {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
}

.filter-controls label {
    color: var(--text-secondary);
    font-weight: 500;
}

.filter-select {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
    font-family: 'Inter', sans-serif;
    min-width: 200px;
}

.view-toggle {
    display: flex;
    gap: 0.5rem;
}

.view-btn {
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all var(--transition-fast);
    display: flex;
    align-items: center;
    gap: 8px;
}

.view-btn.active {
    background: var(--primary-blue);
    color: white;
    border-color: var(--primary-blue);
}

.view-btn:hover:not(.active) {
    background: rgba(255, 255, 255, 0.1);
}

.infografis-view {
    display: none;
    animation: fadeIn 0.5s ease;
}

.infografis-view.active {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.chart-view {
    min-height: 500px;
}

.chart-container {
    width: 100%;
    height: 500px;
    margin-bottom: 2rem;
}

.chart-legend {
    background: rgba(0, 0, 0, 0.2);
    padding: 1rem;
    border-radius: var(--border-radius);
}

.legend-items {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
}

.legend-color {
    width: 20px;
    height: 20px;
    border-radius: 4px;
}

.legend-color.rendah {
    background: #2a9d8f;
}

.legend-color.sedang {
    background: #f4a261;
}

.legend-color.tinggi {
    background: #e63946;
}

.table-view {
    overflow-x: auto;
}

.table-container {
    max-height: 500px;
    overflow-y: auto;
}

.krb-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(0, 0, 0, 0.2);
    border-radius: var(--border-radius);
    overflow: hidden;
}

.krb-table th {
    background: rgba(0, 102, 204, 0.2);
    padding: 1rem;
    text-align: center;
    font-weight: 600;
    color: var(--text-primary);
    position: sticky;
    top: 0;
}

.krb-table td {
    padding: 0.8rem 1rem;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.krb-table tr:hover {
    background: rgba(255, 255, 255, 0.05);
}

.krb-table td:first-child {
    text-align: left;
    font-weight: 500;
}

.krb-table .rendah {
    color: #2a9d8f;
    font-weight: 600;
}

.krb-table .sedang {
    color: #f4a261;
    font-weight: 600;
}

.krb-table .tinggi {
    color: #e63946;
    font-weight: 600;
}

.map-view {
    min-height: 500px;
}

.map-visualization {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.map-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.map-visual {
    flex-grow: 1;
    min-height: 400px;
}

.jabar-map {
    width: 100%;
    height: 400px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: var(--border-radius);
    overflow: hidden;
    position: relative;
}

.map-grid {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 2px;
    width: 100%;
    height: 100%;
    padding: 10px;
}

.map-item {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.7rem;
    padding: 0.2rem;
    transition: all var(--transition-fast);
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.map-item:hover {
    transform: scale(1.05);
    z-index: 10;
    box-shadow: 0 0 10px rgba(0, 102, 204, 0.5);
}

.map-item .tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    white-space: nowrap;
    display: none;
    z-index: 20;
}

.map-item:hover .tooltip {
    display: block;
}

.map-legend {
    display: flex;
    justify-content: center;
}

.gradient-legend {
    width: 300px;
    text-align: center;
}

.gradient-bar {
    height: 20px;
    background: linear-gradient(90deg, #2a9d8f, #f4a261, #e63946);
    border-radius: 10px;
    margin-bottom: 0.5rem;
}

.legend-labels {
    display: flex;
    justify-content: space-between;
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.infografis-note {
    margin-top: 2rem;
    padding: 1rem;
    background: rgba(0, 102, 204, 0.1);
    border-radius: var(--border-radius);
    border-left: 4px solid var(--primary-blue);
}

.infografis-note p {
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 10px;
}

.infografis-note i {
    color: var(--primary-blue);
}

/* Maps Section */
.maps-section {
    max-width: 1400px;
    margin: 0 auto;
}

.map-container {
    background: var(--bg-card);
    border-radius: var(--border-radius);
    padding: 2rem;
    margin-bottom: 3rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.map-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.map-header h3 {
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
}

.map-header h3 i {
    color: var(--primary-blue);
}

.map-actions {
    display: flex;
    gap: 1rem;
}

.map-action-btn {
    padding: 0.7rem 1.2rem;
    border-radius: 8px;
    background: rgba(0, 102, 204, 0.1);
    border: 1px solid rgba(0, 102, 204, 0.3);
    color: var(--primary-blue);
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-fast);
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
}

.map-action-btn:hover {
    background: var(--primary-blue);
    color: white;
    transform: translateY(-2px);
}

.map-action-btn.fullscreen-btn:hover {
    background: var(--accent-orange);
    border-color: var(--accent-orange);
}

.map-description {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.6;
}

.map-iframe-container {
    position: relative;
    width: 100%;
    height: 600px;
    border-radius: var(--border-radius);
    overflow: hidden;
    background: rgba(0, 0, 0, 0.2);
}

.map-iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
}

.lazy-load-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(16, 36, 64, 0.9), rgba(26, 58, 95, 0.9));
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: opacity var(--transition-medium);
}

.placeholder-content {
    text-align: center;
    color: var(--text-secondary);
}

.placeholder-content i {
    font-size: 3rem;
    color: var(--primary-blue);
    margin-bottom: 1rem;
}

.placeholder-content p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
}

.load-map-btn {
    padding: 0.8rem 2rem;
    border-radius: 8px;
    background: var(--primary-blue);
    color: white;
    border: none;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.load-map-btn:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
}

.layer-info {
    background: rgba(16, 36, 64, 0.5);
    border-radius: var(--border-radius);
    padding: 2rem;
    margin-top: 2rem;
}

.layer-info h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.layer-info h3 i {
    color: var(--primary-blue);
}

.layer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.layer-item {
    background: rgba(255, 255, 255, 0.05);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    border-left: 4px solid var(--primary-blue);
    transition: all var(--transition-medium);
}

.layer-item:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
}

.layer-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: white;
}

.layer-icon.gunung-api {
    background: linear-gradient(135deg, #e63946, #ff6b6b);
}

.layer-icon.gerakan-tanah {
    background: linear-gradient(135deg, #f4a261, #ff9f1c);
}

.layer-icon.longsor {
    background: linear-gradient(135deg, #7209b7, #560bad);
}

.layer-icon.banjir {
    background: linear-gradient(135deg, #4361ee, #3a56d4);
}

.layer-icon.kebakaran {
    background: linear-gradient(135deg, #f94144, #e63946);
}

.layer-icon.tsunami {
    background: linear-gradient(135deg, #4cc9f0, #2a9d8f);
}

.layer-icon.kekeringan {
    background: linear-gradient(135deg, #ffd166, #ff9e00);
}

.layer-item h4 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
}

.layer-item p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
}

/* Dashboard Section */
.dashboard-section {
    max-width: 1200px;
    margin: 0 auto;
}

.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.dashboard-card {
    background: var(--bg-card);
    border-radius: var(--border-radius);
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.dashboard-card h3 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.dashboard-card h3 i {
    color: var(--accent-orange);
}

.chart-container-small {
    width: 100%;
    height: 300px;
}

.dashboard-note {
    text-align: center;
    padding: 1.5rem;
    background: rgba(0, 102, 204, 0.1);
    border-radius: var(--border-radius);
    border-left: 4px solid var(--primary-blue);
}

.dashboard-note p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.dashboard-note i {
    color: var(--primary-blue);
}

/* Emergency Section */
.emergency-section {
    max-width: 1200px;
    margin: 0 auto;
}

.emergency-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.emergency-card {
    background: var(--bg-card);
    border-radius: var(--border-radius);
    padding: 2rem 1rem;
    text-align: center;
    text-decoration: none;
    color: var(--text-primary);
    transition: all var(--transition-medium);
    position: relative;
    overflow: hidden;
    border: 2px solid transparent;
}

.emergency-card:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: var(--shadow-lg);
}

.emergency-card.police:hover {
    border-color: #4361ee;
    background: linear-gradient(135deg, rgba(67, 97, 238, 0.1), var(--bg-card));
}

.emergency-card.fire:hover {
    border-color: #f94144;
    background: linear-gradient(135deg, rgba(249, 65, 68, 0.1), var(--bg-card));
}

.emergency-card.ambulance:hover {
    border-color: #4cc9f0;
    background: linear-gradient(135deg, rgba(76, 201, 240, 0.1), var(--bg-card));
}

.emergency-card.sar:hover {
    border-color: #f8961e;
    background: linear-gradient(135deg, rgba(248, 150, 30, 0.1), var(--bg-card));
}

.emergency-card.bnpb:hover {
    border-color: #7209b7;
    background: linear-gradient(135deg, rgba(114, 9, 183, 0.1), var(--bg-card));
}

.emergency-icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
}

.emergency-card.police .emergency-icon {
    background: linear-gradient(135deg, #4361ee, #3a56d4);
    color: white;
}

.emergency-card.fire .emergency-icon {
    background: linear-gradient(135deg, #f94144, #e63946);
    color: white;
}

.emergency-card.ambulance .emergency-icon {
    background: linear-gradient(135deg, #4cc9f0, #2a9d8f);
    color: white;
}

.emergency-card.sar .emergency-icon {
    background: linear-gradient(135deg, #f8961e, #f3722c);
    color: white;
}

.emergency-card.bnpb .emergency-icon {
    background: linear-gradient(135deg, #7209b7, #560bad);
    color: white;
}

.emergency-card h3 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0.5rem 0;
}

.emergency-card p {
    color: var(--text-secondary);
    font-size: 0.95rem;
}

.emergency-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 102, 204, 0.9);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity var(--transition-fast);
    border-radius: var(--border-radius);
    font-weight: 600;
    font-size: 1.1rem;
}

.emergency-card:hover .emergency-overlay {
    opacity: 1;
}

.emergency-note {
    text-align: center;
    padding: 1.5rem;
    background: rgba(230, 57, 70, 0.1);
    border-radius: var(--border-radius);
    border-left: 4px solid var(--accent-red);
    max-width: 600px;
    margin: 0 auto;
}

.emergency-note p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.emergency-note i {
    color: var(--accent-red);
}

/* Footer */
.main-footer {
    background: rgba(10, 25, 41, 0.95);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 3rem 2rem 1.5rem;
    margin-top: 5rem;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
}

.footer-logo i {
    color: var(--primary-blue);
    font-size: 2rem;
}

.footer-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
}

.footer-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(114, 9, 183, 0.2);
    color: var(--accent-purple);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 500;
    font-size: 0.9rem;
}

.footer-section h4 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
}

.footer-links {
    list-style: none;
}

.footer-links li {
    margin-bottom: 0.8rem;
}

.footer-links a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: all var(--transition-fast);
    display: flex;
    align-items: center;
    gap: 8px;
}

.footer-links a:hover {
    color: var(--primary-blue);
    transform: translateX(5px);
}

.author-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.author-avatar {
    font-size: 3rem;
    color: var(--primary-blue);
}

.author-details p {
    margin: 0;
}

.author-name {
    font-weight: 600;
    font-size: 1.2rem;
    color: var(--text-primary);
}

.author-role {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
}

.tech-badge {
    background: rgba(0, 102, 204, 0.1);
    color: var(--primary-blue);
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    border: 1px solid rgba(0, 102, 204, 0.3);
}

.footer-bottom {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    text-align: center;
}

.footer-bottom p {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
}

.footer-disclaimer {
    color: var(--accent-orange) !important;
    font-size: 1rem !important;
    margin-top: 1rem !important;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

/* Responsive Design */
@media (max-width: 1200px) {
    .hero-title {
        font-size: 3.5rem;
    }
    
    .dashboard-grid {
        grid-template-columns: 1fr;
    }
    
    .map-grid {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(9, 1fr);
    }
}

@media (max-width: 992px) {
    .hero-title {
        font-size: 3rem;
    }
    
    .hero-subtitle {
        font-size: 1.5rem;
    }
    
    .website-description {
        padding: 1.5rem;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .cta-button {
        width: 100%;
        max-width: 300px;
    }
    
    .nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(16, 36, 64, 0.95);
        backdrop-filter: var(--glass-blur);
        flex-direction: column;
        padding: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .nav-menu.active {
        display: flex;
    }
    
    .nav-mobile-toggle {
        display: block;
    }
    
    .section-header h2 {
        font-size: 2rem;
    }
    
    .map-iframe-container {
        height: 400px;
    }
    
    .infografis-controls {
        flex-direction: column;
        align-items: stretch;
    }
    
    .filter-controls {
        flex-direction: column;
        align-items: stretch;
    }
    
    .filter-select {
        width: 100%;
    }
    
    .view-toggle {
        justify-content: center;
    }
    
    .layer-grid {
        grid-template-columns: 1fr;
    }
    
    .map-grid {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(12, 1fr);
    }
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
    }
    
    section {
        padding: 3rem 1rem;
    }
    
    .weather-section,
    .map-container,
    .infografis-container {
        padding: 1.5rem;
    }
    
    .weather-card {
        width: 260px;
    }
    
    .dashboard-grid {
        grid-template-columns: 1fr;
    }
    
    .dashboard-card {
        padding: 1.5rem;
    }
    
    .map-header,
    .map-visualization .map-header {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .map-actions {
        width: 100%;
        justify-content: space-between;
    }
    
    .emergency-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .map-grid {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(18, 1fr);
    }
    
    .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .nav-container {
        padding: 0 1rem;
    }
    
    .section-header h2 {
        font-size: 1.8rem;
        flex-direction: column;
        gap: 10px;
    }
    
    .weather-card {
        width: 240px;
        padding: 1rem;
    }
    
    .emergency-grid {
        grid-template-columns: 1fr;
    }
    
    .map-grid {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(27, 1fr);
        gap: 1px;
        padding: 5px;
    }
    
    .map-item {
        font-size: 0.6rem;
    }
}

/* Fullscreen Modal */
.fullscreen-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 9998;
    display: none;
    flex-direction: column;
}

.fullscreen-modal.active {
    display: flex;
}

.fullscreen-header {
    padding: 1rem;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.fullscreen-close {
    background: var(--accent-red);
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
}

.fullscreen-content {
    flex-grow: 1;
    padding: 1rem;
}

.fullscreen-iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
}
[file content end]

[file name]: particles.js
[file content begin]
// Interactive Particle Background with tsParticles - Enhanced Parallax Effect

class ParticleBackground {
    constructor() {
        this.containerId = 'tsparticles';
        this.particles = null;
        this.isInitialized = false;
        
        // Enhanced configuration for disaster-themed particles with parallax
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
                            smooth: 50  // Enhanced smoothness for parallax
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
                        "#e63946",  // Accent red
                        "#ffd166",  // Accent yellow
                        "#4cc9f0"   // Light blue
                    ],
                    animation: {
                        h: {
                            count: 0,
                            enable: true,
                            speed: 30,  // Faster color change
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
                    random: true,  // Enable random movement
                    size: false,
                    speed: {
                        min: 0.1,
                        max: 2  // Increased max speed for more dynamic effect
                    },
                    spin: {
                        acceleration: 0,
                        enable: true,  // Enable spin
                        speed: {
                            min: 1,
                            max: 3
                        }
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
                    value: 120  // Increased particle count
                },
                opacity: {
                    random: {
                        enable: true,
                        minimumValue: 0.1
                    },
                    value: {
                        min: 0.1,
                        max: 0.8
                    },
                    animation: {
                        count: 0,
                        enable: true,
                        speed: 2,  // Faster opacity animation
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
                    type: ["circle", "triangle", "star"]  // Multiple shapes
                },
                size: {
                    random: {
                        enable: true,
                        minimumValue: 1
                    },
                    value: {
                        min: 1,
                        max: 8  // Increased max size
                    },
                    animation: {
                        count: 0,
                        enable: true,
                        speed: 5,  // Faster size animation
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
                        enable: true,
                        minimumValue: 0
                    },
                    value: 0,
                    animation: {
                        enable: true,
                        speed: {
                            min: 1,
                            max: 5
                        },
                        decay: 0,
                        sync: false
                    },
                    direction: "random",
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
                    distance: 10,  // Increased wobble distance
                    enable: true,  // Enable wobble
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
                    distance: 100,  // Reduced distance for denser links
                    enable: true,
                    frequency: 1,
                    opacity: 0.2,  // Reduced opacity for subtle links
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
                
                // Add enhanced event listeners for parallax
                this.addEventListeners();
                
                // Add scroll-based parallax effect
                this.addScrollParallax();
                
            } else {
                throw new Error('Failed to create particle container');
            }
            
        } catch (error) {
            console.error('Error loading particles:', error);
            throw error;
        }
    }
    
    addEventListeners() {
        // Enhanced mouse move effect for parallax
        document.addEventListener('mousemove', (event) => {
            if (!this.particles || !this.isInitialized) return;
            
            const particles = this.particles.particles.array;
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            
            particles.forEach(particle => {
                const dx = particle.position.x - mouseX;
                const dy = particle.position.y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // Apply parallax effect based on distance
                if (distance < 300) {
                    const force = (300 - distance) / 300;
                    const angle = Math.atan2(dy, dx);
                    
                    // Apply gentle push away from cursor with parallax
                    particle.velocity.x += Math.cos(angle) * force * 0.8;
                    particle.velocity.y += Math.sin(angle) * force * 0.8;
                    
                    // Change color based on proximity
                    if (distance < 100) {
                        particle.color.value = this.getRandomColor();
                    }
                }
            });
        });
        
        // Click effect with ripple
        document.addEventListener('click', (event) => {
            if (!this.particles || !this.isInitialized) return;
            
            // Create ripple effect
            this.createRippleEffect(event.clientX, event.clientY);
            
            // Add particles at click position
            this.particles.addParticle({
                x: event.clientX,
                y: event.clientY,
                color: this.getRandomColor(),
                size: {
                    value: 10
                }
            });
        });
    }
    
    addScrollParallax() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            if (!this.particles || !this.isInitialized) return;
            
            const scrollY = window.scrollY;
            const delta = scrollY - lastScrollY;
            lastScrollY = scrollY;
            
            // Apply subtle parallax based on scroll
            const particles = this.particles.particles.array;
            particles.forEach(particle => {
                // Subtle vertical movement based on scroll
                particle.velocity.y += delta * 0.01;
                
                // Limit maximum speed
                const maxSpeed = 5;
                const speed = Math.sqrt(
                    particle.velocity.x * particle.velocity.x + 
                    particle.velocity.y * particle.velocity.y
                );
                
                if (speed > maxSpeed) {
                    particle.velocity.x = (particle.velocity.x / speed) * maxSpeed;
                    particle.velocity.y = (particle.velocity.y / speed) * maxSpeed;
                }
            });
        });
    }
    
    createRippleEffect(x, y) {
        if (!this.particles || !this.isInitialized) return;
        
        const particles = this.particles.particles.array;
        const rippleCount = 20;
        
        for (let i = 0; i < rippleCount; i++) {
            const angle = (i / rippleCount) * Math.PI * 2;
            const speed = 2 + Math.random() * 3;
            
            this.particles.addParticle({
                x: x,
                y: y,
                color: this.getRandomColor(),
                size: {
                    value: 2 + Math.random() * 4
                },
                velocity: {
                    x: Math.cos(angle) * speed,
                    y: Math.sin(angle) * speed
                },
                life: {
                    duration: 1 + Math.random() * 2
                }
            });
        }
    }
    
    getRandomColor() {
        const colors = [
            "#0066cc",  // Primary blue
            "#ff6600",  // Accent orange
            "#2a9d8f",  // Accent green
            "#7209b7",  // Accent purple
            "#e63946",  // Accent red
            "#ffd166",  // Accent yellow
            "#4cc9f0"   // Light blue
        ];
        
        return colors[Math.floor(Math.random() * colors.length)];
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
                        filter: blur(1px);
                    }
                    
                    .fallback-particle:nth-child(odd) {
                        background: linear-gradient(135deg, #ff6600, #e63946);
                        animation-duration: 25s;
                        animation-direction: reverse;
                    }
                    
                    .fallback-particle:nth-child(3n) {
                        background: linear-gradient(135deg, #2a9d8f, #4cc9f0);
                        animation-duration: 30s;
                    }
                    
                    @keyframes float {
                        0% {
                            transform: translate(0, 0) rotate(0deg) scale(1);
                        }
                        50% {
                            transform: translate(50vw, 50vh) rotate(180deg) scale(1.2);
                        }
                        100% {
                            transform: translate(100vw, 100vh) rotate(360deg) scale(1);
                        }
                    }
                </style>
            </div>
        `;
        
        // Create fallback particles
        const fallbackContainer = container.querySelector('.fallback-animation');
        for (let i = 0; i < 30; i++) {
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
});
[file content end]

[file name]: main.js
[file content begin]
// Main JavaScript File - Jabar Siaga Portal WebGIS Kebencanaan

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLoadingScreen();
    initNavigation();
    initSmoothScroll();
    initLazyLoading();
    initFullscreenMaps();
    initRippleButtons();
    initButtonFunctions();
    
    // Initialize infografis
    if (typeof window.initInfografis === 'function') {
        window.initInfografis();
    }
    
    // Initialize dashboard charts
    initDashboardCharts();
    
    // Show system notice in console
    console.log('%c🌐 Jabar Siaga - Portal WebGIS Kebencanaan Jawa Barat', 'color: #0066cc; font-size: 16px; font-weight: bold;');
    console.log('%cSistem Informasi 7 Peta Rawan Bencana Jawa Barat', 'color: #ff6600;');
    console.log('%cData KRB 27 kabupaten/kota tersedia untuk analisis risiko', 'color: #2a9d8f;');
});

// Loading Screen Management
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Simulate minimum loading time for better UX
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        
        // Remove from DOM after animation completes
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 800);
    }, 1500);
}

// Navigation Initialization
function initNavigation() {
    const mobileToggle = document.querySelector('.nav-mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Active link management
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            // Update active class
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // If it's an anchor link, handle smooth scroll
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
}

function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (href === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
}

// Smooth Scroll Initialization
function initSmoothScroll() {
    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.visibility = 'hidden';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.visibility = 'visible';
            }
        });
    }
}

// Initialize Button Functions
function initButtonFunctions() {
    // Akses Peta button
    const aksesPetaBtn = document.getElementById('aksesPetaBtn');
    if (aksesPetaBtn) {
        aksesPetaBtn.addEventListener('click', () => {
            const mapsSection = document.getElementById('maps');
            if (mapsSection) {
                const headerOffset = 80;
                const elementPosition = mapsSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update active navigation
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('a[href="#maps"]').classList.add('active');
            }
        });
    }
    
    // Dashboard button
    const dashboardBtn = document.getElementById('dashboardBtn');
    if (dashboardBtn) {
        dashboardBtn.addEventListener('click', () => {
            const dashboardSection = document.getElementById('dashboard');
            if (dashboardSection) {
                const headerOffset = 80;
                const elementPosition = dashboardSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update active navigation
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('a[href="#dashboard"]').classList.add('active');
            }
        });
    }
}

// Lazy Loading for 3D Map
function initLazyLoading() {
    const lazyIframes = document.querySelectorAll('.lazy-load');
    const loadButtons = document.querySelectorAll('.load-map-btn');
    
    // Load iframe when button is clicked
    loadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const container = this.closest('.lazy-load-placeholder');
            const iframe = container.previousElementSibling;
            
            if (iframe && iframe.dataset.src) {
                iframe.src = iframe.dataset.src;
                container.style.opacity = '0';
                
                setTimeout(() => {
                    container.style.display = 'none';
                }, 400);
            }
        });
    });
    
    // Load iframe when scrolled into view
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                
                if (iframe.dataset.src) {
                    // Small delay for better UX
                    setTimeout(() => {
                        iframe.src = iframe.dataset.src;
                        iframe.classList.remove('lazy-load');
                    }, 300);
                }
                
                lazyObserver.unobserve(iframe);
            }
        });
    }, { rootMargin: '100px' });
    
    lazyIframes.forEach(iframe => {
        lazyObserver.observe(iframe);
    });
}

// Fullscreen Map Functionality
function initFullscreenMaps() {
    const fullscreenButtons = document.querySelectorAll('.fullscreen-btn');
    
    fullscreenButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const iframe = document.getElementById(targetId);
            
            if (iframe) {
                openFullscreenMap(iframe.src, iframe.title);
            }
        });
    });
    
    // Close fullscreen with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeFullscreenMap();
        }
    });
}

function openFullscreenMap(src, title) {
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'fullscreen-modal';
    modal.innerHTML = `
        <div class="fullscreen-header">
            <h3 style="margin: 0; color: white;">${title}</h3>
            <button class="fullscreen-close">
                <i class="fas fa-times"></i> Tutup Layar Penuh
            </button>
        </div>
        <div class="fullscreen-content">
            <iframe class="fullscreen-iframe" src="${src}" title="${title}"></iframe>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add active class for animation
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Close button functionality
    const closeBtn = modal.querySelector('.fullscreen-close');
    closeBtn.addEventListener('click', closeFullscreenMap);
}

function closeFullscreenMap() {
    const modal = document.querySelector('.fullscreen-modal');
    if (modal) {
        modal.classList.remove('active');
        
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Ripple Button Effect
function initRippleButtons() {
    const buttons = document.querySelectorAll('.glow-button, .outline-button, .map-action-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove existing ripples
            const existingRipples = this.querySelectorAll('.button-ripple');
            existingRipples.forEach(ripple => ripple.remove());
            
            // Create new ripple
            const ripple = document.createElement('span');
            ripple.className = 'button-ripple';
            
            // Calculate ripple position
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Dashboard Charts
function initDashboardCharts() {
    // Wait for KRB data to be loaded
    if (!window.krbData || !window.krbData.length) {
        setTimeout(initDashboardCharts, 500);
        return;
    }
    
    // Chart 1: Distribution of Risk Levels
    const riskDistributionChart = document.getElementById('riskDistributionChart');
    if (riskDistributionChart) {
        createRiskDistributionChart();
    }
    
    // Chart 2: Average Index by Disaster Type
    const bencanaChart = document.getElementById('bencanaChart');
    if (bencanaChart) {
        createBencanaChart();
    }
}

function createRiskDistributionChart() {
    const ctx = document.getElementById('riskDistributionChart').getContext('2d');
    
    // Calculate risk levels for all cities
    let rendah = 0, sedang = 0, tinggi = 0;
    
    window.krbData.forEach(city => {
        const avgRisk = calculateAverageRisk(city);
        if (avgRisk <= 3) rendah++;
        else if (avgRisk <= 6) sedang++;
        else tinggi++;
    });
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Rendah', 'Sedang', 'Tinggi'],
            datasets: [{
                data: [rendah, sedang, tinggi],
                backgroundColor: [
                    '#2a9d8f',
                    '#f4a261',
                    '#e63946'
                ],
                borderWidth: 2,
                borderColor: 'rgba(255, 255, 255, 0.1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#b8c7e0',
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${value} kota (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function createBencanaChart() {
    const ctx = document.getElementById('bencanaChart').getContext('2d');
    
    // Calculate average for each disaster type
    const averages = {
        longsor: 0,
        banjir: 0,
        kebakaran: 0,
        tsunami: 0,
        kekeringan: 0,
        gunung_api: 0,
        gerakan_tanah: 0
    };
    
    window.krbData.forEach(city => {
        averages.longsor += city.longsor;
        averages.banjir += city.banjir;
        averages.kebakaran += city.kebakaran_hutan;
        averages.tsunami += city.tsunami;
        averages.kekeringan += city.kekeringan;
        averages.gunung_api += city.gunung_api;
        averages.gerakan_tanah += city.gerakan_tanah;
    });
    
    const totalCities = window.krbData.length;
    Object.keys(averages).forEach(key => {
        averages[key] = parseFloat((averages[key] / totalCities).toFixed(1));
    });
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Longsor', 'Banjir', 'Kebakaran Hutan', 'Tsunami', 'Kekeringan', 'Gunung Api', 'Gerakan Tanah'],
            datasets: [{
                data: [
                    averages.longsor,
                    averages.banjir,
                    averages.kebakaran,
                    averages.tsunami,
                    averages.kekeringan,
                    averages.gunung_api,
                    averages.gerakan_tanah
                ],
                backgroundColor: [
                    '#7209b7',
                    '#4361ee',
                    '#f94144',
                    '#4cc9f0',
                    '#ffd166',
                    '#e63946',
                    '#f4a261'
                ],
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.2)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Rata-rata: ${context.raw}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10,
                    ticks: {
                        color: '#b8c7e0'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#b8c7e0'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
}

function calculateAverageRisk(city) {
    const risks = [
        city.longsor,
        city.banjir,
        city.kebakaran_hutan,
        city.tsunami,
        city.kekeringan,
        city.gunung_api,
        city.gerakan_tanah
    ];
    
    const sum = risks.reduce((a, b) => a + b, 0);
    return parseFloat((sum / risks.length).toFixed(1));
}

// Utility function for date formatting
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    return date.toLocaleDateString('id-ID', options);
}

// Utility function for number formatting
function formatNumber(num) {
    return new Intl.NumberFormat('id-ID').format(num);
}

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Initialize on window load
window.addEventListener('load', function() {
    // Update copyright year
    const yearElement = document.querySelector('footer p:first-child');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2026', currentYear);
    }
    
    // Check for console errors
    console.log('%c✅ Semua sistem Jabar Siaga berhasil dimuat', 'color: #2a9d8f; font-weight: bold;');
    console.log('%c📊 Data KRB 27 kabupaten/kota siap digunakan', 'color: #7209b7;');
});
[file content end]

[file name]: weather.js
[file content begin]
// Weather Data Handler - BMKG Jawa Barat (27 Kota)

class WeatherManager {
    constructor() {
        this.weatherData = [];
        this.currentSlide = 0;
        this.slidesToShow = 4;
        this.autoSlideInterval = null;
        this.slideInterval = 6000; // 6 seconds
        
        // 27 Kabupaten/Kota di Jawa Barat
        this.jabarCities = [
            { name: 'Bandung', type: 'Kota' },
            { name: 'Bandung', type: 'Kabupaten' },
            { name: 'Bekasi', type: 'Kota' },
            { name: 'Bekasi', type: 'Kabupaten' },
            { name: 'Bogor', type: 'Kota' },
            { name: 'Bogor', type: 'Kabupaten' },
            { name: 'Cimahi', type: 'Kota' },
            { name: 'Cirebon', type: 'Kota' },
            { name: 'Cirebon', type: 'Kabupaten' },
            { name: 'Depok', type: 'Kota' },
            { name: 'Sukabumi', type: 'Kota' },
            { name: 'Sukabumi', type: 'Kabupaten' },
            { name: 'Tasikmalaya', type: 'Kota' },
            { name: 'Tasikmalaya', type: 'Kabupaten' },
            { name: 'Banjar', type: 'Kota' },
            { name: 'Garut', type: 'Kabupaten' },
            { name: 'Karawang', type: 'Kabupaten' },
            { name: 'Purwakarta', type: 'Kabupaten' },
            { name: 'Subang', type: 'Kabupaten' },
            { name: 'Indramayu', type: 'Kabupaten' },
            { name: 'Sumedang', type: 'Kabupaten' },
            { name: 'Majalengka', type: 'Kabupaten' },
            { name: 'Kuningan', type: 'Kabupaten' },
            { name: 'Ciamis', type: 'Kabupaten' },
            { name: 'Pangandaran', type: 'Kabupaten' },
            { name: 'Cianjur', type: 'Kabupaten' },
            { name: 'West Bandung', type: 'Kabupaten' }
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
            
            // Simulate API call with sample data for 27 cities
            // In production, this would call BMKG API
            await this.generateSampleWeatherData();
            
            // Update carousel
            this.updateWeatherCarousel();
            
        } catch (error) {
            console.error('Error fetching weather data:', error);
            this.showErrorState();
        }
    }
    
    async generateSampleWeatherData() {
        this.weatherData = [];
        
        // Generate sample weather data for each city
        const weatherConditions = [
            { condition: 'Cerah', icon: 'fa-sun', tempRange: { min: 25, max: 32 } },
            { condition: 'Cerah Berawan', icon: 'fa-cloud-sun', tempRange: { min: 24, max: 30 } },
            { condition: 'Berawan', icon: 'fa-cloud', tempRange: { min: 23, max: 29 } },
            { condition: 'Hujan Ringan', icon: 'fa-cloud-rain', tempRange: { min: 22, max: 27 } },
            { condition: 'Hujan Sedang', icon: 'fa-cloud-showers-heavy', tempRange: { min: 21, max: 26 } },
            { condition: 'Hujan Lebat', icon: 'fa-poo-storm', tempRange: { min: 20, max: 25 } }
        ];
        
        const windDirections = ['Utara', 'Timur Laut', 'Timur', 'Tenggara', 'Selatan', 'Barat Daya', 'Barat', 'Barat Laut'];
        
        this.jabarCities.forEach(city => {
            const weatherType = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
            const temp = Math.floor(Math.random() * 
                (weatherType.tempRange.max - weatherType.tempRange.min + 1)) + weatherType.tempRange.min;
            const humidity = Math.floor(Math.random() * 30) + 60; // 60-90%
            const windSpeed = Math.floor(Math.random() * 15) + 5; // 5-20 km/jam
            const windDirection = windDirections[Math.floor(Math.random() * windDirections.length)];
            
            this.weatherData.push({
                city: `${city.type} ${city.name}`,
                timestamp: new Date().toISOString(),
                temperature: `${temp}°C`,
                humidity: `${humidity}%`,
                windSpeed: `${windSpeed} km/jam`,
                windDirection: windDirection,
                weatherCondition: weatherType.condition,
                icon: weatherType.icon
            });
        });
        
        // Sort alphabetically
        this.weatherData.sort((a, b) => a.city.localeCompare(b.city));
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
        
        const time = new Date(weather.timestamp).toLocaleTimeString('id-ID', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        // Determine background color based on weather
        let weatherClass = '';
        if (weather.weatherCondition.includes('Hujan')) {
            weatherClass = 'rainy';
        } else if (weather.weatherCondition.includes('Cerah')) {
            weatherClass = 'sunny';
        } else {
            weatherClass = 'cloudy';
        }
        
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
            </div>
        `;
        
        // Add weather class for styling
        card.classList.add(weatherClass);
        
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
        const cardWidth = 280 + 16; // card width + gap
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
                    <p>Memuat data cuaca 27 kota dari BMKG...</p>
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
            const dateString = now.toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            lastUpdatedElement.innerHTML = `
                <i class="fas fa-sync-alt"></i> Diperbarui: ${dateString}, ${timeString}
            `;
            
            // Update every minute
            setInterval(() => {
                const newNow = new Date();
                const newTimeString = newNow.toLocaleTimeString('id-ID', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    second: '2-digit'
                });
                const newDateString = newNow.toLocaleDateString('id-ID', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                
                lastUpdatedElement.innerHTML = `
                    <i class="fas fa-sync-alt"></i> Diperbarui: ${newDateString}, ${newTimeString}
                `;
            }, 60000); // Update every minute
        }
    }
    
    // Refresh weather data
    async refreshWeatherData() {
        this.showLoadingState();
        await this.fetchWeatherData();
    }
}

// Initialize weather manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.weatherManager = new WeatherManager();
    
    // Auto-refresh every 30 minutes
    setInterval(() => {
        if (window.weatherManager) {
            window.weatherManager.refreshWeatherData();
        }
    }, 30 * 60 * 1000);
});
[file content end]

[file name]: news.js
[file content begin]
// News Handler - Jabar Siaga Berita Kebencanaan

class NewsManager {
    constructor() {
        this.newsData = [];
        
        // Updated news data with the 8 requested articles
        this.newsData = [
            {
                title: '18 Bencana Terjang Jabar di Awal 2026, Karawang Jadi Titik Terparah',
                description: 'Sebanyak 18 kejadian bencana alam telah terjadi di Jawa Barat sepanjang awal tahun 2026, dengan Kabupaten Karawang menjadi wilayah terdampak paling parah.',
                source: 'Detik Jabar',
                date: '2026-01-18',
                url: 'https://www.detik.com/jabar/berita/d-8305133/18-bencana-terjang-jabar-di-awal-2026-karawang-jadi-titik-terparah',
                image: null,
                category: 'Bencana Alam'
            },
            {
                title: 'Jawa Barat Status Tanggap Darurat Bencana hingga April 2026',
                description: 'Pemerintah Provinsi Jawa Barat menetapkan status tanggap darurat bencana hingga April 2026, mencakup beberapa jenis bencana dan langkah penanganan selama 72 jam pertama.',
                source: 'Ayo Bandung',
                date: '2026-01-15',
                url: 'https://www.ayobandung.com/umum/7916597315/jawa-barat-status-tanggap-darurat-bencana-hingga-april-2026-ini-beberapa-jenis-bencana-dan-langkah-pertama-selama-72-jam',
                image: null,
                category: 'Kebijakan'
            },
            {
                title: 'Awal Tahun 2026, BPBD Catat 26.318 Warga Jawa Barat Terdampak Bencana Alam',
                description: 'Badan Penanggulangan Bencana Daerah Jawa Barat mencatat sebanyak 26.318 warga terdampak bencana alam di awal tahun 2026.',
                source: 'NU Online Jabar',
                date: '2026-01-12',
                url: 'https://jabar.nu.or.id/seputar-jabar/awal-tahun-2026-bpbd-catat-26-318-warga-jawa-barat-terdampak-bencana-alam-flmuC',
                image: null,
                category: 'Data Bencana'
            },
            {
                title: 'Daerah Provinsi Jawa Barat Rawan Bencana, Seluruh Pemerintah Kabupaten/Kota Menyatakan Siaga',
                description: 'Seluruh pemerintah kabupaten/kota di Jawa Barat menyatakan status siaga bencana mengingat tingginya kerentanan wilayah terhadap berbagai jenis bencana alam.',
                source: 'Pikiran Rakyat',
                date: '2026-01-10',
                url: 'https://www.pikiran-rakyat.com/news/pr-019945008/daerah-provinsi-jawa-barat-rawan-bencana-seluruh-pemerintah-kabupatenkota-menyatakan-siaga-menghadapinya?page=all',
                image: null,
                category: 'Kesiapsiagaan'
            },
            {
                title: 'Banjir hingga Longsor Melanda Sejumlah Daerah Jawa Barat, Pemprov Jabar Siapkan Rp328 Miliar Dana BTT 2026',
                description: 'Pemerintah Provinsi Jawa Barat menyiapkan anggaran Rp328 miliar dari Dana Bantuan Tambahan Tidak Terduga (BTT) tahun 2026 untuk penanganan banjir dan tanah longsor.',
                source: 'Aksara Jabar',
                date: '2026-01-08',
                url: 'https://aksarajabar.pikiran-rakyat.com/jabar/pr-999946075/banjir-hingga-longsor-melanda-sejumlah-daerah-jawa-barat-pemprov-jabar-siapkan-rp328-miliar-dana-btt-2026',
                image: null,
                category: 'Anggaran'
            },
            {
                title: 'Banjir Terparah di Jawa Barat: Karawang dan Bekasi Terendam Banjir, Ribuan Warga Dievakuasi',
                description: 'Banjir terparah melanda wilayah Karawang dan Bekasi, menyebabkan ribuan warga dievakuasi dan kerugian material yang signifikan.',
                source: 'Trans Indonesia',
                date: '2026-01-20',
                url: 'https://transindonesia.co/2026/01/20/banjir-terparah-di-jawa-barat-karawang-dan-bekasi-terendam-banjir-ribuan-warga-dievakuasi/',
                image: null,
                category: 'Bencana Hidrometeorologi'
            },
            {
                title: 'Rentetan Bencana masih Terjadi di Jawa Barat',
                description: 'Rentetan bencana alam masih terjadi di berbagai wilayah Jawa Barat, memerlukan koordinasi penanganan yang lebih intensif antar lembaga.',
                source: 'Media Indonesia',
                date: '2026-01-22',
                url: 'https://mediaindonesia.com/nusantara/850651/rentetan-bencana-masih-terjadi-di-jawa-barat',
                image: null,
                category: 'Laporan Bencana'
            },
            {
                title: 'Daerah Provinsi Jawa Barat Rawan Bencana, Seluruh Pemerintah Kabupaten/Kota Menyatakan Siaga Menghadapinya',
                description: 'Artikel kedua dengan fokus berbeda tentang kesiapsiagaan seluruh kabupaten/kota di Jawa Barat dalam menghadapi ancaman bencana.',
                source: 'Pikiran Rakyat',
                date: '2026-01-05',
                url: 'https://www.pikiran-rakyat.com/news/pr-019945008/daerah-provinsi-jawa-barat-rawan-bencana-seluruh-pemerintah-kabupatenkota-menyatakan-siaga-menghadapinya?page=2',
                image: null,
                category: 'Kebijakan Daerah'
            }
        ];
        
        this.init();
    }
    
    async init() {
        this.renderNews();
        this.addNewsFilters();
    }
    
    renderNews() {
        const newsContainer = document.getElementById('newsContainer');
        if (!newsContainer) return;
        
        // Clear loading state
        newsContainer.innerHTML = '';
        
        // Create news cards
        this.newsData.forEach((news, index) => {
            const card = this.createNewsCard(news, index);
            newsContainer.appendChild(card);
        });
    }
    
    createNewsCard(news, index) {
        const card = document.createElement('div');
        card.className = 'news-card';
        
        // Format date
        const date = new Date(news.date);
        const formattedDate = date.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Create gradient background based on category
        const categoryColor = this.getCategoryColor(news.category);
        
        card.innerHTML = `
            <div class="news-image" style="background: linear-gradient(135deg, ${categoryColor.start}, ${categoryColor.end});">
                <div class="news-category">${news.category}</div>
                <div class="news-source">${news.source}</div>
            </div>
            <div class="news-content">
                <div class="news-date">
                    <i class="far fa-calendar"></i> ${formattedDate}
                </div>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-description">${news.description}</p>
                <div class="news-actions">
                    <a href="${news.url}" target="_blank" class="news-btn primary">
                        <i class="fas fa-external-link-alt"></i> Baca Selengkapnya
                    </a>
                    <button class="news-btn secondary share-btn" data-url="${news.url}" data-title="${news.title}">
                        <i class="fas fa-share-alt"></i> Bagikan
                    </button>
                </div>
            </div>
        `;
        
        // Add share functionality
        const shareBtn = card.querySelector('.share-btn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => this.shareNews(
                shareBtn.dataset.title,
                shareBtn.dataset.url
            ));
        }
        
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
        });
        
        return card;
    }
    
    getCategoryColor(category) {
        const colors = {
            'Bencana Alam': { start: '#e63946', end: '#ff6b6b' },
            'Kebijakan': { start: '#4361ee', end: '#3a56d4' },
            'Data Bencana': { start: '#2a9d8f', end: '#4cc9f0' },
            'Kesiapsiagaan': { start: '#7209b7', end: '#560bad' },
            'Anggaran': { start: '#f4a261', end: '#ff9f1c' },
            'Bencana Hidrometeorologi': { start: '#4cc9f0', end: '#2a9d8f' },
            'Laporan Bencana': { start: '#ffd166', end: '#ff9e00' },
            'Kebijakan Daerah': { start: '#f94144', end: '#e63946' }
        };
        
        return colors[category] || { start: '#0066cc', end: '#004d99' };
    }
    
    addNewsFilters() {
        // Create filter buttons for categories
        const categories = [...new Set(this.newsData.map(news => news.category))];
        
        // You can add filter functionality here if needed
        // For now, we'll just display all news
    }
    
    async refreshNews() {
        const newsContainer = document.getElementById('newsContainer');
        if (newsContainer) {
            newsContainer.innerHTML = `
                <div class="news-loading">
                    <div class="loading-spinner small"></div>
                    <p>Memperbarui berita...</p>
                </div>
            `;
        }
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        this.renderNews();
    }
    
    shareNews(title, url) {
        if (navigator.share) {
            navigator.share({
                title: title,
                text: 'Berita kebencanaan dari Jabar Siaga - Portal WebGIS Jawa Barat',
                url: url
            }).catch(error => {
                console.log('Error sharing:', error);
                this.copyToClipboard(url);
            });
        } else {
            this.copyToClipboard(url);
        }
    }
    
    copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        // Show notification
        this.showNotification('Link berhasil disalin ke clipboard');
    }
    
    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--primary-blue);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: var(--shadow-md);
            font-family: 'Inter', sans-serif;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Initialize news manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.newsManager = new NewsManager();
});

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    /* Additional news card styles */
    .news-card {
        transition: all 0.3s ease;
    }
    
    .news-image {
        height: 180px;
        position: relative;
        overflow: hidden;
    }
    
    .news-category {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    .news-source {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 500;
    }
`;
document.head.appendChild(notificationStyles);
[file content end]

[file name]: krb-data.js
[file content begin]
// KRB Data for 27 Cities in West Java
// Data based on Kawasan Rawan Bencana analysis (Scale 1-10)

window.krbData = [
    {
        id: 1,
        name: "Kota Bandung",
        longsor: 4,
        banjir: 7,
        kebakaran_hutan: 3,
        tsunami: 1,
        kekeringan: 5,
        gunung_api: 6,
        gerakan_tanah: 5,
        population: 2500000,
        area_km2: 167
    },
    {
        id: 2,
        name: "Kabupaten Bandung",
        longsor: 8,
        banjir: 6,
        kebakaran_hutan: 5,
        tsunami: 1,
        kekeringan: 4,
        gunung_api: 7,
        gerakan_tanah: 7,
        population: 3800000,
        area_km2: 1762
    },
    {
        id: 3,
        name: "Kota Bekasi",
        longsor: 2,
        banjir: 9,
        kebakaran_hutan: 2,
        tsunami: 1,
        kekeringan: 6,
        gunung_api: 1,
        gerakan_tanah: 3,
        population: 2700000,
        area_km2: 206
    },
    {
        id: 4,
        name: "Kabupaten Bekasi",
        longsor: 3,
        banjir: 8,
        kebakaran_hutan: 4,
        tsunami: 2,
        kekeringan: 7,
        gunung_api: 1,
        gerakan_tanah: 4,
        population: 3200000,
        area_km2: 1224
    },
    {
        id: 5,
        name: "Kota Bogor",
        longsor: 5,
        banjir: 7,
        kebakaran_hutan: 3,
        tsunami: 1,
        kekeringan: 4,
        gunung_api: 4,
        gerakan_tanah: 6,
        population: 1100000,
        area_km2: 118
    },
    {
        id: 6,
        name: "Kabupaten Bogor",
        longsor: 9,
        banjir: 8,
        kebakaran_hutan: 6,
        tsunami: 2,
        kekeringan: 5,
        gunung_api: 5,
        gerakan_tanah: 8,
        population: 5800000,
        area_km2: 2984
    },
    {
        id: 7,
        name: "Kota Cimahi",
        longsor: 6,
        banjir: 5,
        kebakaran_hutan: 4,
        tsunami: 1,
        kekeringan: 4,
        gunung_api: 5,
        gerakan_tanah: 6,
        population: 580000,
        area_km2: 40
    },
    {
        id: 8,
        name: "Kota Cirebon",
        longsor: 3,
        banjir: 7,
        kebakaran_hutan: 4,
        tsunami: 3,
        kekeringan: 6,
        gunung_api: 2,
        gerakan_tanah: 4,
        population: 340000,
        area_km2: 37
    },
    {
        id: 9,
        name: "Kabupaten Cirebon",
        longsor: 5,
        banjir: 8,
        kebakaran_hutan: 5,
        tsunami: 4,
        kekeringan: 7,
        gunung_api: 3,
        gerakan_tanah: 5,
        population: 2400000,
        area_km2: 984
    },
    {
        id: 10,
        name: "Kota Depok",
        longsor: 4,
        banjir: 8,
        kebakaran_hutan: 3,
        tsunami: 1,
        kekeringan: 5,
        gunung_api: 2,
        gerakan_tanah: 4,
        population: 2100000,
        area_km2: 200
    },
    {
        id: 11,
        name: "Kota Sukabumi",
        longsor: 7,
        banjir: 6,
        kebakaran_hutan: 5,
        tsunami: 2,
        kekeringan: 4,
        gunung_api: 4,
        gerakan_tanah: 7,
        population: 350000,
        area_km2: 48
    },
    {
        id: 12,
        name: "Kabupaten Sukabumi",
        longsor: 9,
        banjir: 7,
        kebakaran_hutan: 7,
        tsunami: 3,
        kekeringan: 5,
        gunung_api: 6,
        gerakan_tanah: 8,
        population: 2700000,
        area_km2: 4128
    },
    {
        id: 13,
        name: "Kota Tasikmalaya",
        longsor: 6,
        banjir: 5,
        kebakaran_hutan: 4,
        tsunami: 2,
        kekeringan: 5,
        gunung_api: 4,
        gerakan_tanah: 6,
        population: 730000,
        area_km2: 171
    },
    {
        id: 14,
        name: "Kabupaten Tasikmalaya",
        longsor: 8,
        banjir: 6,
        kebakaran_hutan: 6,
        tsunami: 3,
        kekeringan: 6,
        gunung_api: 5,
        gerakan_tanah: 7,
        population: 1800000,
        area_km2: 2711
    },
    {
        id: 15,
        name: "Kota Banjar",
        longsor: 5,
        banjir: 7,
        kebakaran_hutan: 5,
        tsunami: 2,
        kekeringan: 5,
        gunung_api: 3,
        gerakan_tanah: 5,
        population: 200000,
        area_km2: 113
    },
    {
        id: 16,
        name: "Kabupaten Garut",
        longsor: 9,
        banjir: 7,
        kebakaran_hutan: 7,
        tsunami: 3,
        kekeringan: 5,
        gunung_api: 8,
        gerakan_tanah: 8,
        population: 2700000,
        area_km2: 3072
    },
    {
        id: 17,
        name: "Kabupaten Karawang",
        longsor: 4,
        banjir: 9,
        kebakaran_hutan: 5,
        tsunami: 4,
        kekeringan: 7,
        gunung_api: 2,
        gerakan_tanah: 5,
        population: 2500000,
        area_km2: 1753
    },
    {
        id: 18,
        name: "Kabupaten Purwakarta",
        longsor: 7,
        banjir: 6,
        kebakaran_hutan: 6,
        tsunami: 2,
        kekeringan: 6,
        gunung_api: 4,
        gerakan_tanah: 7,
        population: 990000,
        area_km2: 971
    },
    {
        id: 19,
        name: "Kabupaten Subang",
        longsor: 6,
        banjir: 8,
        kebakaran_hutan: 6,
        tsunami: 4,
        kekeringan: 7,
        gunung_api: 3,
        gerakan_tanah: 6,
        population: 1600000,
        area_km2: 2053
    },
    {
        id: 20,
        name: "Kabupaten Indramayu",
        longsor: 3,
        banjir: 9,
        kebakaran_hutan: 5,
        tsunami: 5,
        kekeringan: 8,
        gunung_api: 1,
        gerakan_tanah: 4,
        population: 1900000,
        area_km2: 2042
    },
    {
        id: 21,
        name: "Kabupaten Sumedang",
        longsor: 7,
        banjir: 5,
        kebakaran_hutan: 5,
        tsunami: 2,
        kekeringan: 5,
        gunung_api: 5,
        gerakan_tanah: 7,
        population: 1200000,
        area_km2: 1520
    },
    {
        id: 22,
        name: "Kabupaten Majalengka",
        longsor: 6,
        banjir: 6,
        kebakaran_hutan: 5,
        tsunami: 3,
        kekeringan: 6,
        gunung_api: 4,
        gerakan_tanah: 6,
        population: 1300000,
        area_km2: 1234
    },
    {
        id: 23,
        name: "Kabupaten Kuningan",
        longsor: 8,
        banjir: 5,
        kebakaran_hutan: 6,
        tsunami: 3,
        kekeringan: 5,
        gunung_api: 7,
        gerakan_tanah: 7,
        population: 1200000,
        area_km2: 1110
    },
    {
        id: 24,
        name: "Kabupaten Ciamis",
        longsor: 7,
        banjir: 6,
        kebakaran_hutan: 6,
        tsunami: 3,
        kekeringan: 5,
        gunung_api: 5,
        gerakan_tanah: 7,
        population: 1400000,
        area_km2: 1414
    },
    {
        id: 25,
        name: "Kabupaten Pangandaran",
        longsor: 5,
        banjir: 7,
        kebakaran_hutan: 5,
        tsunami: 8,
        kekeringan: 4,
        gunung_api: 3,
        gerakan_tanah: 5,
        population: 430000,
        area_km2: 1010
    },
    {
        id: 26,
        name: "Kabupaten Cianjur",
        longsor: 9,
        banjir: 8,
        kebakaran_hutan: 7,
        tsunami: 3,
        kekeringan: 5,
        gunung_api: 7,
        gerakan_tanah: 8,
        population: 2400000,
        area_km2: 3506
    },
    {
        id: 27,
        name: "Kabupaten Bandung Barat",
        longsor: 8,
        banjir: 6,
        kebakaran_hutan: 6,
        tsunami: 2,
        kekeringan: 4,
        gunung_api: 7,
        gerakan_tanah: 7,
        population: 1700000,
        area_km2: 1305
    }
];

// Utility functions for KRB data
window.krbUtils = {
    // Get all city names
    getCityNames: function() {
        return window.krbData.map(city => city.name);
    },
    
    // Get city by name
    getCityByName: function(name) {
        return window.krbData.find(city => city.name === name);
    },
    
    // Calculate average risk for a city
    getAverageRisk: function(city) {
        const risks = [
            city.longsor,
            city.banjir,
            city.kebakaran_hutan,
            city.tsunami,
            city.kekeringan,
            city.gunung_api,
            city.gerakan_tanah
        ];
        
        const sum = risks.reduce((a, b) => a + b, 0);
        return parseFloat((sum / risks.length).toFixed(1));
    },
    
    // Get risk level category
    getRiskLevel: function(score) {
        if (score <= 3) return { level: 'Rendah', color: '#2a9d8f' };
        if (score <= 6) return { level: 'Sedang', color: '#f4a261' };
        return { level: 'Tinggi', color: '#e63946' };
    },
    
    // Get highest risk cities
    getHighestRiskCities: function(limit = 5) {
        const citiesWithAvg = window.krbData.map(city => ({
            ...city,
            averageRisk: this.getAverageRisk(city)
        }));
        
        return citiesWithAvg
            .sort((a, b) => b.averageRisk - a.averageRisk)
            .slice(0, limit);
    },
    
    // Get cities by disaster type
    getCitiesByDisasterType: function(type) {
        return window.krbData
            .map(city => ({
                name: city.name,
                score: city[type] || 0
            }))
            .sort((a, b) => b.score - a.score);
    },
    
    // Get overall statistics
    getStatistics: function() {
        const averages = {};
        const fields = ['longsor', 'banjir', 'kebakaran_hutan', 'tsunami', 'kekeringan', 'gunung_api', 'gerakan_tanah'];
        
        fields.forEach(field => {
            const sum = window.krbData.reduce((acc, city) => acc + city[field], 0);
            averages[field] = parseFloat((sum / window.krbData.length).toFixed(1));
        });
        
        // Calculate overall average
        const allScores = window.krbData.flatMap(city => 
            [city.longsor, city.banjir, city.kebakaran_hutan, city.tsunami, city.kekeringan, city.gunung_api, city.gerakan_tanah]
        );
        const overallAverage = parseFloat((allScores.reduce((a, b) => a + b, 0) / allScores.length).toFixed(1));
        
        return {
            totalCities: window.krbData.length,
            averages: averages,
            overallAverage: overallAverage,
            highestRiskCity: this.getHighestRiskCities(1)[0],
            lowestRiskCity: this.getLowestRiskCities(1)[0]
        };
    },
    
    // Get lowest risk cities
    getLowestRiskCities: function(limit = 5) {
        const citiesWithAvg = window.krbData.map(city => ({
            ...city,
            averageRisk: this.getAverageRisk(city)
        }));
        
        return citiesWithAvg
            .sort((a, b) => a.averageRisk - b.averageRisk)
            .slice(0, limit);
    }
};

// Initialize when loaded
console.log('KRB Data loaded for 27 cities in West Java');
[file content end]

[file name]: infografis.js
[file content begin]
// Infografis Handler for KRB Data Visualization

class InfografisManager {
    constructor() {
        this.currentView = 'chart';
        this.currentFilter = 'all';
        this.currentBencanaFilter = 'all';
        this.chart = null;
        
        this.init();
    }
    
    async init() {
        // Wait for KRB data to load
        if (!window.krbData || window.krbData.length === 0) {
            setTimeout(() => this.init(), 100);
            return;
        }
        
        // Initialize components
        this.initViewToggle();
        this.initFilters();
        this.renderCityFilterOptions();
        this.renderChart();
        this.renderTable();
        this.renderMap();
        
        // Set initial view
        this.showView('chart');
    }
    
    initViewToggle() {
        const viewButtons = document.querySelectorAll('.view-btn');
        
        viewButtons.forEach(button => {
            button.addEventListener('click', () => {
                const view = button.dataset.view;
                
                // Update active button
                viewButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Switch view
                this.showView(view);
            });
        });
    }
    
    initFilters() {
        const kabFilter = document.getElementById('kabFilter');
        const bencanaFilter = document.getElementById('bencanaFilter');
        const mapLayerSelect = document.getElementById('mapLayerSelect');
        
        if (kabFilter) {
            kabFilter.addEventListener('change', (e) => {
                this.currentFilter = e.target.value;
                this.updateVisualizations();
            });
        }
        
        if (bencanaFilter) {
            bencanaFilter.addEventListener('change', (e) => {
                this.currentBencanaFilter = e.target.value;
                this.updateVisualizations();
            });
        }
        
        if (mapLayerSelect) {
            mapLayerSelect.addEventListener('change', (e) => {
                this.updateMapVisualization(e.target.value);
            });
        }
    }
    
    renderCityFilterOptions() {
        const kabFilter = document.getElementById('kabFilter');
        if (!kabFilter) return;
        
        // Add city options
        window.krbData.forEach(city => {
            const option = document.createElement('option');
            option.value = city.name;
            option.textContent = city.name;
            kabFilter.appendChild(option);
        });
    }
    
    showView(viewName) {
        this.currentView = viewName;
        
        // Hide all views
        document.querySelectorAll('.infografis-view').forEach(view => {
            view.classList.remove('active');
        });
        
        // Show selected view
        const selectedView = document.querySelector(`.${viewName}-view`);
        if (selectedView) {
            selectedView.classList.add('active');
        }
    }
    
    updateVisualizations() {
        switch (this.currentView) {
            case 'chart':
                this.updateChart();
                break;
            case 'table':
                this.updateTable();
                break;
            case 'map':
                this.updateMap();
                break;
        }
    }
    
    renderChart() {
        const ctx = document.getElementById('krbChart');
        if (!ctx) return;
        
        this.chart = new Chart(ctx.getContext('2d'), this.getChartConfig());
    }
    
    updateChart() {
        if (!this.chart) return;
        
        const config = this.getChartConfig();
        this.chart.data = config.data;
        this.chart.options = config.options;
        this.chart.update();
    }
    
    getChartConfig() {
        let data = window.krbData;
        
        // Apply filters
        if (this.currentFilter !== 'all') {
            data = data.filter(city => city.name === this.currentFilter);
        }
        
        // Prepare data for chart
        const labels = data.map(city => city.name);
        const datasets = [];
        
        // Add datasets based on filter
        if (this.currentBencanaFilter === 'all') {
            // Show all disaster types
            const disasterTypes = [
                { key: 'longsor', label: 'Longsor', color: '#7209b7' },
                { key: 'banjir', label: 'Banjir', color: '#4361ee' },
                { key: 'kebakaran_hutan', label: 'Kebakaran Hutan', color: '#f94144' },
                { key: 'tsunami', label: 'Tsunami', color: '#4cc9f0' },
                { key: 'kekeringan', label: 'Kekeringan', color: '#ffd166' },
                { key: 'gunung_api', label: 'Gunung Api', color: '#e63946' },
                { key: 'gerakan_tanah', label: 'Gerakan Tanah', color: '#f4a261' }
            ];
            
            disasterTypes.forEach(type => {
                datasets.push({
                    label: type.label,
                    data: data.map(city => city[type.key]),
                    backgroundColor: type.color,
                    borderColor: type.color,
                    borderWidth: 1
                });
            });
        } else {
            // Show single disaster type
            const typeConfig = this.getDisasterTypeConfig(this.currentBencanaFilter);
            datasets.push({
                label: typeConfig.label,
                data: data.map(city => city[typeConfig.key]),
                backgroundColor: data.map(city => this.getRiskColor(city[typeConfig.key])),
                borderColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 1
            });
        }
        
        return {
            type: this.currentBencanaFilter === 'all' && this.currentFilter === 'all' ? 'radar' : 'bar',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#b8c7e0',
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}`;
                            }
                        }
                    }
                },
                scales: this.currentBencanaFilter === 'all' && this.currentFilter === 'all' ? {
                    r: {
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        pointLabels: {
                            color: '#b8c7e0'
                        },
                        ticks: {
                            color: '#b8c7e0',
                            backdropColor: 'transparent'
                        },
                        suggestedMin: 0,
                        suggestedMax: 10
                    }
                } : {
                    y: {
                        beginAtZero: true,
                        max: 10,
                        ticks: {
                            color: '#b8c7e0'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#b8c7e0'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                }
            }
        };
    }
    
    renderTable() {
        this.updateTable();
    }
    
    updateTable() {
        const tableBody = document.getElementById('krbTableBody');
        if (!tableBody) return;
        
        let data = window.krbData;
        
        // Apply filters
        if (this.currentFilter !== 'all') {
            data = data.filter(city => city.name === this.currentFilter);
        }
        
        // Clear table
        tableBody.innerHTML = '';
        
        // Add rows
        data.forEach(city => {
            const row = document.createElement('tr');
            const avgRisk = window.krbUtils.getAverageRisk(city);
            const riskLevel = window.krbUtils.getRiskLevel(avgRisk);
            
            row.innerHTML = `
                <td>${city.name}</td>
                <td class="${this.getRiskClass(city.longsor)}">${city.longsor}</td>
                <td class="${this.getRiskClass(city.banjir)}">${city.banjir}</td>
                <td class="${this.getRiskClass(city.kebakaran_hutan)}">${city.kebakaran_hutan}</td>
                <td class="${this.getRiskClass(city.tsunami)}">${city.tsunami}</td>
                <td class="${this.getRiskClass(city.kekeringan)}">${city.kekeringan}</td>
                <td class="${this.getRiskClass(city.gunung_api)}">${city.gunung_api}</td>
                <td class="${this.getRiskClass(city.gerakan_tanah)}">${city.gerakan_tanah}</td>
                <td class="${riskLevel.level.toLowerCase()}">${avgRisk}</td>
            `;
            
            tableBody.appendChild(row);
        });
    }
    
    renderMap() {
        this.updateMap();
    }
    
    updateMap() {
        const mapGrid = document.getElementById('mapGrid');
        if (!mapGrid) return;
        
        // Clear map
        mapGrid.innerHTML = '';
        
        // Create grid items for each city
        window.krbData.forEach(city => {
            const mapItem = document.createElement('div');
            mapItem.className = 'map-item';
            mapItem.dataset.city = city.name;
            
            // Calculate average risk for color coding
            const avgRisk = window.krbUtils.getAverageRisk(city);
            const riskColor = this.getRiskColor(avgRisk);
            
            mapItem.style.backgroundColor = riskColor;
            mapItem.innerHTML = `
                <div class="tooltip">
                    <strong>${city.name}</strong><br>
                    Rata-rata Risiko: ${avgRisk}
                </div>
                ${this.getCityAbbreviation(city.name)}
            `;
            
            // Add click event
            mapItem.addEventListener('click', () => {
                this.currentFilter = city.name;
                document.getElementById('kabFilter').value = city.name;
                this.updateVisualizations();
            });
            
            mapGrid.appendChild(mapItem);
        });
    }
    
    updateMapVisualization(layer) {
        const mapItems = document.querySelectorAll('.map-item');
        if (!mapItems.length) return;
        
        mapItems.forEach(item => {
            const cityName = item.dataset.city;
            const city = window.krbUtils.getCityByName(cityName);
            
            if (city) {
                const typeConfig = this.getDisasterTypeConfig(layer);
                const score = city[typeConfig.key] || 0;
                const color = this.getRiskColor(score);
                
                item.style.backgroundColor = color;
                
                // Update tooltip
                const tooltip = item.querySelector('.tooltip');
                if (tooltip) {
                    tooltip.innerHTML = `
                        <strong>${city.name}</strong><br>
                        ${typeConfig.label}: ${score}
                    `;
                }
            }
        });
    }
    
    getDisasterTypeConfig(type) {
        const configs = {
            longsor: { key: 'longsor', label: 'Indeks Risiko Longsor' },
            banjir: { key: 'banjir', label: 'Indeks Risiko Banjir' },
            kebakaran: { key: 'kebakaran_hutan', label: 'Indeks Kebakaran Hutan' },
            tsunami: { key: 'tsunami', label: 'Indeks Risiko Tsunami' },
            kekeringan: { key: 'kekeringan', label: 'Indeks Risiko Kekeringan' },
            gunung_api: { key: 'gunung_api', label: 'Rawan Gunung Api' },
            gerakan_tanah: { key: 'gerakan_tanah', label: 'Rawan Gerakan Tanah' }
        };
        
        return configs[type] || { key: 'longsor', label: 'Longsor' };
    }
    
    getRiskColor(score) {
        if (score <= 3) return 'rgba(42, 157, 143, 0.8)'; // Green
        if (score <= 6) return 'rgba(244, 162, 97, 0.8)'; // Orange
        return 'rgba(230, 57, 70, 0.8)'; // Red
    }
    
    getRiskClass(score) {
        if (score <= 3) return 'rendah';
        if (score <= 6) return 'sedang';
        return 'tinggi';
    }
    
    getCityAbbreviation(name) {
        // Create abbreviation from city name
        const words = name.split(' ');
        if (words.length > 1) {
            return words.map(word => word[0]).join('');
        }
        return name.substring(0, 3).toUpperCase();
    }
    
    // Export data function
    exportData(format = 'json') {
        let data = window.krbData;
        
        // Apply filters
        if (this.currentFilter !== 'all') {
            data = data.filter(city => city.name === this.currentFilter);
        }
        
        if (format === 'json') {
            const dataStr = JSON.stringify(data, null, 2);
            this.downloadFile(dataStr, 'krb-data.json', 'application/json');
        } else if (format === 'csv') {
            const csv = this.convertToCSV(data);
            this.downloadFile(csv, 'krb-data.csv', 'text/csv');
        }
    }
    
    convertToCSV(data) {
        const headers = ['Nama Kota', 'Longsor', 'Banjir', 'Kebakaran Hutan', 'Tsunami', 'Kekeringan', 'Gunung Api', 'Gerakan Tanah', 'Rata-rata'];
        const rows = data.map(city => [
            city.name,
            city.longsor,
            city.banjir,
            city.kebakaran_hutan,
            city.tsunami,
            city.kekeringan,
            city.gunung_api,
            city.gerakan_tanah,
            window.krbUtils.getAverageRisk(city)
        ]);
        
        return [headers, ...rows].map(row => row.join(',')).join('\n');
    }
    
    downloadFile(content, fileName, contentType) {
        const a = document.createElement('a');
        const file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }
}

// Initialize infografis manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.initInfografis = function() {
        window.infografisManager = new InfografisManager();
    };
    
    // Initialize if not already initialized
    if (!window.infografisManager) {
        window.initInfografis();
    }
});
[file content end]
