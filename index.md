<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Elian's Blog</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <style>
    /* Existing Styles */
  .wrapper{
    maxwidth: max-content;
  }


    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(120deg, #000000, #003300, #120D50, #0E460E, #00159F);
      background-size: 400% 400%;
      animation: gradientBG 15s ease infinite;
      color: #ffffff;
      overflow-x: hidden;
    }

    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

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

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .carousel-container {
      position: relative;
      height: 500px;
      margin: 50px auto;
      max-width: 80%;
    }

    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  </style>
</head>
<body>
  <div class="content">
    <div class="section">
      <h1 class="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p class="text-xl">
        Explore my thoughts on web development, data science, and my journey as a software developer.
      </p>
    </div>

    <!-- New Repositories Section -->
    <div class="section">
      <h2 class="text-3xl font-semibold mb-6">My GitHub Repositories</h2>
      <div id="repositories" class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Repositories will be dynamically populated here -->
      </div>
    </div>

    

    <!-- DevOps & CI/CD Section -->
    <div class="section">
      <h2 class="text-3xl font-semibold mb-6">DevOps & CI/CD Pipelines</h2>
      <div id="cicd-pipelines" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- CI/CD Pipelines will be dynamically populated here -->
      </div>
    </div>

    <div class="section">
      <h2 class="text-2xl">Featured Topics</h2>
      <ul class="list-none p-0">
        <li class="inline-block mx-2 my-1 p-2 bg-blue-600 rounded">Web Development Tutorials</li>
        <li class="inline-block mx-2 my-1 p-2 bg-green-600 rounded">Insights into AI and Machine Learning</li>
        <li class="inline-block mx-2 my-1 p-2 bg-purple-600 rounded">Stories from My Projects</li>
      </ul>
    </div>

    <div class="section">
      <h2 class="text-2xl mb-4">Navigate</h2>
      <div class="nav-buttons space-x-4">
        <a href="#projects" class="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">Projects</a>
        <a href="#about" class="px-4 py-2 bg-green-500 rounded hover:bg-green-600">About Me</a>
        <a href="#contact" class="px-4 py-2 bg-purple-500 rounded hover:bg-purple-600">Contact</a>
      </div>
    </div>
  </div>

  <!-- GitHub Repositories Script -->
  <script>
    async function fetchRepositories() {
      try {
        // Replace 'yourusername' with your actual GitHub username
        const response = await fetch('https://api.github.com/users/jacke-code/repos' && 'https://api.github.com/users/njunge3/repos');
        const repos = await response.json();
        
        const reposContainer = document.getElementById('repositories');
        reposContainer.innerHTML = repos.slice(0, 6).map(repo => `
          <div class="bg-gray-800 p-4 rounded-lg">
            <h3 class="font-bold text-xl mb-2">${repo.name}</h3>
            <p class="text-sm mb-2">${repo.description || 'No description'}</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-400">${repo.language || 'Unknown'}</span>
              <a href="${repo.html_url}" target="_blank" class="bg-blue-500 text-white px-2 py-1 rounded text-sm">View Repo</a>
            </div>
          </div>
        `).join('');
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    }

    // Mock CI/CD Pipelines (replace with real data if possible)
    function populateCICDPipelines() {
      const pipelinesContainer = document.getElementById('cicd-pipelines');
      const pipelines = [
        {
          name: 'Web App Deployment',
          platform: 'CircleCI',
          status: 'Passed',
          lastRunDate: '2024-01-15'
        },
        {
          name: 'Backend Service',
          platform: 'GitHub Actions',
          status: 'In Progress',
          lastRunDate: '2024-01-14'
        }
      ];

      pipelinesContainer.innerHTML = pipelines.map(pipeline => `
        <div class="bg-gray-800 p-4 rounded-lg">
          <h3 class="font-bold text-xl mb-2">${pipeline.name}</h3>
          <div class="flex justify-between items-center">
            <span class="text-sm">Platform: ${pipeline.platform}</span>
            <span class="text-sm ${pipeline.status === 'Passed' ? 'text-green-500' : 'text-yellow-500'}">
              ${pipeline.status}
            </span>
          </div>
          <p class="text-sm text-gray-400 mt-2">Last Run: ${pipeline.lastRunDate}</p>
        </div>
      `).join('');
    }

    // Fetch repositories when page loads
    window.addEventListener('load', () => {
      fetchRepositories();
      populateCICDPipelines();
    });
  </script>
</body>
</html>