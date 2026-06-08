// =======================
// 🌍 SCENE SETUP
// =======================
const scene = new THREE.Scene();

// =======================
// 📸 CAMERA
// =======================
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 3;

// =======================
// 🎥 RENDERER
// =======================
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

// =======================
// 🌍 EARTH
// =======================
const geometry = new THREE.SphereGeometry(1, 64, 64);

const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load(
    "https://raw.githubusercontent.com/rohanasini01111/space-universe-site/main/earth.jpg"
);

const material = new THREE.MeshStandardMaterial({
    map: earthTexture
});

const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

// =======================
// 🌌 GLOW (ATMOSPHERE)
// =======================
const glowGeometry = new THREE.SphereGeometry(1.2, 64, 64);

const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0x00aaff,
    transparent: true,
    opacity: 0.2
});

const glow = new THREE.Mesh(glowGeometry, glowMaterial);
scene.add(glow);

// =======================
// 💡 LIGHTING
// =======================
const pointLight = new THREE.PointLight(0xffffff, 3);
pointLight.position.set(5, 3, 5);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);

// =======================
// 🔄 ANIMATION LOOP
// =======================
function animate() {
    requestAnimationFrame(animate);

    // Earth rotation
    earth.rotation.y += 0.002;

    // Glow rotation
    glow.rotation.y += 0.002;

    renderer.render(scene, camera);
}

animate();

// =======================
// 📜 SCROLL ANIMATION
// =======================
const fadeText = document.querySelector(".fade-text");

window.addEventListener("scroll", () => {
    if (!fadeText) return;

    const position = fadeText.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
        fadeText.classList.add("show");
    }
});

// =======================
// 📱 RESPONSIVE RESIZE
// =======================
window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
