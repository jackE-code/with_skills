<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Elian's Blog</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <style>

    .wrapper {
      max-width: none !important;
      width: 100% !important;
      margin: 0 auto !important;
      padding: 15px !important;
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

    .section {
      margin: 40px auto;
      padding: 30px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
      max-width: 90%;
    }

    h2 {
      color: #FFD700;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
    }

    .repo-card {
      background: #222831;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .snake {
      position: absolute;
      top: 20px;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, red, yellow, green, blue, purple);
      animation: snakeMove 3s linear infinite;
    }

    .spacer{
     margin: 10px;
    }

    @keyframes snakeMove {
      0% { left: 0; right: 100%; }
      50% { left: 50%; right: 50%; }
      100% { left: 100%; right: 0; }
    }

    <!-- .marquee {
      margin-top: 20px;
      overflow: hidden;
      white-space: nowrap;
      background: rgba(0, 0, 0, 0.3);
      padding: 10px;
      border-radius: 8px;
    }

    .marquee span {
      display: inline-block;
      margin-right: 20px;
      animation: marquee 15s linear infinite;
    }

    @keyframes marquee {
      from { transform: translateX(100%); }
      to { transform: translateX(-100%); }
    } -->

    .marquee {
      display: flex;
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      margin-bottom: 15px;
      background-color: transparent;
      padding: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .marquee img {
      height: 42px;
      margin: 0 12px;
      animation: scroll 10s linear infinite;
    }
    @keyframes scroll {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(-100%);
      }
    }
  </style>
</head>
<body>
  <div class="snake"></div>

  <div class="content">
    <div class="section">
      <h1 class="text-4xl font-bold mb-4">Code as Art With Njung'e</h1>
      <p class="text-xl">
        Explore my journey as a full-stack developer, blockchain enthusiast, and DevOps engineer.
      </p>
    </div>

    <div class="section">
      <h2 class="text-3xl font-semibold mb-6">My GitHub Repositories</h2>
      <div id="repositories" class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Repositories dynamically populated here -->
      </div>
      <div class="flex justify-center mt-4">
        <button id="prevPage" class="bg-gray-500 text-white px-4 py-2 rounded mr-2 disabled:opacity-50" disabled>Previous</button>
        <button id="nextPage" class="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>

    <!-- <script>
      let currentPage = 1;
      const reposPerPage = 6; // Number of repos per page
      let allRepos = [];

      async function fetchRepositories() {
        try {
          const [repos1, repos2] = await Promise.all([
            fetch('https://api.github.com/users/jacke-code/repos').then(res => res.json()),
            fetch('https://api.github.com/users/njunge3/repos').then(res => res.json())
          ]);

          allRepos = [...repos1, ...repos2];
          renderRepositories();
        } catch (error) {
          console.error('Error fetching repositories:', error);
        }
      }

      function renderRepositories() {
        const startIndex = (currentPage - 1) * reposPerPage;
        const endIndex = startIndex + reposPerPage;
        const reposToShow = allRepos.slice(startIndex, endIndex);

        const reposContainer = document.getElementById('repositories');
        reposContainer.innerHTML = reposToShow.map(repo => `
          <div class="repo-card">
            <h3 class="font-bold text-xl mb-2">${repo.name}</h3>
            <p class="text-sm mb-2">${repo.description || 'No description'}</p>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-400">${repo.language || 'Unknown'}</span>
              <a href="${repo.html_url}" target="_blank" class="bg-blue-500 text-white px-2 py-1 rounded text-sm">View Repo</a>
            </div>
          </div>
        `).join('');

        document.getElementById('prevPage').disabled = currentPage === 1;
        document.getElementById('nextPage').disabled = endIndex >= allRepos.length;
      }

      document.getElementById('prevPage').addEventListener('click', () => {
        currentPage--;
        renderRepositories();
      });

      document.getElementById('nextPage').addEventListener('click', () => {
        currentPage++;
        renderRepositories();
      });

      window.addEventListener('load', fetchRepositories);
    </script> -->


    <div class="section">
      <h2 class="text-3xl font-semibold mb-6">Recent Languages and Frameworks</h2>
      <div class="flex flex-wrap justify-center space-x-4">
        <!-- Programming Languages -->
    <div>
      <div class="spacer"></div>
      <div class="flex flex-wrap gap-2">
        <img src="https://img.shields.io/badge/Apache%20Groovy-4298B8.svg?style=for-the-badge&logo=Apache+Groovy&logoColor=white" alt="Apache Groovy">
        <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" alt="C">
        <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white" alt="C#">
        <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++">
        <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python">
        <img src="https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white" alt="R">
        <img src="https://img.shields.io/badge/Fortran-%23734F96.svg?style=for-the-badge&logo=fortran&logoColor=white" alt="Fortran">
        <img src="https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java">
      </div>
    </div>

    <!-- Frameworks -->
    <div>
      <div class="spacer"></div>
      <div class="flex flex-wrap gap-2">
        <img src="https://img.shields.io/badge/Django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white" alt="Django">
        <img src="https://img.shields.io/badge/Laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel">
        <img src="https://img.shields.io/badge/Angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" alt="Angular">
        <img src="https://img.shields.io/badge/Flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white" alt="Flask">
        <img src="https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
      </div>
    </div>

    <!-- Cloud Platforms -->
    <div>
      <div class="spacer"></div>
      <div class="flex flex-wrap gap-2">
        <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS">
        <img src="https://img.shields.io/badge/Azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white" alt="Azure">
        <img src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud">
        <img src="https://img.shields.io/badge/Netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" alt="Netlify">
        <img src="https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
      </div>
    </div>

    <!-- Tools -->
    <div>
      <div class="spacer"></div>
      <div class="flex flex-wrap gap-2">
        <img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="NPM">
        <img src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE" alt="Insomnia">
        <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT">
        <img src="https://img.shields.io/badge/Chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white" alt="Chart.js">
      </div>
    </div>
      </div>
    </div>

    <div class="section">
      <h2 class="text-3xl font-semibold mb-6">DevOps & CI/CD Pipelines</h2>
      <div id="cicd-pipelines" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- CI/CD Pipelines dynamically populated here -->
      </div>
    </div>
    
   <div class="section">
  <h2 class="text-3xl font-semibold mb-6">Known</h2>
  <div id="KnowledgeBase" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="Acc1">
        <h1>📊 GitHub Stats:</h1>
        <img src="https://github-readme-stats.vercel.app/api?username=jacke-code&theme=dark&hide_border=false&include_all_commits=false&count_private=false" alt="GitHub Stats"><br/>
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=jacke-code&theme=dark&hide_border=false" alt="GitHub Streak Stats"><br/>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jacke-code&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact" alt="Top Languages">
        
        <h2>🏆 GitHub Trophies</h2>
        <img src="https://github-profile-trophy.vercel.app/?username=jacke-code&theme=radical&no-frame=false&no-bg=true&margin-w=4" alt="GitHub Trophies">
        
        <h3>✍️ Random Dev Quote</h3>
        <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical" alt="Random Dev Quote">
        
        <h3>🔝 Top Contributed Repo</h3>
        <img src="https://github-contributor-stats.vercel.app/api?username=jacke-code&limit=5&theme=dark&combine_all_yearly_contributions=true" alt="Top Contributed Repos">
    </div>

    <!-- For Njunge3 -->
     <div class="Acc2">
        <h1>📊 GitHub Stats:</h1>
        <img src="https://github-readme-stats.vercel.app/api?username=njunge3&theme=dark&hide_border=false&include_all_commits=false&count_private=false" alt="GitHub Stats"><br/>
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=njunge3&theme=dark&hide_border=false" alt="GitHub Streak Stats"><br/>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=njunge3&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact" alt="Top Languages">
        
        <h2>🏆 GitHub Trophies</h2>
        <img src="https://github-profile-trophy.vercel.app/?username=njunge3&theme=radical&no-frame=false&no-bg=true&margin-w=4" alt="GitHub Trophies">
        
        <h3>✍️ Random Dev Quote</h3>
        <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical" alt="Random Dev Quote">
        
        <h3>🔝 Top Contributed Repo</h3>
        <img src="https://github-contributor-stats.vercel.app/api?username=njunge3&limit=5&theme=dark&combine_all_yearly_contributions=true" alt="Top Contributed Repos">
    </div>
    
  </div>
</div>


    <div class="marquee" id="iconMarquee"></div>
  </div>

  <!-- <script>
    async function fetchRepositories() {
      try {
        const [repos1, repos2] = await Promise.all([
          fetch('https://api.github.com/users/jacke-code/repos').then(res => res.json()),
          fetch('https://api.github.com/users/njunge3/repos').then(res => res.json())
        ]);

        const repos = [...repos1, ...repos2];
        const reposContainer = document.getElementById('repositories');
        reposContainer.innerHTML = repos.slice(0, 6).map(repo => `
          <div class="repo-card">
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

    window.addEventListener('load', fetchRepositories);
  </script> -->
  <script>
  let currentPage = 1;
  const reposPerPage = 6; // Number of repos per page
  let allRepos = [];

  async function fetchRepositories() {
    try {
      const [repos1, repos2] = await Promise.all([
        fetch('https://api.github.com/users/jacke-code/repos').then(res => res.json()),
        fetch('https://api.github.com/users/njunge3/repos').then(res => res.json())
      ]);

      allRepos = [...repos1, ...repos2];
      renderRepositories();
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  }

  function renderRepositories() {
    const startIndex = (currentPage - 1) * reposPerPage;
    const endIndex = startIndex + reposPerPage;
    const reposToShow = allRepos.slice(startIndex, endIndex);

    const reposContainer = document.getElementById('repositories');
    reposContainer.innerHTML = reposToShow.map(repo => `
      <div class="repo-card">
        <h3 class="font-bold text-xl mb-2">${repo.name}</h3>
        <p class="text-sm mb-2">${repo.description || 'No description'}</p>
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-400">${repo.language || 'Unknown'}</span>
          <a href="${repo.html_url}" target="_blank" class="bg-blue-500 text-white px-2 py-1 rounded text-sm">View Repo</a>
        </div>
      </div>
    `).join('');

    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = endIndex >= allRepos.length;
  }

  document.getElementById('prevPage').addEventListener('click', () => {
    currentPage--;
    renderRepositories();
  });

  document.getElementById('nextPage').addEventListener('click', () => {
    currentPage++;
    renderRepositories();
  });

  window.addEventListener('load', fetchRepositories);
</script>
<script>
  const icons = [
    "acrobat.png", "adobe.png", "animate.png", "apple.png", "azure.png",
    "bitbucket.png", "c-.png", "c-sharp.png", "database.png", "devops.png",
    "docker.png", "etherum.png", "git.png", "github.png", "gitlab.png",
    "hard-hat.png", "html-5.png", "illustrator.png", "java-script.png",
    "jira.png", "linux.png", "mysql.png", "nodejs.png", "photoshop.png",
    "php.png", "prometheus.png", "python.png", "r.png", "ruby.png",
    "social.png", "visual-studio.png", "web3.png", "xd.png"
  ];

  const marquee = document.getElementById('iconMarquee');

  icons.forEach(icon => {
    const img = document.createElement('img');
    img.src = `icons/${icon}`;
    img.alt = icon.split('.')[0];
    marquee.appendChild(img);
  });
</script>
</body>
</html>
