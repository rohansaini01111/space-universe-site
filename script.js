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
camera.position.z = 3;

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
const geometry = new THREE.SphereGeometry(1, 64, 64);

const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load("earth.jpg");
    "https://threejs.org/examples/textures/earth_atmos_2048.jpg"
);

const material = new THREE.MeshBasicMaterial({
    map: earthTexture
});

const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

// =======================
// LIGHT (optional but future use)
// =======================
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 3, 5);
scene.add(light);

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
