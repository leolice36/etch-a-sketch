const container = document.querySelector('#container')
let sideLengthGlobal = 16
let numberOfDiv = (sideLengthGlobal**2) ; //default size


function getRandomRGB() {
    const min = 127;
    const r = Math.floor(Math.random() * (256 - min) + min); // Random value between 0 and 255 for Red
    const g = Math.floor(Math.random() * (256 - min) + min); // Random value between 0 and 255 for Green
    const b = Math.floor(Math.random() * (256 - min) + min); // Random value between 0 and 255 for Blue
    return `rgb(${r}, ${g}, ${b})`; 
    // Return the RGB color string
}



function darkenOnHover(element) {
    let opacity = parseFloat(element.dataset.opacity) || 0;
    // Increase the opacity by 0.1 on each hover, but cap it at 1 (100% opacity)
    opacity = Math.min(opacity + 0.1, 1);

    // Set the new background color with the current opacity for the black overlay
    element.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;

    element.dataset.opacity = opacity;
}

const modeBtn = document.querySelector('#modeBtn');
modeBtn.addEventListener('click', applyMode)

let modeApplied = 'darken';
function applyMode(){
    deleteMultiDivs();
    addMultiDivs();
    modeApplied = document.querySelector('input[name="mode"]:checked');
    const divs = container.querySelectorAll('div');
    const background = document.querySelector('body');

    // let x = modeApplied.value;
    // console.log({x});

    if (modeApplied.value === 'darken'){
        divs.forEach(box => {
            box.style.backgroundColor = '#00ffe1';
            box.style.borderColor = 'white'
            background.style.backgroundColor = 'white';
            container.style.borderColor = 'white';
        });
    } 
    else if (modeApplied.value === 'rgb'){
        divs.forEach(box => {
            box.style.backgroundColor = '#1e1e1e';
            box.style.borderColor = '#858585'
            background.style.backgroundColor = '858585';
            container.style.borderColor = 'white';
        });
    }
}

function addMultiDivs(){
    for (i = 0; i < numberOfDiv; i++){
        const newDiv = document.createElement('div')
        newDiv.className = 'boxDiv';
        container.appendChild(newDiv)
    }

    const boxes = document.querySelectorAll('.boxDiv');


    boxes.forEach(box => {
        box.addEventListener('mouseover',() => {
            const selectedMode = modeApplied
            if (selectedMode.value === 'rgb'){
                box.style.backgroundColor = getRandomRGB();
            } else {
                darkenOnHover(box); // Darken the color on hover
            }
        })
    });
    const boxDiv = document.querySelectorAll('.boxDiv');
    const newFlexBasis = `${(1/sideLengthGlobal)*100}%`;
    boxDiv.forEach((box) => {
        box.style.flexBasis = newFlexBasis;
    });
}

// addMultiDivs();
applyMode();



//Everything above works perfect

const input = document.querySelector("input")
const sizeBtn = document.querySelector("#sizeBtn")

function deleteMultiDivs(){
    const container = document.getElementById('container');

    // Remove all divs within the container
    const divs = container.querySelectorAll('div');
    divs.forEach(div => div.remove());
}



function updateDimension(){
    const sideLength = document.querySelector('#size');
    console.log(sideLength.value)

    if (sideLength.value === ''){
      return
      }
    else if(sideLength.value > 100){
        console.log("100 max please")
        return
    }
    numberOfDiv = (sideLength.value)**2;
    sideLengthGlobal = sideLength.value;
    
    applyMode();

}

sizeBtn.addEventListener('click',updateDimension)
input.addEventListener('keydown',function(event){
    if (event.key === 'Enter'){
      updateDimension();
    }
  }
);

function preventInvalidInput(event) {
    // Prevent 'e', 'E', '+', and '-'
    if (event.key === 'e' || event.key === 'E' || event.key === '+' || event.key === '-') {
        event.preventDefault();
    }
}

// for next the feature (button that resizes and resets the pad)
    // make button above pad (maybe stack with flex) checck
    // make function for button check
        // function prompts "enter pad side lenght" (canceled, used input element instead)
            // limit 100 check
        //input value passed to numberOfDiv check
        // should remove the existing divs before the new one appears (try append or delete all children) 
        // of container before running addMultiDivs() again check
            //should adjust flex basis to (1/sideLeght)*100 check


//clean up 
    //remove numbers check
    //remove border canceled

//extra features
    //random RGB for color change check
    //only 10% opacity color for each pass, upon 10 passes full black check
    // ideally make buttons for each of these settings 

