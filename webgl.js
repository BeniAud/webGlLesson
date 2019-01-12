// const canvasSketch = require('canvas-sketch');

// // Ensure ThreeJS is in global scope for the 'examples/'
// global.THREE = require('three');

// // Include any additional ThreeJS examples below
// require('three/examples/js/controls/OrbitControls');

// const settings = {
//   // Make the loop animated
//   animate: true,
//   // Get a WebGL canvas rather than 2D
//   context: 'webgl',
//   // Turn on MSAA
//   attributes: { antialias: true }
// };

// const sketch = ({ context }) => {
//   // Create a renderer
//   const renderer = new THREE.WebGLRenderer({
//     context
//   });

//   // WebGL background color
//   renderer.setClearColor('#000', 1);

//   // Setup a camera
//   const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100);
//   camera.position.set(2, 2, -4);
//   camera.lookAt(new THREE.Vector3());

//   // Setup camera controller
//   const controls = new THREE.OrbitControls(camera);

//   // Setup your scene
//   const scene = new THREE.Scene();

//   const mesh = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshPhysicalMaterial({
//       color: 'white',
//       roughness: 0.75,
//       flatShading: true
//     })
//   );
//   scene.add(mesh);

//   // Specify an ambient/unlit colour
//   scene.add(new THREE.AmbientLight('#59314f'));

//   // Add some light
//   const light = new THREE.PointLight('#45caf7', 1, 15.5);
//   light.position.set(2, 2, -4).multiplyScalar(1.5);
//   scene.add(light);

//   // draw each frame
//   return {
//     // Handle resize events here
//     resize ({ pixelRatio, viewportWidth, viewportHeight }) {
//       renderer.setPixelRatio(pixelRatio);
//       renderer.setSize(viewportWidth, viewportHeight);
//       camera.aspect = viewportWidth / viewportHeight;
//       camera.updateProjectionMatrix();
//     },
//     // Update & render your scene here
//     render ({ playhead}) {
//       mesh.rotation.y = time * (10 * Math.PI / 180);
//       controls.update();
//       renderer.render(scene, camera);
//     },
//     // Dispose of events & renderer for cleaner hot-reloading
//     unload () {
//       controls.dispose();
//       renderer.dispose();
//     }
//   };
// };

// canvasSketch(sketch, settings);

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// const canvasSketch = require("canvas-sketch");
// const random = require("canvas-Sketch-util/random");
// // Ensure ThreeJS is in global scope for the 'examples/'
// global.THREE = require("three");

// // Include any additional ThreeJS examples below
// require("three/examples/js/controls/OrbitControls");

// const settings = {
//   // Make the loop animated
//   animate: true,
//   // Get a WebGL canvas rather than 2D
//   context: "webgl",
//   // Turn on MSAA
//   attributes: { antialias: true }
// };

// const sketch = ({ context }) => {
//   // Create a renderer
//   const renderer = new THREE.WebGLRenderer({
//     context
//   });

//   // WebGL background color
//   renderer.setClearColor("hsl(0,0%,95%)", 1);

//   // Setup a camera
//   const camera = new THREE.OrthographicCamera();

//   // Setup your scene
//   const scene = new THREE.Scene();
//   const box = new THREE.BoxGeometry(1, 1, 1);
//   for (let i = 0; i < 10; i++) {
//     const mesh = new THREE.Mesh(
//       box,
//       new THREE.MeshBasicMaterial({
//         color: "red"
//       })
//     );
//     //  Math.random(), Math.random(), Math.random()  or
//     mesh.position.set(
//       random.range(-1, 1),
//       random.range(-1, 1),
//       random.range(-1, 1)
//     );
//     mesh.scale.multiplyScalar(0.1);
//     scene.add(mesh);
//   }
//   // draw each frame
//   return {
//     // Handle resize events here
//     resize({ pixelRatio, viewportWidth, viewportHeight }) {
//       renderer.setPixelRatio(pixelRatio);
//       renderer.setSize(viewportWidth, viewportHeight);
//       // isometric Three.js Camera copy/docs/cheat-sheet.md

//       //modif const aspect = width / height;
//       const aspect = viewportWidth / viewportHeight;

//       // Ortho zoom
//       const zoom = 1.0;

//       // Bounds
//       camera.left = -zoom * aspect;
//       camera.right = zoom * aspect;
//       camera.top = zoom;
//       camera.bottom = -zoom;

//       // Near/Far
//       camera.near = -100;
//       camera.far = 100;

//       // Set position & look at world center
//       camera.position.set(zoom, zoom, zoom);
//       camera.lookAt(new THREE.Vector3());

//       // Update the camera
//       camera.updateProjectionMatrix();
//     },
//     // Update & render your scene here
//     render({ time }) {
//       renderer.render(scene, camera);
//     },
//     // Dispose of events & renderer for cleaner hot-reloading
//     unload() {
//       renderer.dispose();
//     }
//   };
// };

// canvasSketch(sketch, settings);

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// const canvasSketch = require("canvas-sketch");
// const random = require('canvas-sketch-util/random');
// const palettes = require("nice-color-palettes");
// // Ensure ThreeJS is in global scope for the 'examples/'
// global.THREE = require("three");

// // Include any additional ThreeJS examples below
// require("three/examples/js/controls/OrbitControls");

// const settings = {
//   // Make the loop animated
//   animate: true,
//   // Get a WebGL canvas rather than 2D
//   context: "webgl",
//   // Turn on MSAA
//   attributes: { antialias: true }
// };

// const sketch = ({ context }) => {
//   // Create a renderer
//   const renderer = new THREE.WebGLRenderer({
//     context
//   });

//   // WebGL background color
//   renderer.setClearColor("hsl(0,0%,95%)", 1.0);

//   // Setup a camera
//   const camera = new THREE.OrthographicCamera();

//   // Setup your scene
//   const scene = new THREE.Scene();

//   const palette = random.pick(palettes);

//   const box = new THREE.BoxGeometry(1, 1, 1);
//   for (let i = 0; i < 40; i++) {
//     const mesh = new THREE.Mesh(
//       box,
//       new THREE.MeshStandardMaterial({
//         color: random.pick(palette)
//       })
//     );
//     //  Math.random(), Math.random(), Math.random()  or
//     mesh.position.set(
//       random.range(-1, 1),
//       random.range(-1, 1),
//       random.range(-1, 1)
//     );
//     mesh.scale.set(
//       random.range(-1, 1),
//       random.range(-1, 1),
//       random.range(-1, 1)
//     );

//     mesh.scale.multiplyScalar(0.5);
//     scene.add(mesh);
//   }
//   scene.add(new THREE.AmbientLight("hsl(0,0%,100%)"));

//   const light = new THREE.DirectionalLight("white", 1);
//   light.position.set(0, 4, 0);
//   scene.add(light);
//   // draw each frame
//   return {
//     // Handle resize events here
//     resize({ pixelRatio, viewportWidth, viewportHeight }) {
//       renderer.setPixelRatio(pixelRatio);
//       renderer.setSize(viewportWidth, viewportHeight);

//       const aspect = viewportWidth / viewportHeight;

//       // Ortho zoom
//       const zoom = 2;

//       // Bounds
//       camera.left = -zoom * aspect;
//       camera.right = zoom * aspect;
//       camera.top = zoom;
//       camera.bottom = -zoom;

//       // Near/Far
//       camera.near = -100;
//       camera.far = 100;

//       // Set position & look at world center
//       camera.position.set(zoom, zoom, zoom);
//       camera.lookAt(new THREE.Vector3());

//       // Update the camera
//       camera.updateProjectionMatrix();
//     },
//     // Update & render your scene here
//     render({ time }) {
//       renderer.render(scene, camera);
//     },
//     // Dispose of events & renderer for cleaner hot-reloading
//     unload() {
//       renderer.dispose();
//     }
//   };
// };

// canvasSketch(sketch, settings);

///////////////////////////////////////////////////
//////////////Making GIF ///////////////////////////
///////////dimensions:[512, 512], ///////////////////////
/////https://giftool.surge.sh/////////////////////////////
// commande : canvas-sketch webgl.js --output=tmp/

// const canvasSketch = require("canvas-sketch");
// const random = require("canvas-sketch-util/random");
// const palettes = require("nice-color-palettes");

// // Ensure ThreeJS is in global scope for the 'examples/'
// global.THREE = require("three");

// // Include any additional ThreeJS examples below
// require("three/examples/js/controls/OrbitControls");

// const settings = {
//   dimensions: [512, 512],
//   fps: 25,
//   duration: 4,
//   // Make the loop animated
//   animate: true,
//   // Get a WebGL canvas rather than 2D
//   context: "webgl",
//   // Turn on MSAA
//   attributes: { antialias: true }
// };

// const sketch = ({ context }) => {
//   // Create a renderer
//   const renderer = new THREE.WebGLRenderer({
//     context
//   });

//   // WebGL background color
//   renderer.setClearColor("hsl(0,0%,95%)", 1.0);

//   // Setup a camera
//   const camera = new THREE.OrthographicCamera();

//   // Setup your scene
//   const scene = new THREE.Scene();

//   const palette = random.pick(palettes);

//   const box = new THREE.BoxGeometry(1, 1, 1);
//   for (let i = 0; i < 40; i++) {
//     const mesh = new THREE.Mesh(
//       box,
//       new THREE.MeshStandardMaterial({
//         color: random.pick(palette)
//       })
//     );
//     //  Math.random(), Math.random(), Math.random()  or
//     mesh.position.set(
//       random.range(-1, 1),
//       random.range(-1, 1),
//       random.range(-1, 1)
//     );
//     mesh.scale.set(
//       random.range(-1, 1),
//       random.range(-1, 1),
//       random.range(-1, 1)
//     );

//     mesh.scale.multiplyScalar(0.5);
//     scene.add(mesh);
//   }
//   scene.add(new THREE.AmbientLight("hsl(0,0%,90%)"));

//   const light = new THREE.DirectionalLight("white", 1);
//   light.position.set(0, 4, 0);
//   scene.add(light);
//   // draw each frame
//   return {
//     // Handle resize events here
//     resize({ pixelRatio, viewportWidth, viewportHeight }) {
//       renderer.setPixelRatio(pixelRatio);
//       renderer.setSize(viewportWidth, viewportHeight);

//       const aspect = viewportWidth / viewportHeight;

//       // Ortho zoom
//       const zoom = 2;

//       // Bounds
//       camera.left = -zoom * aspect;
//       camera.right = zoom * aspect;
//       camera.top = zoom;
//       camera.bottom = -zoom;

//       // Near/Far
//       camera.near = -100;
//       camera.far = 100;

//       // Set position & look at world center
//       camera.position.set(zoom, zoom, zoom);
//       camera.lookAt(new THREE.Vector3());

//       // Update the camera
//       camera.updateProjectionMatrix();
//     },
//     // Update & render your scene here
//     // render({ time }) {
//     //   scene.rotation.y = time;
//     //   scene.rotation.x = time;
//     //   scene.rotation.z = time;
//     //   renderer.render(scene, camera);
//     // },
//     render({ playhead }) {
//       scene.rotation.z = playhead * Math.PI * 2;

//       renderer.render(scene, camera);
//     },
//     // Dispose of events & renderer for cleaner hot-reloading
//     unload() {
//       renderer.dispose();
//     }
//   };
// };

// canvasSketch(sketch, settings);

///////////////////////////////////////////////////
//////////Easing & Trogonometry////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// const canvasSketch = require("canvas-sketch");
// const random = require("canvas-sketch-util/random");
// const palettes = require("nice-color-palettes");

// // Ensure ThreeJS is in global scope for the 'examples/'
// global.THREE = require("three");

// // Include any additional ThreeJS examples below
// require("three/examples/js/controls/OrbitControls");

// const settings = {
//   // Make the loop animated
//   animate: true,
//   // Get a WebGL canvas rather than 2D
//   context: "webgl",
//   // Turn on MSAA
//   attributes: { antialias: true }
// };

// const sketch = ({ context }) => {
//   // Create a renderer
//   const renderer = new THREE.WebGLRenderer({
//     context
//   });

//   // WebGL background color
//   renderer.setClearColor("hsl(0,0%,95%)", 1.0);

//   // Setup a camera
//   const camera = new THREE.OrthographicCamera();

//   // Setup your scene
//   const scene = new THREE.Scene();

//   const palette = random.pick(palettes);

//   const box = new THREE.BoxGeometry(1, 1, 1);
//   for (let i = 0; i < 40; i++) {
//     const mesh = new THREE.Mesh(
//       box,
//       new THREE.MeshStandardMaterial({
//         color: random.pick(palette)
//       })
//     );
//     //  Math.random(), Math.random(), Math.random()  or
//     mesh.position.set(
//       random.range(-1, 1),
//       random.range(-1, 1),
//       random.range(-1, 1)
//     );
//     mesh.scale.set(
//       random.range(-1, 1),
//       random.range(-1, 1),
//       random.range(-1, 1)
//     );

//     mesh.scale.multiplyScalar(0.5);
//     scene.add(mesh);
//   }
//   scene.add(new THREE.AmbientLight("hsl(0,0%,90%)"));

//   const light = new THREE.DirectionalLight("white", 1);
//   light.position.set(1, 4, 2);
//   scene.add(light);
//   // draw each frame
//   return {
//     // Handle resize events here
//     resize({ pixelRatio, viewportWidth, viewportHeight }) {
//       renderer.setPixelRatio(pixelRatio);
//       renderer.setSize(viewportWidth, viewportHeight);

//       const aspect = viewportWidth / viewportHeight;

//       // Ortho zoom
//       const zoom = 2;

//       // Bounds
//       camera.left = -zoom * aspect;
//       camera.right = zoom * aspect;
//       camera.top = zoom;
//       camera.bottom = -zoom;

//       // Near/Far
//       camera.near = -100;
//       camera.far = 100;

//       // Set position & look at world center
//       camera.position.set(zoom, zoom, zoom);
//       camera.lookAt(new THREE.Vector3());

//       // Update the camera
//       camera.updateProjectionMatrix();
//     },
//     // Update & render your scene here
//     // render({ time }) {
//     //   scene.rotation.y = time;
//     //   scene.rotation.x = time;
//     //   scene.rotation.z = time;
//     //   renderer.render(scene, camera);
//     // },
//     render({ time }) {
//       scene.rotation.z = time;
//       scene.rotation.x = time;
//       scene.rotation.z = time;
//       renderer.render(scene, camera);
//     },
//     // Dispose of events & renderer for cleaner hot-reloading
//     unload() {
//       renderer.dispose();
//     }
//   };
// };

// canvasSketch(sketch, settings);

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");
const palettes = require("nice-color-palettes");
const eases = require("eases");
const BezierEasing = require("bezier-easing");
// Ensure ThreeJS is in global scope for the 'examples/'
global.THREE = require("three");

// Include any additional ThreeJS examples below
require("three/examples/js/controls/OrbitControls");

const settings = {
  dimensions: [512, 512],
  fps: 25,
  duration: 4,
  // Make the loop animated
  animate: true,
  // Get a WebGL canvas rather than 2D
  context: "webgl",
  // Turn on MSAA
  attributes: { antialias: true }
};

const sketch = ({ context }) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({
    context
  });

  // WebGL background color
  renderer.setClearColor("black", 2.0);

  // Setup a camera
  const camera = new THREE.OrthographicCamera();

  //   // Setup camera controller
  const controls = new THREE.OrbitControls(camera);
  // Setup your scene
  const scene = new THREE.Scene();

  const palette = random.pick(palettes);

  const box = new THREE.BoxGeometry(1, 1, 1);
  for (let i = 0; i < 40; i++) {
    const mesh = new THREE.Mesh(
      box,
      new THREE.MeshStandardMaterial({
        color: random.pick(palette)
      })
    );
    //  Math.random(), Math.random(), Math.random()  or
    mesh.position.set(
      random.range(-1, 1),
      random.range(-1, 1),
      random.range(-1, 1)
    );
    mesh.scale.set(
      random.range(-1, 1),
      random.range(-1, 1),
      random.range(-1, 1)
    );

    mesh.scale.multiplyScalar(0.6);
    scene.add(mesh);
  }
  scene.add(new THREE.AmbientLight("hsl(0,0%,90%)"));

  const light = new THREE.DirectionalLight("white", 1);
  light.position.set(1, 4, 2);
  scene.add(light);

  const easeFn = BezierEasing(0.67, 0.03, 0.29, 0.99);
  // draw each frame
  return {
    // Handle resize events here
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight);

      const aspect = viewportWidth / viewportHeight;

      // Ortho zoom
      const zoom = 2;

      // Bounds
      camera.left = -zoom * aspect;
      camera.right = zoom * aspect;
      camera.top = zoom;
      camera.bottom = -zoom;

      // Near/Far
      camera.near = -100;
      camera.far = 100;

      // Set position & look at world center
      camera.position.set(zoom, zoom, zoom);
      camera.lookAt(new THREE.Vector3());

      // Update the camera
      camera.updateProjectionMatrix();
    },

    render({ playhead }) {
      const t = Math.sin(playhead * Math.PI * 2) * 2;
      scene.rotation.z = easeFn(t);
      renderer.render(scene, camera);
      controls.update();
    },
    // Dispose of events & renderer for cleaner hot-reloading
    unload() {
      renderer.dispose();
      controls.dispose();
    }
  };
};

canvasSketch(sketch, settings);
