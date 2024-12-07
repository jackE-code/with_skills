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
      background: linear-gradient(120deg, #000000, #003300, #120D50FF, #009900, #00159FFF);
      background-size: 400% 400%;
      animation: gradientBG 15s ease infinite;
      color: #ffffff;
    }

    /* Gradient Animation */
    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* App Bar */
    .app-bar {
      position: fixed;
      top: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      padding: 10px 20px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      z-index: 1000;
    }

    .app-bar-title {
      margin: 0;
    }

    /* Content Styling */
    .content {
      padding: 100px 20px;
      text-align: center;
    }

    .section {
      margin: 20px 0;
      padding: 20px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
      animation: fadeIn 2s ease-in-out;
    }

    /* Fade-in animation */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Buttons for navigation */
    .nav-buttons {
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    .nav-buttons a {
      color: #ffffff;
      text-decoration: none;
      font-size: 18px;
      padding: 10px 20px;
      border: 2px solid #00cc00;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
    }

    .nav-buttons a:hover {
      background-color: #00cc00;
      color: #000000;
    }
  </style>
</head>
<body>
    <div class="content">
    <div class="section">
      <h1>Welcome to My Blog</h1>
      <p>
        Explore my thoughts on web development, data science, and my journey as a software developer.
      </p>
    </div>

    <div class="section">
      <h2>Featured Topics</h2>
      <ul>
        <li>Web Development Tutorials</li>
        <li>Insights into AI and Machine Learning</li>
        <li>Stories from My Projects</li>
      </ul>
    </div>

    <div class="section">
      <h2>Navigate</h2>
      <div class="nav-buttons">
        <a href="#projects">Projects</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </div>
</body>
</html>
