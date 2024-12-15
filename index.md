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
        <span class="bg-blue-600 text-white px-4 py-2 rounded-lg">JavaScript</span>
        <span class="bg-green-600 text-white px-4 py-2 rounded-lg">Python</span>
        <span class="bg-red-600 text-white px-4 py-2 rounded-lg">Ruby</span>
        <span class="bg-yellow-600 text-white px-4 py-2 rounded-lg">C++</span>
        <span class="bg-indigo-600 text-white px-4 py-2 rounded-lg">Solidity</span>
        <!-- Add more languages here -->
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
      <div id="KnowlwdgeBase" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ![Apache Groovy](https://img.shields.io/badge/Apache%20Groovy-4298B8.svg?style=for-the-badge&logo=Apache+Groovy&logoColor=white) ![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white) ![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white) ![AssemblyScript](https://img.shields.io/badge/assembly%20script-%23000000.svg?style=for-the-badge&logo=assemblyscript&logoColor=white) ![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white) ![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white) ![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white) ![Kotlin](https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![R](https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white) ![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white) ![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white) ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![Fortran](https://img.shields.io/badge/Fortran-%23734F96.svg?style=for-the-badge&logo=fortran&logoColor=white) ![Erlang](https://img.shields.io/badge/Erlang-white.svg?style=for-the-badge&logo=erlang&logoColor=a90533) ![Rust](https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white) ![Swift](https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Nix](https://img.shields.io/badge/NIX-5277C3.svg?style=for-the-badge&logo=NixOS&logoColor=white) ![Dart](https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) ![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white) ![DigitalOcean](https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) ![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![OpenStack](https://img.shields.io/badge/Openstack-%23f01742.svg?style=for-the-badge&logo=openstack&logoColor=white) ![Oracle](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white) ![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white) ![Alpine.js](https://img.shields.io/badge/alpinejs-white.svg?style=for-the-badge&logo=alpinedotjs&logoColor=%238BC0D0) ![Anaconda](https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white) ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) ![Angular.js](https://img.shields.io/badge/angular.js-%23E23237.svg?style=for-the-badge&logo=angularjs&logoColor=white) ![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![Blazor](https://img.shields.io/badge/blazor-%235C2D91.svg?style=for-the-badge&logo=blazor&logoColor=white) ![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white) ![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white) ![Code-Igniter](https://img.shields.io/badge/CodeIgniter-%23EF4223.svg?style=for-the-badge&logo=codeIgniter&logoColor=white) ![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react) ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white) ![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![Flutter](https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white) ![JavaFX](https://img.shields.io/badge/javafx-%23FF0000.svg?style=for-the-badge&logo=javafx&logoColor=white) ![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![Nx](https://img.shields.io/badge/nx-143055?style=for-the-badge&logo=nx&logoColor=white) ![OpenGL](https://img.shields.io/badge/OpenGL-%23FFFFFF.svg?style=for-the-badge&logo=opengl) ![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white) ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![RabbitMQ](https://img.shields.io/badge/rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white) ![Xamarin](https://img.shields.io/badge/Xamarin-3199DC?style=for-the-badge&logo=xamarin&logoColor=white) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white) ![WordPress](https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white) ![Web3.js](https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white) ![Windicss](https://img.shields.io/badge/windicss-48B0F1.svg?style=for-the-badge&logo=windi-css&logoColor=white) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![WebGL](https://img.shields.io/badge/WebGL-990000?logo=webgl&logoColor=white&style=for-the-badge) ![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF) ![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Three js](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![SolidJS](https://img.shields.io/badge/SolidJS-2c4f7c?style=for-the-badge&logo=solid&logoColor=c8c9cb) ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101) ![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![Semantic UI React](https://img.shields.io/badge/Semantic%20UI%20React-%2335BDB2.svg?style=for-the-badge&logo=SemanticUIReact&logoColor=white) ![Snowflake](https://img.shields.io/badge/snowflake-%2329B5E8.svg?style=for-the-badge&logo=snowflake&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) ![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white) ![Apache Airflow](https://img.shields.io/badge/Apache%20Airflow-017CEE?style=for-the-badge&logo=Apache%20Airflow&logoColor=white) ![Apache Ant](https://img.shields.io/badge/Apache%20Ant-A81C7D?style=for-the-badge&logo=Apache%20Ant&logoColor=white) ![Apache Maven](https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white) ![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white) ![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white) ![Gunicorn](https://img.shields.io/badge/gunicorn-%298729.svg?style=for-the-badge&logo=gunicorn&logoColor=white) ![Apache Tomcat](https://img.shields.io/badge/apache%20tomcat-%23F8DC75.svg?style=for-the-badge&logo=apache-tomcat&logoColor=black) ![AmazonDynamoDB](https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white) ![Quill](https://img.shields.io/badge/Quill-52B0E7?style=for-the-badge&logo=apache&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34) ![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white) ![Adobe](https://img.shields.io/badge/adobe-%23FF0000.svg?style=for-the-badge&logo=adobe&logoColor=white) ![Adobe Acrobat Reader](https://img.shields.io/badge/Adobe%20Acrobat%20Reader-EC1C24.svg?style=for-the-badge&logo=Adobe%20Acrobat%20Reader&logoColor=white) ![Adobe After Effects](https://img.shields.io/badge/Adobe%20After%20Effects-9999FF.svg?style=for-the-badge&logo=Adobe%20After%20Effects&logoColor=white) ![Adobe Creative Cloud](https://img.shields.io/badge/Adobe%20Creative%20Cloud-DA1F26.svg?style=for-the-badge&logo=Adobe%20Creative%20Cloud&logoColor=white) ![Adobe Illustrator](https://img.shields.io/badge/adobe%20illustrator-%23FF9A00.svg?style=for-the-badge&logo=adobe%20illustrator&logoColor=white) ![Adobe Fonts](https://img.shields.io/badge/Adobe%20Fonts-000B1D.svg?style=for-the-badge&logo=Adobe%20Fonts&logoColor=white) ![Adobe Lightroom](https://img.shields.io/badge/Adobe%20Lightroom-31A8FF.svg?style=for-the-badge&logo=Adobe%20Lightroom&logoColor=white) ![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white) ![Adobe Premiere Pro](https://img.shields.io/badge/Adobe%20Premiere%20Pro-9999FF.svg?style=for-the-badge&logo=Adobe%20Premiere%20Pro&logoColor=white) ![Adobe XD](https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6) ![Matplotlib](https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black) ![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white) ![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white) ![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white) ![Plotly](https://img.shields.io/badge/Plotly-%233F4F75.svg?style=for-the-badge&logo=plotly&logoColor=white) ![Scipy](https://img.shields.io/badge/SciPy-%230C55A5.svg?style=for-the-badge&logo=scipy&logoColor=%white) ![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white) ![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white) ![Keras](https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white) ![CircleCI](https://img.shields.io/badge/circleci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![GitLab](https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white) ![Bitbucket](https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white) ![TravisCI](https://img.shields.io/badge/travis%20ci-%232B2F33.svg?style=for-the-badge&logo=travis&logoColor=white) ![GitLab CI](https://img.shields.io/badge/gitlab%20CI-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white) ![Ansible](https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&logoColor=white) ![Airbnb](https://img.shields.io/badge/Airbnb-%23ff5a5f.svg?style=for-the-badge&logo=Airbnb&logoColor=white) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) ![Cisco](https://img.shields.io/badge/cisco-%23049fd9.svg?style=for-the-badge&logo=cisco&logoColor=black) ![Arduino](https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white) ![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white) ![Gradle](https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white) ![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white) ![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white) ![Mosquitto](https://img.shields.io/badge/mosquitto-%233C5280.svg?style=for-the-badge&logo=eclipsemosquitto&logoColor=white) ![Pi-Hole](https://img.shields.io/badge/pihole-%2396060C.svg?style=for-the-badge&logo=pi-hole&logoColor=white) ![Unity](https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white) ![Unreal Engine](https://img.shields.io/badge/unrealengine-%23313131.svg?style=for-the-badge&logo=unrealengine&logoColor=white) ![nVIDIA](https://img.shields.io/badge/nVIDIA-%2376B900.svg?style=for-the-badge&logo=nVIDIA&logoColor=white) ![Analogue](https://img.shields.io/badge/Analogue-1A1A1A?style=for-the-badge&logo=Analogue&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black) ![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Raspberry Pi](https://img.shields.io/badge/-Raspberry_Pi-C51A4A?style=for-the-badge&logo=Raspberry-Pi) ![Epic Games](https://img.shields.io/badge/epicgames-%23313131.svg?style=for-the-badge&logo=epicgames&logoColor=white)
# 📊 GitHub Stats:
![](https://github-readme-stats.vercel.app/api?username=njunge3&theme=dark&hide_border=false&include_all_commits=false&count_private=false)<br/>
![](https://github-readme-streak-stats.herokuapp.com/?user=njunge3&theme=dark&hide_border=false)<br/>
![](https://github-readme-stats.vercel.app/api/top-langs/?username=njunge3&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact)
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
