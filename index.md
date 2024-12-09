<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Render GLTF Model</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
    }

    #threejs-carousel {
      width: 100%;
      height: 100vh;
    }
  </style>
</head>
<body>
  <div id="threejs-carousel"></div>

  <!-- Include Three.js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.min.js"></script>
  <!-- Include GLTFLoader -->
  <script src="https://cdn.jsdelivr.net/npm/three@0.152.0/examples/js/loaders/GLTFLoader.js"></script>

  <script>
    // Setup
    const container = document.getElementById('threejs-carousel');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Add lighting
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Load the GLTF model
    const loader = new THREE.GLTFLoader();
    loader.load(
      'assets/models/model.gltf', // Replace with the actual path to your GLTF model
      function (gltf) {
        const model = gltf.scene;
        model.scale.set(1, 1, 1); // Adjust scale as needed
        scene.add(model);
      },
      undefined,
      function (error) {
        console.error('Error loading GLTF model:', error);
      }
    );

    // Set camera position
    camera.position.z = 5;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  </script>
</body>
</html>
