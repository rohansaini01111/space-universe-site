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
camera.position.set(1.5, 0, 2.5);

// RENDERER
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("earthCanvas"),
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

// LIGHT
const light = new THREE.DirectionalLight(0xffffff, 1.5);
light.position.set(5, 2, 5);
scene.add(light);

// soft ambient light
const ambient = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambient);

// EARTH GEOMETRY
const geometry = new THREE.SphereGeometry(1, 64, 64);

// TEXTURE LOADER
const textureLoader = new THREE.TextureLoader();

// ✅ WORKING EARTH TEXTURE
const earthTexture = textureLoader.load(
    "https://raw.githubusercontent.com/jeromeetienne/threex.planets/master/images/earthmap1k.jpg"
);

// MATERIAL
const material = new THREE.MeshStandardMaterial({
    map: earthTexture,
    roughness: 1,
    metalness: 0
});

// MESH
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);
earth.position.x = -1.2;
earth.scale.set(2, 2, 2);
// ANIMATION
function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.001;
    renderer.render(scene, camera);
}

animate();
