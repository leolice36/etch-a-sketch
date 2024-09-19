const container = document.querySelector('#container')

const numberOfDiv = (16*16);

function addMultiDivs(){
    for (i = 0; i < numberOfDiv; i++){
        const newDiv = document.createElement('div')

        newDiv.textContent = `${i+1}`;
        newDiv.className = 'boxDiv';
        container.appendChild(newDiv)
    }
}

addMultiDivs();


const boxes = document.querySelectorAll('.boxDiv');

boxes.forEach(box => {
    box.addEventListener('mouseover',() => {
        box.style.backgroundColor = "black";
    })
});

//Everything above works perfect
// for next the feature (button that resizes and resets the pad)
    // make button above pad (maybe stack with flex)
    // make function for button
        // function prompts "enter pad side lenght"
            // limit 100
        //input value passed to numberOfDiv
        // should remove the existing divs before the new one appears (try append or delete all children 
        // of container before running addMultiDivs() again
            //should adjust flex basis to (1/sideLeght)*100


//clean up 
    //remove numbers
    //remove border

//extra features
    //random RGB for color change
    //only 10% opacity color for each pass, upon 10 passes full black

