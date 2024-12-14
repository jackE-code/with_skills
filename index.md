# Elian's Portfolio & Blog

## Welcome 🚀

I'm a passionate software developer exploring the intersections of web development, data science, and DevOps. This portfolio is a window into my professional journey and technical explorations.

## Featured Topics

- 💻 Web Development Tutorials
- 🤖 Insights into AI and Machine Learning
- 🚧 Stories from My Projects

## Projects Showcase

### Web Development Projects

| Project Name | Technologies | Description |
|-------------|--------------|-------------|
| Project 1   | React, Node.js | Interactive web application |
| Project 2   | Python, Django | Data visualization dashboard |
| Project 3   | Three.js, WebGL | 3D Rendering Experiments |

### DevOps & CI/CD

#### Continuous Integration Platforms
- CircleCI
- GitHub Actions
- Travis CI

#### Deployment Strategies
- Docker Containerization
- Kubernetes Orchestration
- Cloud Deployment (AWS, GCP)

## Technical Skills

### Programming Languages
- Python
- JavaScript
- TypeScript
- Go

### Frameworks & Tools
- React
- Node.js
- Django
- Flask
- Docker
- Kubernetes

## 3D & Visualization

I'm passionate about creating interactive 3D experiences using Three.js and WebGL. My recent projects explore:
- Real-time 3D rendering
- Interactive model loading
- WebGL animation techniques

## Blog & Thoughts

### Recent Articles
1. [Introduction to Modern DevOps Practices](#)
2. [Building Scalable Web Applications](#)
3. [Machine Learning Model Deployment Strategies](#)

## Connect With Me

- 📧 Email: [your.email@example.com]
- 🔗 LinkedIn: [Your LinkedIn Profile]
- 🐙 GitHub: [Your GitHub Profile]

## 3D Model Viewer

<div id="model-container" style="width: 100%; height: 400px;"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/loaders/GLTFLoader.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/controls/OrbitControls.js"></script>

<script>
    // 3D Model Rendering Script
    function initModelViewer() {
        // Create scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0);

        // Create camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
        camera.position.z = 5;

        // Create renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, 400);
        document.getElementById('model-container').appendChild(renderer.domElement);

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        // Add OrbitControls
        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.maxPolarAngle = Math.PI / 2;

        // Load GLTF Model
        const loader = new THREE.GLTFLoader();
        loader.load(
            '/assets/models/scene.gltf', // Update this path to your model
            (gltf) => {
                const model = gltf.scene;
                
                // Auto-scale and center the model
                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                model.position.sub(center);

                const size = box.getSize(new THREE.Vector3());
                const maxDim = Math.max(size.x, size.y, size.z);
                const scaleFactor = 3 / maxDim;
                model.scale.set(scaleFactor, scaleFactor, scaleFactor);

                scene.add(model);
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => {
                console.error('An error occurred loading the model:', error);
            }
        );

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }
        animate();

        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / 400;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, 400);
        });
    }

    // Initialize the model viewer when the page loads
    window.addEventListener('load', initModelViewer);
</script>