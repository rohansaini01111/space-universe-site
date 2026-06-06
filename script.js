console.log("Three.js running");

// SCENE
const scene = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 3);

// RENDERER
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("earthCanvas"),
    antialias: true,
    alpha: true   
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);

// LIGHT
const light = new THREE.DirectionalLight(0xffffff, 1.5);
light.position.set(5, 2, 5);
scene.add(light);

const ambient = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambient);

// EARTH
const geometry = new THREE.SphereGeometry(1, 64, 64);
const textureLoader = new THREE.TextureLoader();

const earthTexture = textureLoader.load(
    "https://raw.githubusercontent.com/jeromeetienne/threex.planets/master/images/earthmap1k.jpg"
);

const material = new THREE.MeshStandardMaterial({
    map: earthTexture
});

const earth = new THREE.Mesh(geometry, material);
scene.add(earth);
earth.scale.set(1.5, 1.5, 1.5);

// 🌍 GLOW
const glowGeometry = new THREE.SphereGeometry(1.55, 64, 64);

const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0x3399ff,
    transparent: true,
    opacity: 0.05,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending
});

const glow = new THREE.Mesh(glowGeometry, glowMaterial);
scene.add(glow);

// ANIMATION
function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.002;
    renderer.render(scene, camera);
}
animate();
