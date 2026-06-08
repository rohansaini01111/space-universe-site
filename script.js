// =======================
// SCENE SETUP
// =======================
const scene = new THREE.Scene();

// =======================
// CAMERA
// =======================
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 2

// =======================
// RENDERER
// =======================
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Canvas add to body
document.body.appendChild(renderer.domElement);

// =======================
// EARTH
// =======================
const geometry = new THREE.SphereGeometry(1.8, 64, 64);

const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load("earth.jpg");

const material = new THREE.MeshStandardMaterial({
    map: earthTexture
});

const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

// =======================
// LIGHT (optional but future use)
// =======================
const light = new THREE.PointLight(0xffffff, 3);
light.position.set(5, 3, 5);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);
// =======================
// RESPONSIVE RESIZE
// =======================
window.addEventListener("resize", () => {
    // Update sizes
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);

    // Update camera
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// =======================
// ANIMATION LOOP (CORE)
// =======================
function animate() {
    requestAnimationFrame(animate);

    // Earth rotation
    earth.rotation.y += 0.002;

    renderer.render(scene, camera);
}

animate();
