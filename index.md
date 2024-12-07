<!DOCTYPE html>
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
      background: linear-gradient(120deg, #000000, #003300, #120D50, #0E460E, #00159F);
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
      margin: 0;
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

    /* Three.js Canvas */
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
      <h1>Welcome to My Blog</h1>
      <p>
        Explore my thoughts on web development, data science, and my journey as a software developer.
      </p>
    </div>

    <div class="carousel-container" id="threejs-carousel"></div>
    <div class="carousel-container" id="threejs-carousel"></div>

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

  <!-- Include Three.js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.min.js"></script>
  <script>
    // Three.js Animation
    const container = document.getElementById('threejs-carousel');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create a cube
    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    // Create a sphere
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 2;
    scene.add(sphere);

    // Add lights
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Camera position
    camera.position.z = 5;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      sphere.rotation.x -= 0.01;
      sphere.rotation.y -= 0.01;
      renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
  </script>
</body>
</html>
