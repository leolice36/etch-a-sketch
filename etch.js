const container = document.querySelector('#container')

let numberOfDiv = (16*16); //default size

// Function to generate a random RGB color
// function getRandomRGB() {
//     const r = Math.floor(Math.random() * 256); // Random value between 0 and 255 for Red
//     const g = Math.floor(Math.random() * 256); // Random value between 0 and 255 for Green
//     const b = Math.floor(Math.random() * 256); // Random value between 0 and 255 for Blue
//     return `rgb(${r}, ${g}, ${b})`; // Return the RGB color string
// }



function darkenOnHover(element) {
    let opacity = parseFloat(element.dataset.opacity) || 0;
    // Increase the opacity by 0.1 on each hover, but cap it at 1 (100% opacity)
    opacity = Math.min(opacity + 0.1, 1);

    // Set the new background color with the current opacity for the black overlay
    element.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;

    element.dataset.opacity = opacity;
}




function addMultiDivs(){
    for (i = 0; i < numberOfDiv; i++){
        const newDiv = document.createElement('div')

        // newDiv.textContent = `${i+1}`; //numbers the boxes
        newDiv.className = 'boxDiv';
        container.appendChild(newDiv)
    }
    const boxes = document.querySelectorAll('.boxDiv');

    boxes.forEach(box => {
    box.addEventListener('mouseover',() => {
        // box.style.backgroundColor = "black";
        // box.style.backgroundColor = getRandomRGB();

        box.addEventListener('mouseenter', function() {
        darkenOnHover(box); // Darken the color on hover
        }); 
    })
});
}

addMultiDivs();




//Everything above works perfect

const input = document.querySelector("input")
const button = document.querySelector("#sizeBtn")

function deleteMultiDivs(){
    const container = document.getElementById('container');

    // Remove all divs within the container
    const divs = container.querySelectorAll('div');
    divs.forEach(div => div.remove());
}

function updateDimension(){
    const sideLength = Number(input.value);
    if (sideLength === ''){
      return
      }
    else if(isNaN(sideLength)){
        console.log("not a number")
        return
    }
    else if(sideLength > 100){
        console.log("100 max please")
        return
    }
    
    deleteMultiDivs();
    numberOfDiv = (sideLength)**2;

    addMultiDivs();
    
    
    const boxDiv = document.querySelectorAll('.boxDiv');
    const newFlexBasis = `${(1/sideLength)*100}%`;
    boxDiv.forEach((box) => {
        box.style.flexBasis = newFlexBasis;
    });
    

}

button.addEventListener('click',updateDimension)

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
    //remove numbers
    //remove border

//extra features
    //random RGB for color change
    //only 10% opacity color for each pass, upon 10 passes full black
    // ideally make buttons for each of these settings 

