/*
 * @name Regular Polygon
 * @description What is your favorite? Pentagon? Hexagon? Heptagon? No?
 * What about the icosagon? The polygon() function created for this example is
 * capable of drawing any regular polygon. Try placing different numbers into
 * the polygon() function calls within draw() to explore.
 */
let points = [];
function setup() {
  createCanvas(1000, 600);
  background(102);
}

let sides = 3;
function mouseClicked() {
  if (sides < 15) {
    sides++;
  } else {
    sides = 3;
  }
}

function draw() {
  background(102);

  push();
  translate(frameCount / 5.0, height * 0.5);
  rotate(frameCount / 200.0);
  polygon(0, 5, 50, sides);
  pop();

  for (let i = 0; i < frameCount; i += 10) {
    push();
    translate(i / 5.0, height * 0.5);
    rotate(i / 200.0);
    let angle = TWO_PI / sides;
    for (let a = 0; a < TWO_PI; a += angle) {
      point(points[a].x, points[a].y);
    }
    pop();
  }
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
    points[a] = createVector(sx, sy);
  }
  endShape(CLOSE);
}
