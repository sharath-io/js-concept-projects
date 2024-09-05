/*Execution
1. create counter & + / - buttons
2. add event listeners to both buttons and include operation
3. take care of edge cases and update styling color of background
*/

const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const counterElement = document.querySelector('h1');

let total =0;
const limit = 20;

function updateCounterDisplay(){
    if(total<0){
        total =0;
    }

    if(total>20){
        total=20;
    }

    counterElement.textContent = total;
    document.body.style.setProperty('background-color', `rgb(${(total / limit) * 255}, 64, 0)`)
}

incrementBtn.addEventListener('click', ()=>{
   total=total +1;
   updateCounterDisplay(); 
})


decrementBtn.addEventListener('click', ()=>{
    total=total -1;
   updateCounterDisplay(); 
})

// to give a color with intial render
updateCounterDisplay(); 


