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
  <div class="section">
    <h1>Welcome to My Blog</h1>
    <p>
      Explore my thoughts on web development, data science, and my journey as a software developer.
    </p>
  </div>

  <div class="content">
    <div class="model-container" id="model-viewer"></div>

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

  <!-- Include Three.js and GLTFLoader -->
  <!-- Include Three.js and GLTFLoader -->
  <script src="https://cdn.jsdelivr.net/npm/three@0.152.0/build/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.152.0/examples/js/loaders/GLTFLoader.js"></script>
  <script>
    // Initialize Three.js scene
    const container = document.getElementById('model-viewer');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Add lighting
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load GLTF Model
    const loader = new THREE.GLTFLoader();
    loader.load(
      'assets/models/scene.gltf', // Update with the correct relative path
      function (gltf) {
        const model = gltf.scene;
        model.scale.set(1, 1, 1); // Adjust scale if needed
        scene.add(model);
        camera.position.set(0, 1, 5); // Adjust camera position
      },
      undefined,
      function (error) {
        console.error('An error occurred while loading the model:', error);
      }
    );

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();

    // Handle Resize
    window.addEventListener('resize', () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
  </script>
</body>
</html>
