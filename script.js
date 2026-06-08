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

// Geometry
const geometry = new THREE.SphereGeometry(1, 64, 64);

// Texture
const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load(
  "https://raw.githubusercontent.com/rohanasini01111/space-universe-site/main/earth.jpg"
);

// Material
const material = new THREE.MeshStandardMaterial({
  map: earthTexture
});

// Mesh (🔥 yaha earth create hoti hai)
const earth = new THREE.Mesh(geometry, material);

// Scene me add
scene.add(earth);


// =======================
// LIGHT
// =======================
const light = new THREE.PointLight(0xffffff, 3);
light.position.set(5, 3, 5);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);


// =======================
// ANIMATION (🔥 ALWAYS LAST)
// =======================
function animate() {
  requestAnimationFrame(animate);

  // rotation (ab safe hai)
  earth.rotation.y += 0.002;

  renderer.render(scene, camera);
}

animate();


