const canvasSketch = require("canvas-sketch");
//canvas sketch util
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const palettes = require("nice-color-palettes");

random.setSeed(random.getRandomSeed());
const settings = {
  suffix: random.getSeed(),
  // dimensions:"A4"or letter or postcard
  dimensions: [2048, 2048]
  //_______________________________________________//
  //dimensions: [16, 10]
  // dimensions: "A4",
  // orientation: "landscape" or "portait"
  // units: "cm",
  // for print design
  // pixelPerInch: 300
  //_______________________________________________//
};
// random.setSeed(random.getRandomSeed());
// console.log(random.getSeed());
// random.setSeed(4);
//____________________________________________________//
const sketch = () => {
  const colorCount = random.rangeFloor(2, 6);
  // const palette = random.pick(palettes).slice(0, colorCount);
  const palette = random.shuffle(random.pick(palettes)).slice(0, colorCount);
  const createGrid = () => {
    const points = [];
    const count = 40;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        //pour prendre l integralite de la page  count-1
        // count <= 1 ? 0.5 :
        const u = count <= 1 ? 0.5 : x / (count - 1);
        const v = count <= 1 ? 0.5 : y / (count - 1);
        const radius = Math.abs(random.noise2D(u, v)) * 0.2;
        points.push({
          color: random.pick(palette),
          //radius: random.gaussian() * 0.01,
          radius,
          rotation: random.noise2D(u, v),
          //radius:Math.abs(0.01 + random.gaussian() * 0.01)
          position: [u, v]
        });
      }
    }
    return points;
  };
  // const points = createGrid();
  // avec canvas sketch util
  //const points = createGrid().filter(() => Math.random() > 0.5);
  random.setSeed(512);
  const points = createGrid().filter(() => random.value() > 0.5);
  const margin = 400;

  console.log(points);

  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    // points.forEach(([u, v]) => {
    // const x = u * width;
    // const y = v * height;

    points.forEach(data => {
      const { position, radius, color, rotation } = data;
      const [u, v] = position;
      // avec canvas sketch util
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      // POUR DES CERCLES
      // context.beginPath();
      // context.arc(x, y, radius * width, 0, Math.PI * 2, false);
      // context.fillStyle = color;
      // context.fill();

      // POUR CONTOURS CERCLES
      // context.strokeStyle = "black";
      // context.lineWidth = 20;
      // context.stroke();

      // POUR TEXT
      context.save();
      context.fillStyle = color;
      context.font = `${radius * width}px "Arial"`;
      context.translate(x, y);
      context.rotate(rotation);
      context.fillText("=", 0, 0);
      // context.fillText("=", x, y);
      context.restore();
    });
    //_______________________________________________//
    //en fonction de unité
    // console.log(width, height);
    // context.fillStyle = "orange";
    // context.fillRect(0, 0, width, height);
    // cercle
    // context.beginPath();
    // context.arc(width / 2, height / 2, width * 0.2, 0, Math.PI * 2, false);
    // context.fillStyle = "red";
    // context.fill();
    // context.lineWidth = width * 0.05;
    // context.strokeStyle = "blue";
    // context.stroke();
    //_______________________________________________//
  };
};

canvasSketch(sketch, settings);
