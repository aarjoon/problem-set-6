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
  let rectHeight = Number(prompt("Height:"));
  let rectWidth = Number(prompt("Width:"));
  let x =  Number(prompt("X:"));
  let y = Number(prompt("Y:"));

  if (rectHeight + y > 512 || rectWidth + x > 1024){
    alert("The rectangle will not fit on the canvas");
  } else if (rectHeight < 1) {
    alert("Height is too small");
  } else if (rectWidth < 1) {
    alert("Width is too small");
  } else if (x < 5) {
    alert("X is too small");
  } else if (y < 5) {
    alert("Y is too small");
  } else if (isNaN(rectHeight) || isNaN(rectWidth) || isNaN(x) || isNaN(y)) {
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
  let coloredRect = document.getElementById('canvas3').getContext('2d');
  coloredRect.clearRect(0, 0, 1024, 512);

  let color;
  while (true) {
    color = prompt("Please Enter a Valid Color")
    if (color == "black" || color == "blue" || color == "green" || color == "orange" || color == "purple" || color == "red" || color == "yellow") {
        coloredRect.fillStyle = color;
  	coloredRect.fillRect (10, 10, 100, 50);
    } else {
	alert(color + " is not a supported color");
	coloredRect.clearRect(0, 0, 1024, 512);
    }
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
  let b = sides.reduce((x, y) => x + y, 0) - a - c;
  if (c * c != a * a + b * b){
    alert("This is not a valid right triangle.");
  } else if (a > 1024 || b > 512){
    alert("The triangle will not fit on the canvas.");
  } else {
    op.beginPath();
    op.moveTo(10, 10);
    op.lineTo(10, a + 10);
    op.lineTo(b + 10, a + 10);
    op.lineTo(10, 10);
    op.stroke();
    op.closePath();
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
  let radius;
  do {
    radius = Number(prompt("Radius"));
  } while (isNaN(radius) || radius < 1 || radius > 250.5);
  smiley.beginPath();
  smiley.arc(radius + 10, radius + 10, radius, 0, Math.PI * 2, true);
  smiley.moveTo(10 + radius * .6, radius+10-radius/2);
  smiley.arc(radius+10-radius/2, radius+10 - radius / 2, radius * .1, 0, Math.PI*2, true);
  smiley.moveTo(10+radius*1.6, radius+10-radius/2);
  smiley.arc(radius+10+radius/2, radius+10-radius/2, radius*.1, 0, Math.PI*2, true);
  smiley.moveTo(10+radius*1.7, radius+10);
  smiley.arc(radius+10, radius+10, radius*.7, 0, Math.PI, false);
  smiley.stroke();
  smiley.closePath();
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
  let star = document.getElementById('canvas6').getContext('2d');
  star.clearRect(0, 0, 1024, 512);

  let outerRadius;
  let innerRadius;
  do {
    outerRadius = Number(prompt("Outer Radius:"));
  } while (isNaN(outerRadius));
  do {
    innerRadius = Number(prompt("Inner Radius:"));
  } while (isNaN(innerRadius));

  // let outerRadius=100;
  // let innerRadius=40;
  let degrees = 0;

  if (innerRadius > outerRadius) {
    alert("Your outer radius must be larger than your inner radius.");
  } else if (outerRadius < 2) {
    alert("Your outer radius is too small.");
  } else if (innerRadius < 1) {
    alert("Your inner radius is too small");
  } else {
    star.beginPath();
    // for (let i = 0; i<6; i++){
    //   op.arc(125,125,outerRadius,Math.PI*(-90+degrees)/180,Math.PI*(-90+degrees+72)/180, false);
    //   op.arc(125,125,innerRadius,Math.PI*(-90+degrees+36)/180, Math.PI*(-90+degrees+108)/180, false);
    //   degrees+=72;
    // }
    //degrees=0;

    star.moveTo(125, 125 - outerRadius);
    for (let i=0; i<=5; i++){
      star.lineTo(125+Math.round((Math.cos(Math.PI*(degrees-90)/180)*outerRadius)), 125+Math.round((Math.sin(Math.PI*(degrees-90)/180)*outerRadius)));
      degrees +=36;
      star.lineTo(125+Math.round((Math.cos(Math.PI*(degrees-90)/180)*innerRadius)), 125+Math.round((Math.sin(Math.PI*(degrees-90)/180)*innerRadius)));
      degrees +=36;
    }
    star.stroke();
    star.closePath();
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
  let stop = document.getElementById('canvas7').getContext('2d');
  stop.clearRect(0, 0, canvas.width, canvas.height);
  let sidelength = 80;
  let center=[10 + (sidelength)/2 + sidelength/Math.sqrt(2), 10 + (sidelength/2)+(sidelength/Math.sqrt(2))]
  console.log(center)
  let points=8;
  let pointx=[];
  let pointy=[];

  for(let i = 0; i < points; i++){
    pointx.push(Math.cos(((Math.PI*2*i)/points)-Math.PI/8)*100+center[0]);
    pointy.push(Math.sin(((Math.PI*2*i)/points)-Math.PI/8)*100+center[1]);
  }
  stop.beginPath();
  stop.moveTo([pointx][0], pointy[0]);
  for(let j = 0; j < pointx.length; j++) {
    ctx.lineTo(pointx[j], pointy[j]);
  }
  stop.lineTo(pointx[0], pointy[0]);
  stop.stroke();

  stop.fillStyle="red";
  stop.fill();
  stop.closePath();
  stop.beginPath();
  stop.textAlign = "center";
  stop.font = "56px Georgia";
  stop.fillStyle = "white";
  stop.fillText("STOP", center[0], center[1] + 15);
  stop.closePath()
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

  if (isNaN(s)){
    alert("Your input is not a number");
  } else if (s>100){
    alert("The pyramid will not fit on the canvas");
  } else {
    pyramid.beginPath();
    let odd = true;
    for (let a=0; a<5; a++){
      for (let i=0; i<5-a; i++){
        pyramid.moveTo(x,y);
        pyramid.lineTo(x+s,y);
        pyramid.lineTo(x+s,y-s);
        pyramid.lineTo(x,y-s);
        pyramid.lineTo(x,y);
        if (odd){
          x+=s;
        } else {
          x-=s;
        }
      }
      if (odd){
        x-=s*3/2;
      } else {
        x+=s*3/2;
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
  house.clearRect(0,0,1024,760);

  let houseColor = prompt("House Color:");
  let doorColor = prompt("Front Door Color:");
  if ((houseColor == "blue" || houseColor == "brown"|| houseColor == "green" || houseColor == "orange" || houseColor == "purple" || houseColor == "red" || houseColor == "yellow") && (doorColor == "blue" || doorColor == "brown"|| doorColor == "green" || doorColor == "orange" || doorColor == "purple" || doorColor == "red" || doorColor == "yellow")){
    //body
    house.fillStyle="black";
    house.fillRect(150,300,724,450);
    house.fillStyle=houseColor;
    house.fillRect(151,301,722,448);
    house.fill();

    //roof
    house.beginPath();
    house.moveTo(150,300);
    house.lineTo(512,10);
    house.lineTo(874,300);
    house.lineTo(150,300);
    house.fillStyle="black";
    house.fill();
    house.closePath();
    house.beginPath();
    house.moveTo(153,299);
    house.lineTo(512,12);
    house.lineTo(871,299);
    house.lineTo(151,299);
    house.fillStyle="gray";
    house.fill();
    house.closePath();

    //windows
    house.fillStyle="black";
    house.fillRect(260,620,80,80);
    house.fillRect(260,400,80,80);
    house.fillRect(684,620,80,80);
    house.fillRect(684,400,80,80);
    house.fillStyle="#80ddf3";
    house.fillRect(261,621,78,78);
    house.fillRect(261,401,78,78);
    house.fillRect(685,621,78,78);
    house.fillRect(685,401,78,78);

    //door
    house.fillStyle="black"
    house.fillRect(462,590,100,160);
    house.fillStyle=doorColor;
    house.fillRect(463,591,98,158);

    //doorknob
    house.beginPath()
    house.arc(545,670,8,0,Math.PI*2,true);
    house.fillStyle="black";
    house.fill();
    house.closePath();
    house.beginPath()
    house.arc(545,670,7,0,Math.PI*2,true);
    house.fillStyle="gold";
    house.fill();
    house.closePath();

  } else {
    alert("One of your colors is not supported");
  }

}
