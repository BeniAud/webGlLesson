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
  //for GIF
  dimensions: [512, 512],
  fps: 24,
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
  renderer.setClearColor("white", 1.0);

  // Setup a camera
  //const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100);
  const camera = new THREE.OrthographicCamera();
  // camera.position.set(2, 2, -4);
  //camera.position.set(4, 2, 2);
  camera.lookAt(new THREE.Vector3());

  // Setup camera controller
  //const controls = new THREE.OrbitControls(camera);

  // Setup your scene
  const scene = new THREE.Scene();

  const palette = random.pick(palettes);

  const box = new THREE.BoxGeometry(1, 1, 1);
  for (let i = 0; i < 50; i++) {
    const mesh = new THREE.Mesh(
      box,
      // new THREE.BoxGeometry(1, 1, 1),
      // new THREE.MeshPhysicalMaterial({
      //   color: "white",
      new THREE.MeshStandardMaterial({
        color: random.pick(palette)
        // roughness: 0.75,
        // flatShading: true
      })
    );
    // axe X, Y, Z
    //mesh.position.set(Math.random(), Math.random(), Math.random());
    mesh.position.set(
      // random.value(-1, 1), 0, 0);
      random.range(-1, 1),
      random.range(-1, 1),
      random.range(-1, 1)
    );
    mesh.scale.set(
      // random.value(-1, 1), 0, 0);
      random.range(-1, 1),
      random.range(-1, 1),
      random.range(-1, 1)
    );
    mesh.scale.multiplyScalar(0.5);
    scene.add(mesh);
  }
  scene.add(new THREE.AmbientLight("hsl(40,50%,40%)"));
  const light = new THREE.DirectionalLight("white", 1);
  light.position.set(2, 2, 4);
  scene.add(light);
  const easeFn = BezierEasing(0.67, 0.03, 0.29, 0.99);
  // // Specify an ambient/unlit colour
  // scene.add(new THREE.AmbientLight("#59314f"));

  // // Add some light
  // const light = new THREE.PointLight("#45caf7", 1, 15.5);
  // light.position.set(2, 2, -4).multiplyScalar(1.5);
  // scene.add(light);

  //draw each frame
  return {
    // Handle resize events here
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight);
      //camera.aspect = viewportWidth / viewportHeight;
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

      camera.updateProjectionMatrix();
    },
    // Update & render your scene here
    // render({ time }) {
    //   scene.rotation.y = time;
    render({ playhead }) {
      const t = Math.sin(playhead * Math.PI * 2);
      scene.rotation.z = easeFn(t);
      // scene.rotation.y = Math.sin(playhead * Math.PI * 2) * 2;
      // mesh.rotation.y = time * ((10 * Math.PI) / 180);
      // mesh.rotation.y = time * 0.1;
      //controls.update();
      renderer.render(scene, camera);
    },
    // Dispose of events & renderer for cleaner hot-reloading
    unload() {
      //controls.dispose();
      renderer.dispose();
    }
  };
};

canvasSketch(sketch, settings);
