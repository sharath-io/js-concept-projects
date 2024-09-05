/*
Execution
1. we need to generate random hex string
2. this hex string should change in text content of span element on DOM
3. hex string also should change background color of body element
4. generate hex string and update in span & background
*/


const colorSpanElement = document.querySelector('.color-span')
const btnElement= document.querySelector('#color-btn');
const bodyElement = document.querySelector('body')


/* have achieved of creating random Numbers from 0-9 and changed styling of body background color
function generaterandomNumbers(){
    let str ='';
    for(let i=0;i<6;i++)
        str = str+Math.floor(Math.random()*10)
    console.log('new generated code is ', str)
    return str;
}
    
btnElement.addEventListener('click', ()=>{
    colorSpanElement.textContent = '#' +generaterandomNumbers()

    bodyElement.style.backgroundColor = colorSpanElement.textContent
})
 */ 


function generateRandomColor(){
    const hexChars = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        const randomIndex = Math.floor(Math.random()*16)
        color = color + hexChars[randomIndex]
    }
    console.log(color)
    return color;
}



btnElement.addEventListener('click', ()=>{
    colorSpanElement.textContent = generateRandomColor();

    bodyElement.style.backgroundColor = colorSpanElement.textContent
    // document.body.style.setProperty('background-color', colorSpanElement.textContent)
})
