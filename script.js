// BASIC CHECK
console.log("Three.js running...");

// SCENE
const scene = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 2;

// RENDERER
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("earthCanvas"),
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

// LIGHT (IMPORTANT)
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 3, 5);
scene.add(light);

// GEOMETRY
const geometry = new THREE.SphereGeometry(1, 64, 64);

// SIMPLE MATERIAL (TEST)
const material = new THREE.MeshStandardMaterial({
    color: 0x00aaff
});

// MESH
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

// ANIMATE
function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
