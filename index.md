<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Elian Kimani - AI Solutions Architect</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
  <style>
    :root {
      --bg-primary: #000000;
      --bg-secondary: #111111;
      --text-primary: #ffffff;
      --text-secondary: #cccccc;
      --accent: #ffffff;
      --border: #333333;
    }

    [data-theme="light"] {
      --bg-primary: #ffffff;
      --bg-secondary: #f8f9fa;
      --text-primary: #000000;
      --text-secondary: #666666;
      --accent: #000000;
      --border: #e0e0e0;
    }

    * {
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    }

    body {
      margin: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: var(--bg-primary);
      color: var(--text-primary);
      line-height: 1.6;
      padding-top: 80px;
    }

    .top-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background-color: var(--bg-primary);
      border-bottom: 1px solid var(--border);
      z-index: 1000;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .theme-toggle {
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      color: var(--text-primary);
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .theme-toggle:hover {
      background-color: var(--border);
    }

    .card {
      background-color: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .hero-section {
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;
    }

    .tab-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .tab-nav {
      display: flex;
      background-color: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      padding: 0.25rem;
      margin-bottom: 2rem;
      overflow-x: auto;
    }

    .tab-btn {
      flex: 1;
      min-width: 120px;
      padding: 0.75rem 1rem;
      background: transparent;
      border: none;
      color: var(--text-secondary);
      border-radius: 0.25rem;
      cursor: pointer;
      font-weight: 500;
      text-align: center;
      white-space: nowrap;
    }

    .tab-btn.active {
      background-color: var(--accent);
      color: var(--bg-primary);
    }

    .tab-btn:hover:not(.active) {
      background-color: var(--border);
      color: var(--text-primary);
    }

    .tab-content {
      display: none;
      animation: fadeIn 0.3s ease-in-out;
    }

    .tab-content.active {
      display: block;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .project-card {
      background-color: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      transition: all 0.3s ease;
    }

    .project-card:hover {
      border-color: var(--text-primary);
      transform: translateY(-2px);
    }

    .skill-tag {
      display: inline-block;
      background-color: var(--border);
      color: var(--text-primary);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.75rem;
      margin: 0.125rem;
      font-weight: 500;
    }

    .ai-highlight {
      background-color: var(--text-primary);
      color: var(--bg-primary);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin: 2rem 0;
    }

    .stat-card {
      text-align: center;
      padding: 1.5rem;
      background-color: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 0.5rem;
    }

    .timeline {
      position: relative;
      padding-left: 2rem;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: var(--border);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background-color: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      border-left: 3px solid var(--text-primary);
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -2.25rem;
      top: 1.5rem;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background-color: var(--text-primary);
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .repo-card {
      background-color: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      padding: 1.5rem;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .repo-card:hover {
      transform: translateY(-2px);
      border-color: var(--text-primary);
    }

    .btn-primary {
      background-color: var(--text-primary);
      color: var(--bg-primary);
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
    }

    .btn-primary:hover {
      opacity: 0.8;
      transform: translateY(-1px);
    }

    .btn-secondary {
      border: 1px solid var(--border);
      color: var(--text-primary);
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
    }

    .btn-secondary:hover {
      background-color: var(--bg-secondary);
    }

    .github-toggle {
      display: inline-flex;
      background-color: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      padding: 0.25rem;
      margin-bottom: 2rem;
    }

    .github-toggle button {
      padding: 0.5rem 1rem;
      border: none;
      background: transparent;
      color: var(--text-secondary);
      border-radius: 0.25rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .github-toggle button.active {
      background-color: var(--text-primary);
      color: var(--bg-primary);
    }

    .loading {
      text-align: center;
      padding: 2rem;
      opacity: 0.6;
    }

    @media (max-width: 768px) {
      .top-bar {
        padding: 1rem;
        flex-direction: column;
        gap: 0.5rem;
        height: auto;
      }
      
      body {
        padding-top: 120px;
      }

      .tab-nav {
        overflow-x: scroll;
      }
      
      .tab-btn {
        min-width: 100px;
        padding: 0.5rem 0.75rem;
        font-size: 0.875rem;
      }

      .hero-section h1 {
        font-size: 2rem;
      }
    }
  </style>
</head>
<body>
  <!-- Fixed Top Bar -->
  <div class="top-bar">
    <div>
      <h1 class="text-xl font-bold">Elian Kimani</h1>
      <p class="text-sm text-gray-500">AI Solutions Architect & Full-Stack Engineer</p>
    </div>
    <button class="theme-toggle" onclick="toggleTheme()">
      <i class="fas fa-sun" id="theme-icon"></i>
      <span id="theme-text">Light</span>
    </button>
  </div>

  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container mx-auto px-6 text-center">
      <div class="card max-w-4xl mx-auto">
        <h1 class="text-5xl font-bold mb-4">Elian Kimani</h1>
        <div class="text-2xl mb-4">AI Solutions Architect & Full-Stack Engineer</div>
        <p class="text-lg mb-6 opacity-80">
          12+ years building intelligent, scalable systems that drive social impact across East Africa
        </p>
        <div class="flex justify-center space-x-4 mb-6 flex-wrap gap-2">
          <a href="mailto:eliankim.007@gmail.com" class="btn-primary">
            <i class="fas fa-envelope"></i>Contact Me
          </a>
          <a href="tel:+254797310992" class="btn-secondary">
            <i class="fas fa-phone"></i>+254 797 310 992
          </a>
        </div>
        <div class="stats-grid">
          <div class="stat-card">
            <h3 class="text-2xl font-bold">20+</h3>
            <p class="text-sm">AI Projects Delivered</p>
          </div>
          <div class="stat-card">
            <h3 class="text-2xl font-bold">12+</h3>
            <p class="text-sm">Years Experience</p>
          </div>
          <div class="stat-card">
            <h3 class="text-2xl font-bold">50K+</h3>
            <p class="text-sm">Records Managed</p>
          </div>
          <div class="stat-card">
            <h3 class="text-2xl font-bold">3</h3>
            <p class="text-sm">Countries Served</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Main Content -->
  <div class="tab-container">
    <!-- Tab Navigation -->
    <nav class="tab-nav">
      <button class="tab-btn active" onclick="showTab('ai-projects')">
        <i class="fas fa-brain mr-2"></i>AI Projects
      </button>
      <button class="tab-btn" onclick="showTab('experience')">
        <i class="fas fa-briefcase mr-2"></i>Experience
      </button>
      <button class="tab-btn" onclick="showTab('skills')">
        <i class="fas fa-code mr-2"></i>Skills
      </button>
      <button class="tab-btn" onclick="showTab('repositories')">
        <i class="fab fa-github mr-2"></i>GitHub
      </button>
      <button class="tab-btn" onclick="showTab('education')">
        <i class="fas fa-graduation-cap mr-2"></i>Education
      </button>
      <button class="tab-btn" onclick="showTab('contact')">
        <i class="fas fa-envelope mr-2"></i>Contact
      </button>
    </nav>

    <!-- AI Projects Tab -->
    <div id="ai-projects" class="tab-content active">
      <h2 class="text-3xl font-bold mb-6 text-center">AI Solutions Portfolio</h2>
      
      <div class="project-card">
        <div class="flex items-start justify-between mb-4 flex-wrap gap-2">
          <h3 class="text-xl font-bold">NUSAF IV - AI-Powered Social Impact Platform</h3>
          <span class="skill-tag ai-highlight">Production AI</span>
        </div>
        <p class="mb-4 opacity-80">
          Technical Lead for Uganda's flagship cash-for-work program, serving as the technical backbone for national social welfare distribution.
        </p>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <h4 class="font-semibold mb-2">AI Models Deployed:</h4>
            <ul class="list-disc list-inside text-sm space-y-1 opacity-80">
              <li>Face Detection & Verification (beneficiary authentication)</li>
              <li>Fraud Management ML (pattern recognition, anomaly detection)</li>
              <li>CNN-based Fingerprint Classification</li>
              <li>Dynamic Sentiment Analysis Engine</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-2">Technical Achievements:</h4>
            <ul class="list-disc list-inside text-sm space-y-1 opacity-80">
              <li>Offline-first mobile architecture</li>
              <li>Real-time fraud risk scoring</li>
              <li>Auto-sync with cloud infrastructure</li>
              <li>Handles low-connectivity rural environments</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="skill-tag">Python</span>
          <span class="skill-tag">TensorFlow</span>
          <span class="skill-tag">OpenCV</span>
          <span class="skill-tag">Django</span>
          <span class="skill-tag">Android</span>
          <span class="skill-tag">AWS</span>
        </div>
      </div>

      <div class="project-card">
        <div class="flex items-start justify-between mb-4 flex-wrap gap-2">
          <h3 class="text-xl font-bold">OCR Automation Engine - Safaricom & CIC Insurance</h3>
          <span class="skill-tag ai-highlight">Computer Vision</span>
        </div>
        <p class="mb-4 opacity-80">
          Enterprise-grade OCR system that converts scanned medical claims to structured data, eliminating manual underwriting errors worth millions.
        </p>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <h4 class="font-semibold mb-2">Core Capabilities:</h4>
            <ul class="list-disc list-inside text-sm space-y-1 opacity-80">
              <li>Medical document image-to-text conversion</li>
              <li>Intelligent document classification</li>
              <li>EDMS integration pipeline</li>
              <li>Multi-language support (English, Swahili)</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-2">Business Impact:</h4>
            <ul class="list-disc list-inside text-sm space-y-1 opacity-80">
              <li>90% reduction in processing time</li>
              <li>Eliminated manual data entry errors</li>
              <li>Scalable to 10K+ documents daily</li>
              <li>Full API integration with existing systems</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="skill-tag">Tesseract</span>
          <span class="skill-tag">OpenCV</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">Flask</span>
          <span class="skill-tag">Docker</span>
          <span class="skill-tag">REST APIs</span>
        </div>
      </div>

      <div class="project-card">
        <div class="flex items-start justify-between mb-4 flex-wrap gap-2">
          <h3 class="text-xl font-bold">Mifugo Livestock Biometric System</h3>
          <span class="skill-tag ai-highlight">CNN Classification</span>
        </div>
        <p class="mb-4 opacity-80">
          Revolutionary CNN-based system that identifies cattle through muzzle pattern recognition, creating a biometric ID system for livestock management.
        </p>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <h4 class="font-semibold mb-2">AI Innovation:</h4>
            <ul class="list-disc list-inside text-sm space-y-1 opacity-80">
              <li>Unique muzzle pattern detection algorithm</li>
              <li>CNN-based cattle identification</li>
              <li>Mobile-optimized inference</li>
              <li>Real-time livestock verification</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-2">Scale & Impact:</h4>
            <ul class="list-disc list-inside text-sm space-y-1 opacity-80">
              <li>50,000+ cattle records managed</li>
              <li>Government of Kenya deployment</li>
              <li>Anti-theft tracking system</li>
              <li>Smartphone-based implementation</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="skill-tag">PyTorch</span>
          <span class="skill-tag">CNN</span>
          <span class="skill-tag">Mobile AI</span>
          <span class="skill-tag">Android</span>
          <span class="skill-tag">Image Processing</span>
          <span class="skill-tag">Government Contract</span>
        </div>
      </div>
    </div>

    <!-- Experience Tab -->
    <div id="experience" class="tab-content">
      <h2 class="text-3xl font-bold mb-6 text-center">Professional Experience</h2>
      
      <div class="timeline">
        <div class="timeline-item">
          <div class="flex justify-between items-start mb-3 flex-wrap gap-2">
            <div>
              <h3 class="text-lg font-bold">Head of AI and Mobile Development</h3>
              <p class="opacity-80">E&M Technology House Limited</p>
            </div>
            <span class="text-xs bg-gray-600 px-2 py-1 rounded">May 2025 - Present</span>
          </div>
          <p class="mb-3 opacity-80">
            Lead strategic AI and mobile divisions, designing intelligent solutions across finance, insurance, agriculture, and government sectors.
          </p>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold mb-2">Key Achievements:</h4>
              <ul class="list-disc list-inside text-sm space-y-1 opacity-80">
                <li>Delivered NUSAF IV AI platform for Uganda government</li>
                <li>Built OCR systems for Safaricom & CIC Insurance</li>
                <li>Developed Mifugo livestock tracking for Gov't of Kenya</li>
                <li>Led technical demos for government officials</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Technologies:</h4>
              <div class="flex flex-wrap gap-1">
                <span class="skill-tag">AI/ML</span>
                <span class="skill-tag">Computer Vision</span>
                <span class="skill-tag">Mobile Development</span>
                <span class="skill-tag">Cloud Architecture</span>
              </div>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="flex justify-between items-start mb-3 flex-wrap gap-2">
            <div>
              <h3 class="text-lg font-bold">Head of Mobile Development</h3>
              <p class="opacity-80">E&M Technology House Limited</p>
            </div>
            <span class="text-xs bg-gray-600 px-2 py-1 rounded">Feb 2025 - Apr 2025</span>
          </div>
          <p class="mb-3 opacity-80">
            Promoted to lead all mobile initiatives, specializing in financial services and banking applications.
          </p>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold mb-2">Major Projects:</h4>
              <ul class="list-disc list-inside text-sm space-y-1 opacity-80">
                <li>VCB Bank & Caritas Bank mobile apps</li>
                <li>Internet banking platform integration</li>
                <li>Finacle core banking system connectivity</li>
                <li>Production deployment & client training</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Skills Applied:</h4>
              <div class="flex flex-wrap gap-1">
                <span class="skill-tag">Android/iOS</span>
                <span class="skill-tag">Banking APIs</span>
                <span class="skill-tag">Security</span>
                <span class="skill-tag">QA Management</span>
              </div>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="flex justify-between items-start mb-3 flex-wrap gap-2">
            <div>
              <h3 class="text-lg font-bold">Full-Stack Developer</h3>
              <p class="opacity-80">E&M Technology House Limited</p>
            </div>
            <span class="text-xs bg-gray-600 px-2 py-1 rounded">Aug 2024 - Jan 2025</span>
          </div>
          <p class="mb-3 opacity-80">
            Developed critical banking infrastructure and compliance systems for major financial institutions.
          </p>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold mb-2">Notable Projects:</h4>
              <ul class="list-disc list-inside text-sm space-y-1 opacity-80">
                <li>VCB-CBK automated reporting system</li>
                <li>Finacle integration with Central Bank of Kenya</li>
                <li>Standard Chartered reverse factoring platform</li>
                <li>Equity Bank reconciliation engine</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Tech Stack:</h4>
              <div class="flex flex-wrap gap-1">
                <span class="skill-tag">Django</span>
                <span class="skill-tag">Airflow</span>
                <span class="skill-tag">Celery</span>
                <span class="skill-tag">Banking APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills Tab -->
    <div id="skills" class="tab-content">
      <h2 class="text-3xl font-bold mb-6 text-center">Technical Expertise</h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
          <h3 class="text-lg font-bold mb-4">
            <i class="fas fa-brain mr-2"></i>AI & Machine Learning
          </h3>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag ai-highlight">TensorFlow</span>
              <span class="skill-tag ai-highlight">PyTorch</span>
              <span class="skill-tag ai-highlight">OpenCV</span>
              <span class="skill-tag ai-highlight">Scikit-learn</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">Computer Vision</span>
              <span class="skill-tag">NLP</span>
              <span class="skill-tag">CNN</span>
              <span class="skill-tag">Deep Learning</span>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="text-lg font-bold mb-4">
            <i class="fas fa-code mr-2"></i>Programming Languages
          </h3>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">Python</span>
              <span class="skill-tag">Java</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">C#</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">SQL</span>
              <span class="skill-tag">R</span>
              <span class="skill-tag">Kotlin</span>
              <span class="skill-tag">PHP</span>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="text-lg font-bold mb-4">
            <i class="fas fa-layer-group mr-2"></i>Frameworks & Tools
          </h3>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">Django</span>
              <span class="skill-tag">Flask</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">Spring Boot</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">Docker</span>
              <span class="skill-tag">Kubernetes</span>
              <span class="skill-tag">Jenkins</span>
              <span class="skill-tag">Git</span>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="text-lg font-bold mb-4">
            <i class="fas fa-cloud mr-2"></i>Cloud & DevOps
          </h3>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">AWS</span>
              <span class="skill-tag">Azure</span>
              <span class="skill-tag">Google Cloud</span>
              <span class="skill-tag">Linux</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">CI/CD</span>
              <span class="skill-tag">Microservices</span>
              <span class="skill-tag">API Design</span>
              <span class="skill-tag">Monitoring</span>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="text-lg font-bold mb-4">
            <i class="fas fa-mobile-alt mr-2"></i>Mobile Development
          </h3>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">Android</span>
              <span class="skill-tag">iOS</span>
              <span class="skill-tag">React Native</span>
              <span class="skill-tag">Flutter</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">Offline-First</span>
              <span class="skill-tag">Mobile AI</span>
              <span class="skill-tag">Biometric Auth</span>
              <span class="skill-tag">Mobile Banking</span>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="text-lg font-bold mb-4">
            <i class="fas fa-database mr-2"></i>Databases & Analytics
          </h3>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">MySQL</span>
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">MongoDB</span>
              <span class="skill-tag">Redis</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">ETL Pipelines</span>
              <span class="skill-tag">Real-time Analytics</span>
              <span class="skill-tag">Business Intelligence</span>
              <span class="skill-tag">Data Warehousing</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- GitHub Repositories Tab -->
    <div id="repositories" class="tab-content">
      <h2 class="text-3xl font-bold mb-6 text-center">GitHub Portfolio</h2>
      
      <div class="mb-6 text-center">
        <div class="github-toggle">
          <button onclick="toggleGitHubView('jacke-code')" id="btn-jacke" class="active">
            Full-Stack Portfolio
          </button>
          <button onclick="toggleGitHubView('njunge3')" id="btn-njunge">
            AI & Research
          </button>
        </div>
      </div>

      <div id="repos-container">
        <div class="loading">
          <i class="fas fa-spinner fa-spin text-2xl mb-2"></i>
          <p>Loading repositories...</p>
        </div>
      </div>
    </div>

    <!-- Education Tab -->
    <div id="education" class="tab-content">
      <h2 class="text-3xl font-bold mb-6 text-center">Education & Certifications</h2>
      
      <div class="timeline">
        <div class="timeline-item">
          <div class="flex justify-between items-start mb-3 flex-wrap gap-2">
            <div>
              <h3 class="text-lg font-bold">Bachelor of Science in Computer Science</h3>
              <p class="opacity-80">University of Nairobi</p>
            </div>
            <span class="text-xs bg-gray-600 px-2 py-1 rounded">2010 - 2014</span>
          </div>
          <p class="mb-3 opacity-80">
            Specialized in Software Engineering and Database Systems. Graduated with Second Class Honors (Upper Division).
          </p>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold mb-2">Key Subjects:</h4>
              <ul class="list-disc list-inside text-sm space-y-1 opacity-80">
                <li>Data Structures & Algorithms</li>
                <li>Database Management Systems</li>
                <li>Software Engineering</li>
                <li>Computer Networks</li>
                <li>Operating Systems</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Final Project:</h4>
              <p class="text-sm opacity-80">
                "Mobile Health Information System for Rural Kenya" - Developed an Android application for healthcare data collection in remote areas, laying the foundation for my future work in social impact technology.
              </p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="flex justify-between items-start mb-3 flex-wrap gap-2">
            <div>
              <h3 class="text-lg font-bold">Professional Certifications</h3>
              <p class="opacity-80">Various Institutions</p>
            </div>
            <span class="text-xs bg-gray-600 px-2 py-1 rounded">2015 - 2024</span>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold mb-2">AI & Machine Learning:</h4>
              <ul class="list-disc list-inside text-sm space-y-1 opacity-80">
                <li>TensorFlow Developer Certificate (Google)</li>
                <li>Deep Learning Specialization (Coursera)</li>
                <li>Computer Vision with OpenCV (Udemy)</li>
                <li>AWS Machine Learning Specialty</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Cloud & DevOps:</h4>
              <ul class="list-disc list-inside text-sm space-y-1 opacity-80">
                <li>AWS Solutions Architect Professional</li>
                <li>Docker & Kubernetes Certified</li>
                <li>Azure Fundamentals</li>
                <li>Google Cloud Professional Developer</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="flex justify-between items-start mb-3 flex-wrap gap-2">
            <div>
              <h3 class="text-lg font-bold">Continuous Learning</h3>
              <p class="opacity-80">Self-Directed Study</p>
            </div>
            <span class="text-xs bg-gray-600 px-2 py-1 rounded">Ongoing</span>
          </div>
          <p class="mb-3 opacity-80">
            Committed to staying current with emerging technologies and industry best practices through continuous learning and hands-on experimentation.
          </p>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold mb-2">Current Focus Areas:</h4>
              <ul class="list-disc list-inside text-sm space-y-1 opacity-80">
                <li>Large Language Models (LLMs)</li>
                <li>Edge AI and Mobile Optimization</li>
                <li>Blockchain for Social Impact</li>
                <li>Quantum Computing Fundamentals</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-2">Learning Resources:</h4>
              <ul class="list-disc list-inside text-sm space-y-1 opacity-80">
                <li>Research papers on arXiv</li>
                <li>Open-source project contributions</li>
                <li>Technical conferences & workshops</li>
                <li>Peer collaboration & mentoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Tab -->
    <div id="contact" class="tab-content">
      <h2 class="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
      
      <div class="contact-grid">
        <div class="card">
          <h3 class="text-xl font-bold mb-4">
            <i class="fas fa-envelope mr-2"></i>Contact Information
          </h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <i class="fas fa-envelope text-lg"></i>
              <div>
                <p class="font-semibold">Email</p>
                <a href="mailto:eliankim.007@gmail.com" class="text-blue-400 hover:underline">
                  eliankim.007@gmail.com
                </a>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-phone text-lg"></i>
              <div>
                <p class="font-semibold">Phone</p>
                <a href="tel:+254797310992" class="text-blue-400 hover:underline">
                  +254 797 310 992
                </a>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-map-marker-alt text-lg"></i>
              <div>
                <p class="font-semibold">Location</p>
                <p class="opacity-80">Nairobi, Kenya</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-clock text-lg"></i>
              <div>
                <p class="font-semibold">Availability</p>
                <p class="opacity-80">Available for new projects</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="text-xl font-bold mb-4">
            <i class="fas fa-network-wired mr-2"></i>Professional Networks
          </h3>
          <div class="space-y-4">
            <a href="https://github.com/jacke-code" class="flex items-center space-x-3 p-3 rounded border border-gray-600 hover:border-white transition-colors">
              <i class="fab fa-github text-xl"></i>
              <div>
                <p class="font-semibold">GitHub (Full-Stack)</p>
                <p class="text-sm opacity-80">@jacke-code</p>
              </div>
            </a>
            <a href="https://github.com/njunge3" class="flex items-center space-x-3 p-3 rounded border border-gray-600 hover:border-white transition-colors">
              <i class="fab fa-github text-xl"></i>
              <div>
                <p class="font-semibold">GitHub (AI/Research)</p>
                <p class="text-sm opacity-80">@njunge3</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/elian-kimani" class="flex items-center space-x-3 p-3 rounded border border-gray-600 hover:border-white transition-colors">
              <i class="fab fa-linkedin text-xl"></i>
              <div>
                <p class="font-semibold">LinkedIn</p>
                <p class="text-sm opacity-80">Connect professionally</p>
              </div>
            </a>
            <a href="https://twitter.com/eliankimani" class="flex items-center space-x-3 p-3 rounded border border-gray-600 hover:border-white transition-colors">
              <i class="fab fa-twitter text-xl"></i>
              <div>
                <p class="font-semibold">Twitter</p>
                <p class="text-sm opacity-80">Tech insights & updates</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="card mt-6">
        <h3 class="text-xl font-bold mb-4">
          <i class="fas fa-handshake mr-2"></i>Let's Collaborate
        </h3>
        <p class="mb-4 opacity-80">
          I'm always interested in discussing new opportunities, especially projects that combine AI innovation with social impact. Whether you're looking for:
        </p>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <ul class="list-disc list-inside space-y-2 opacity-80">
            <li>AI solution architecture and implementation</li>
            <li>Mobile app development for complex use cases</li>
            <li>Computer vision and machine learning systems</li>
            <li>Government and enterprise technology consulting</li>
          </ul>
          <ul class="list-disc list-inside space-y-2 opacity-80">
            <li>Technical leadership for development teams</li>
            <li>System integration and API development</li>
            <li>DevOps and cloud infrastructure setup</li>
            <li>Training and knowledge transfer programs</li>
          </ul>
        </div>
        <div class="text-center">
          <a href="mailto:eliankim.007@gmail.com?subject=Project Collaboration Inquiry" class="btn-primary">
            <i class="fas fa-paper-plane"></i>Start a Conversation
          </a>
        </div>
      </div>
    </div>
  </div>

  <script>
    // Theme toggle functionality
    function toggleTheme() {
      const body = document.body;
      const themeIcon = document.getElementById('theme-icon');
      const themeText = document.getElementById('theme-text');
      
      if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-sun';
        themeText.textContent = 'Light';
      } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-moon';
        themeText.textContent = 'Dark';
      }
    }

    // Tab functionality
    function showTab(tabId) {
      // Hide all tab contents
      const tabContents = document.querySelectorAll('.tab-content');
      tabContents.forEach(content => {
        content.classList.remove('active');
      });
      
      // Remove active class from all tab buttons
      const tabButtons = document.querySelectorAll('.tab-btn');
      tabButtons.forEach(button => {
        button.classList.remove('active');
      });
      
      // Show selected tab content
      document.getElementById(tabId).classList.add('active');
      
      // Add active class to clicked button
      event.target.classList.add('active');
      
      // Load GitHub repositories if repositories tab is selected
      if (tabId === 'repositories' && !window.repositoriesLoaded) {
        loadGitHubRepos('jacke-code');
        window.repositoriesLoaded = true;
      }
    }

    // GitHub functionality
    let currentGitHubUser = 'jacke-code';

    function toggleGitHubView(username) {
      currentGitHubUser = username;
      
      // Update button styles
      const jackeBtn = document.getElementById('btn-jacke');
      const njungeBtn = document.getElementById('btn-njunge');
      
      if (username === 'jacke-code') {
        jackeBtn.classList.add('active');
        njungeBtn.classList.remove('active');
      } else {
        njungeBtn.classList.add('active');
        jackeBtn.classList.remove('active');
      }
      
      loadGitHubRepos(username);
    }

    async function loadGitHubRepos(username) {
      const container = document.getElementById('repos-container');
      container.innerHTML = `
        <div class="loading">
          <i class="fas fa-spinner fa-spin text-2xl mb-2"></i>
          <p>Loading ${username} repositories...</p>
        </div>
      `;

      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const repos = await response.json();
        displayRepos(repos, username);
      } catch (error) {
        container.innerHTML = `
          <div class="card text-center">
            <i class="fas fa-exclamation-triangle text-3xl mb-4 opacity-60"></i>
            <h3 class="text-lg font-bold mb-2">Unable to Load Repositories</h3>
            <p class="opacity-80 mb-4">There was an issue fetching the GitHub repositories. This might be due to API rate limits or network connectivity.</p>
            <div class="space-y-2">
              <a href="https://github.com/${username}" target="_blank" class="btn-primary">
                <i class="fab fa-github"></i>View on GitHub
              </a>
            </div>
          </div>
        `;
      }
    }

    function displayRepos(repos, username) {
      const container = document.getElementById('repos-container');
      
      if (repos.length === 0) {
        container.innerHTML = `
          <div class="card text-center">
            <h3 class="text-lg font-bold mb-2">No Public Repositories</h3>
            <p class="opacity-80">This account doesn't have any public repositories available.</p>
          </div>
        `;
        return;
      }

      const repoCards = repos.map(repo => {
        const lastUpdated = new Date(repo.updated_at).toLocaleDateString();
        const language = repo.language || 'Unknown';
        const description = repo.description || 'No description available';
        
        return `
          <div class="repo-card" onclick="window.open('${repo.html_url}', '_blank')">
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-lg font-bold">${repo.name}</h3>
              <div class="flex items-center space-x-2 text-sm opacity-60">
                <i class="fas fa-star"></i>
                <span>${repo.stargazers_count}</span>
                <i class="fas fa-code-branch ml-2"></i>
                <span>${repo.forks_count}</span>
              </div>
            </div>
            <p class="text-sm opacity-80 mb-3 line-clamp-2">${description}</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4 text-sm">
                <span class="flex items-center space-x-1">
                  <div class="w-3 h-3 rounded-full ${getLanguageColor(language)}"></div>
                  <span>${language}</span>
                </span>
                <span class="opacity-60">Updated ${lastUpdated}</span>
              </div>
              <i class="fas fa-external-link-alt opacity-60"></i>
            </div>
          </div>
        `;
      }).join('');

      container.innerHTML = `
        <div class="grid md:grid-cols-2 gap-4">
          ${repoCards}
        </div>
        <div class="text-center mt-6">
          <a href="https://github.com/${username}" target="_blank" class="btn-secondary">
            <i class="fab fa-github"></i>View All Repositories
          </a>
        </div>
      `;
    }

    function getLanguageColor(language) {
      const colors = {
        'JavaScript': 'bg-yellow-400',
        'Python': 'bg-blue-500',
        'Java': 'bg-red-500',
        'HTML': 'bg-orange-500',
        'CSS': 'bg-blue-400',
        'TypeScript': 'bg-blue-600',
        'PHP': 'bg-purple-500',
        'C++': 'bg-pink-500',
        'C#': 'bg-green-500',
        'Go': 'bg-cyan-500',
        'Rust': 'bg-orange-600',
        'Swift': 'bg-orange-400',
        'Kotlin': 'bg-purple-400',
        'Dart': 'bg-blue-500',
        'Shell': 'bg-gray-500'
      };
      return colors[language] || 'bg-gray-400';
    }

    // Initialize the page
    document.addEventListener('DOMContentLoaded', function() {
      // Set initial theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (!prefersDark) {
        toggleTheme();
      }
      
      // Add smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    });

    // Add click handlers for tab navigation
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('tab-btn')) {
        e.preventDefault();
        const tabId = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
        showTab(tabId);
      }
    });
  </script>
</body>
</html>
