import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.0/build/three.module.js';
import { GLTFLoader } from './loaders/GLTFLoader.js';

// Initialize Scene
const container = document.getElementById('model-viewer');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Lighting
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Load GLTF Model
const loader = new GLTFLoader();
loader.load(
  '../assets/models/scene.gltf', // Update this path to match your project
  function (gltf) {
    const model = gltf.scene;
    model.scale.set(1, 1, 1); // Adjust scale
    scene.add(model);
    camera.position.set(0, 1, 5);
  },
  undefined,
  function (error) {
    console.error('An error occurred:', error);
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
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
