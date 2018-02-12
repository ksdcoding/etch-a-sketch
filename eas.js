//DOM Cache
const container = document.querySelector("#container");
const nsbtn = document.querySelector("#nsbtn");

//Creates 1 Div
function createDiv () {
  var newDiv = document.createElement("div");
  newDiv.classList.add('gridDiv');
  container.appendChild(newDiv);
}

// Creates a div grid of a changeable amount of divs
let s = 64;
function createDivGrid (s) {
document.body.style.setProperty("--grid-columns", s);
document.body.style.setProperty("--grid-rows", s);
let gridSize = (Math.pow(s, 2));
let i = 0;
do {
  createDiv();
  i++;
} while (i < gridSize);
}

//Executes createDivGrid function
createDivGrid(s);

//selected all pixel divs
const gridDiv = document.querySelectorAll(".gridDiv");

//Function to execute on mouseover
function changeColor(e) {
  for (let k=0; k < gridDiv.length; k++)
  e.target.style.backgroundColor = '#7C90DB';
}

//Attaches event listener to changeColor function
for (let j=0; j < gridDiv.length; j++) {
  gridDiv[j].addEventListener('mouseover', changeColor);
}

//clear grid function
function clearGrid () {
  for (let l=0; l < gridDiv.length; l++)
  gridDiv[l].style.backgroundColor = '#F7F4EA';
}

//Executes createDivGrid function letting the user choose how many pixel divs to be created
function togglePixelDensity(){
    let pixelDensity = parseInt(prompt('Enter A Number from 2 - 64!\n(Hint: The Higher The Number, The Higher The Pixel Density)\n(Default: 64)'));
    if (pixelDensity >= 2 && pixelDensity <= 64) {
      createDivGrid(pixelDensity);
    }
    else {
      alert ("Pick A Number from 2 - 64");
      return
    }
}

//Attaches togglePixelDensity and clearGrid function to new sketch button
nsbtn.addEventListener('click', clearGrid);
nsbtn.addEventListener('click', togglePixelDensity);
