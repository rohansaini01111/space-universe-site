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
camera.position.z = 2;

// RENDERER
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("earthCanvas"),
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

// LIGHT
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 3, 5);
scene.add(light);

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
    map: earthTexture
});

// MESH
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

// ANIMATION
function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.002;
    renderer.render(scene, camera);
}

animate();
