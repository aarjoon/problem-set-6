/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  let hello = document.getElementById('canvas1').getContext('2d');

  hello.clearRect(0, 0, 1024, 512);
  hello.font = "48px sans-serif";
  hello.strokeText("Hello, World!", 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let rect = document.getElementById('canvas2').getContext('2d');
  let height = Number(prompt("Height:"));
  let width = Number(prompt("Width:"));
  let x =  Number(prompt("X:"));
  let y = Number(prompt("Y:"));

  if (height + y > 512 || width + x > 1024) {
    alert("The rectangle will not fit on the canvas");
  } else if (height < 1){
    alert("Height is too small");
  } else if (width < 1){
    alert("Width is too small");
  } else if (x < 5){
    alert("X is too small");
  } else if (y < 5){
    alert("Y is too small");
  } else if (isNaN(height) || isNaN(width) || isNaN(x) || isNaN(y)){
    alert("One of your inputs is not a number");
  } else {
    rect.clearRect(0, 0, 1024, 512);
    rect.fillStyle = "gray";
    rect.fillRect(x - 1, y - 1, width + 2, height + 2);
    rect.fillStyle = "white";
    rect.fillRect(x + 1, y + 1, width - 2, height - 2);
  }
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  let coloredRect = document.getElementById("canvas3").getContext("2d");
  let color = String(prompt("Color:"));

  if (color == "black" || color == "blue" || color =="green" || color == "orange" || color == "purple" || color == "red" || color == "yellow"){
    coloredRect.fillStyle = color;
    coloredRect.fillRect(10, 10, 100, 50);
  } else {
    alert(color + " is not a supported color");
    op.clearRect(0, 0, 1024, 512);
  }
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  let triangle = document.getElementById('canvas4').getContext('2d');
  triangle.clearRect(0, 0, 1024, 512);
  let sides = [];
  let input;

  for (let i = 0; i < 3; i++) {
    do {
      input = Number(prompt(`Side ${i+1}:`));
    } while (isNaN(input) || input <= 0);
      sides.push(input);
    }

  let a = Math.min(...sides);
  let c = Math.max(...sides);
  let b = sides.reduce((x,y) => x + y, 0) - a - c;

    if (c * c != a * a + b * b) {
      alert("This is not a valid right triangle.");
    } else if (a > 1024 || b > 512){
      alert("The triangle will not fit on the canvas.");
    } else {
      triangle.beginPath();
      triangle.moveTo(10, 10);
      triangle.lineTo(10, a + 10);
      triangle.lineTo(b + 10, a + 10);
      triangle.lineTo(10,10);
      triangle.stroke();
      triangle.closePath();
    }
  }


/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let smiley = document.getElementById('canvas5').getContext('2d');
  smiley.clearRect(0, 0, 1024, 512);
  let radius = Number(prompt("Radius:"));

  if (radius > 250.5) {
  alert("The smiley face will not fit on the canvas.");
  } else if (isNaN(radius) || radius < 1) {
  alert("Your radius is too small.");
  } else {
  smiley.beginPath();
  smiley.arc(radius + 10, radius + 10, radius, 0, Math.PI * 2, true);
  smiley.moveTo(10 + radius * .6, radius + 10 - radius / 2);
  smiley.arc(radius + 10 - radius / 2, radius + 10 - radius / 2, radius * .1, 0, Math.PI * 2, true);
  smiley.moveTo(10 + radius * 1.6, radius + 10 - radius / 2);
  smiley.arc(radius + 10 + radius / 2, radius + 10 - radius / 2, radius * .1, 0, Math.PI * 2, true);
  smiley.moveTo(10 + radius * 1.7, radius + 10);
  smiley.arc(radius + 10, radius + 10, radius * .7, 0, Math.PI, false);
  smiley.stroke();
  smiley.closePath();
  }
}


/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  let canvas = document.getElementById('canvas6');
  let star = canvas.getContext('2d');
  star.clearRect(0, 0, canvas.width, canvas.height);
  let outerRadius = Number(prompt("Outer Radius:"));
  let innerRadius = Number(prompt("Inner Radius:"));

  if (outerRadius >= innerRadius && canvas.width >= outerRadius + 125 && canvas.height >= outerRadius + 125 && innerRadius >= 1 && outerRadius >= 1) {
    let points = 5;
    let outerX = [];
    let outerY = [];
    let innerX = [];
    let innerY=[];
      for (let i = 0; i < points; i++) {
        outerX.push(Math.cos((Math.PI * 2 * i) / points - (Math.PI / 2)) * outerRadius + 125);
        outerY.push(Math.sin((Math.PI * 2 * i) / points - (Math.PI / 2)) * outerRadius + 125);
        innerX.push(Math.cos(((Math.PI * 2 * i) / points) - (Math.PI / 2) + (Math.PI / points)) * innerRadius + 125);
        innerY.push(Math.sin(((Math.PI * 2 * i) / points) - (Math.PI / 2) + (Math.PI / points)) * innerRadius + 125);
      }
      star.beginPath();
      star.moveTo(outerX[0], outerY[0]);
      for(let j = 0; j < outerX.length; j++) {
        star.lineTo(innerX[j], innerY[j]);
        star.lineTo(outerX[j + 1], outerY[j + 1]);
      }
      star.lineTo(outerX[0], outerY[0]);
      star.stroke();
      star.closePath();
  }
  else {
      alert("Your inputs are invalid.");
    }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let canvas = document.getElementById('canvas7')
  let stop = canvas.getContext('2d');
  stop.clearRect(0, 0, canvas7.width, canvas7.height);
  let sideLength = 80;
  let center = [10 + (80) / 2 + 80 / Math.sqrt(2), 10 + (80 / 2) + (80 / Math.sqrt(2))];
  let pointX = [];
  let pointY = [];

  for (let i = 0; i<8; i++) {
    pointX.push(Math.cos(((Math.PI * 2 * i) / 8) - Math.PI / 8) * 100 + center[0]);
    pointY.push(Math.sin(((Math.PI * 2 * i) / 8) - Math.PI / 8) * 100 + center[1]);
  }
  stop.beginPath();
  stop.moveTo([pointX][0], pointY[0]);
  for (let j = 0; j < pointX.length; j++) {
    stop.lineTo(pointX[j], pointY[j]);
  }
  stop.lineTo(pointX[0], pointY[0]);
  stop.stroke();
  stop.fillStyle = "red";
  stop.fill();
  stop.closePath();
  stop.beginPath();
  stop.textAlign = "center";
  stop.font = "64px sans-serif";
  stop.fillStyle = "white";
  stop.fillText("STOP", center[0], center[1]+15);
  stop.closePath();
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let pyramid = document.getElementById('canvas8').getContext('2d');
  pyramid.clearRect(0,0,1024,512);
  let s = Number(prompt("Length:"));
  let x = 10;
  let y = 502;

  if (isNaN(s)) {
    alert("Your input is not a number.");
  } else if (s > 100) {
    alert("The pyramid will not fit on the canvas.");
  } else {
    pyramid.beginPath();
    let odd = true;
    for (let a = 0; a < 5; a++) {
      for (let i = 0; i < 5 - a; i++) {
        pyramid.moveTo(x,y);
        pyramid.lineTo(x + s, y);
        pyramid.lineTo(x + s, y - s);
        pyramid.lineTo(x, y - s);
        pyramid.lineTo(x, y);
        if (odd) {
          x+=s;
        } else {
          x-=s;
        }
      }
      if (odd) {
        x-=s * 3 / 2;
      } else {
        x+=s * 3 / 2;
      }
      y-=s
      odd = !odd;
    }
    pyramid.stroke();
  }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let house = document.getElementById('canvas9').getContext('2d');
  house.clearRect(0, 0, 1024, 760);

  let houseColor = prompt("House Color:");
  let doorColor = prompt("Front Door Color:");
  if ((houseColor == "blue" || houseColor == "brown"|| houseColor == "green" || houseColor == "orange" || houseColor == "purple" || houseColor == "red" || houseColor == "yellow") && (doorColor == "blue" || doorColor == "brown"|| doorColor == "green" || doorColor == "orange" || doorColor == "purple" || doorColor == "red" || doorColor == "yellow")) {
    house.fillStyle = "black";
    house.fillRect(150, 300, 724, 450);
    house.fillStyle = houseColor;
    house.fillRect(151, 301, 722, 448);
    house.fill();

    house.beginPath();
    house.moveTo(150, 300);
    house.lineTo(512, 10);
    house.lineTo(874, 300);
    house.lineTo(150, 300);
    house.fillStyle = "black";
    house.fill();
    house.closePath();
    house.beginPath();
    house.moveTo(153, 299);
    house.lineTo(512, 12);
    house.lineTo(871, 299);
    house.lineTo(151, 299);
    house.fillStyle = "gray";
    house.fill();
    house.closePath();

    house.fillStyle = "black";
    house.fillRect(260, 620, 80, 80);
    house.fillRect(260, 400, 80, 80);
    house.fillRect(684, 620, 80, 80);
    house.fillRect(684, 400, 80, 80);
    house.fillStyle = "#80ddf3";
    house.fillRect(261, 621, 78, 78);
    house.fillRect(261, 401, 78, 78);
    house.fillRect(685, 621, 78, 78);
    house.fillRect(685, 401, 78, 78);

    house.fillStyle = "black"
    house.fillRect(462, 590, 100, 160);
    house.fillStyle = doorColor;
    house.fillRect(463, 591, 98, 158);

    house.beginPath()
    house.arc(545, 670, 8, 0, Math.PI * 2, true);
    house.fillStyle = "black";
    house.fill();
    house.closePath();
    house.beginPath()
    house.arc(545, 670, 7, 0, Math.PI * 2, true);
    house.fillStyle = "gold";
    house.fill();
    house.closePath();

  } else {
    alert("One of your colors is not supported.");
  }

}
