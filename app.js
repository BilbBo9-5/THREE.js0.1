/*
//Variables for setup

let container;
let camera;
let renderer;
let scene;
let house;

function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000; //1000

  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set( 3, 0.1, 32); // 0 5 2

    const lightdot = new THREE.DirectionalLight(0xffffff, 0.6); // 2
    const lightdot2 = new THREE.DirectionalLight(0xffffff, 0.6); // 2
    const lightdot3 = new THREE.DirectionalLight(0xffffff, 0.6); // 2
    const lightdot4 = new THREE.DirectionalLight(0xffffff, 0.6); // 2
    lightdot.position.set(1, 1, 1); // 50 50 100
    lightdot2.position.set(-1, 1, 1); // 50 50 100
    lightdot3.position.set(0, 0.5, -1); // 50 50 100
    lightdot4.position.set(0, -1, 0); // 50 50 100
    scene.add(lightdot, lightdot2, lightdot3, lightdot4);
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Model
  let loader = new THREE.GLTFLoader();
  console.log(loader);
  loader.load(
      "./house/podacktiion.gltf",
      function(gltf) {
        let mesh = gltf.scene.children[0];
        mesh.scale.set(1, 1, 1);
        animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

init();
let controls = new THREE.OrbitControls(camera, renderer.domElement);
function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
*/
