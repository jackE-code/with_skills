<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Elian's Blog</title>
  <style>
    /* General Styles */
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(120deg, #000000, #010F01FF, #120D50, #000400FF, #00159F);
      background-size: 400% 400%;
      animation: gradientBG 15s ease infinite;
      color: #ffffff;
      overflow-x: hidden;
    }

    /* Gradient Animation */
    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* Content Styling */
    .content {
      padding: 100px 20px;
      text-align: center;
    }

    .section {
      margin: 20px auto;
      padding: 20px;
      max-width: 900px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
      animation: fadeIn 2s ease-in-out;
    }

    /* Fade-in Animation */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Three.js Canvas */
    .model-container {
      position: relative;
      height: 500px;
      margin: 50px auto;
      max-width: 100%;
    }

    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  </style>
</head>
<body>
  <!-- Welcome Section -->
  <div class="section">
    <h1>Welcome to My Blog</h1>
    <p>
      Explore my thoughts on web development, data science, and my journey as a software developer.
    </p>
  </div>

  <!-- Three.js Model Viewer -->
  <div class="content">
    <div id="model-viewer" class="model-container"></div>

    <!-- Featured Topics Section -->
    <div class="section">
      <h2>Featured Topics</h2>
      <ul>
        <li>Web Development Tutorials</li>
        <li>Insights into AI and Machine Learning</li>
        <li>Stories from My Projects</li>
      </ul>
    </div>

    <!-- Navigation Links -->
    <div class="section">
      <h2>Navigate</h2>
      <div class="nav-buttons">
        <a href="#projects">Projects</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </div>

  <!-- Import JavaScript as a Module -->
  <script type="module" src="scripts/main.js"></script>
</body>
</html>
