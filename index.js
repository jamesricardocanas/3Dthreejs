import * as THREE from "./three.js-master/three.js-master/build/three.module.js";
import { GLTFLoader } from "./three.js-master/three.js-master/examples/jsm/loaders/GLTFLoader.js";
// import { GLTFLoader } from "./threejs/GLTFLoader.js";
// import { STLLoader } from "./threejs/STLLoader.js";
// import { MeshoptDecoder } from "./threejs/meshopt_decoder.module.js";
import { OrbitControls } from "./threejs/OrbitControls.js";

// let scene, camera, renderer, object;

// function init() {
//   scene = new THREE.Scene();
//   scene.background = new THREE.Color(0x312321321);

//   camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     10000
//   );
//   camera.position.z = 10;

//   renderer = new THREE.WebGLRenderer();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   scene.add(object);



//   let light = new THREE.DirectionalLight(0xffffff);
//   light.position.set(0, 0, 10);
//   scene.add(light);

//   let light2 = new THREE.DirectionalLight(0xffffff);
//   light2.position.set(0, 0, -10);
//   scene.add(light2);

//   animate();
// }

// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
//   object.rotation.x += 0.001;
//   object.rotation.y += 0.01;
// }

// let loader = new STLLoader();
// loader.load('./3dmodels/Botella.stl', (model)=>{
//     object = new THREE.Mesh(
//         model,
//         new THREE.MeshLambertMaterial({color: 0xdddddd})
//     );
//     object.scale.set(0.1, 0.1, 0.1);
//     object.position.set(0,-5,0);
//     object.rotation.x = -Math.PI/2;
//     init();
// });

// Instantiate a loader
// const loader = new GLTFLoader();

// // // Optional: Provide a DRACOLoader instance to decode compressed mesh data
// // const dracoLoader = new DRACOLoader();
// // dracoLoader.setDecoderPath( '/examples/js/libs/draco/' );
// // loader.setDRACOLoader( dracoLoader );

// // Load a glTF resource
// loader.setMeshoptDecoder(MeshoptDecoder).load(
//   "./obj/B15.glb",
//   function (gltf) {
//     scene.add(gltf.scene);

//     gltf.animations; // Array<THREE.AnimationClip>
//     gltf.scene; // THREE.Group
//     gltf.scenes; // Array<THREE.Group>
//     gltf.cameras; // Array<THREE.Camera>
//     gltf.asset; // Object
//   },
//   // called while loading is progressing
//   function (xhr) {
//     console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//   },
//   // called when loading has errors
//   function (error) {
//     console.log("An error happened");
//   }
// );

const canvas = document.querySelector(".webgl");
const scene = new THREE.Scene();

const loader = new GLTFLoader();
loader.load('./obj/B14.glb',  function (glb) {
    console.log(glb);
    const root = glb.scene;
    root.scale.set(0.03,0.03,0.03);

    scene.add(root);
  },
  function (xhr) {
    console.log((xhr.loader / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.log("ha ocurrido un error");
  }
);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

const sizes = {
  with: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.with / sizes.height,
  0.1,
  100
);
camera.position.set(0, 1, 2);
scene.add(camera);

const renderer = new THREE.WebGL1Renderer({
  canvas: canvas,
});

renderer.setSize(sizes.with, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.gamaOuput = true;
// renderer.render(scene,camera);

function animate(params) {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

  let light3 = new THREE.DirectionalLight(0xffffff);
  light.position.set(0, 0, 10);
  scene.add(light3);

  let light2 = new THREE.DirectionalLight(0xffffff);
  light2.position.set(0, 0, -10);
  scene.add(light2);

let control = new OrbitControls(camera, renderer.domElement);
animate();
