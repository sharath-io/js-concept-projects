// function displayAlert(){
//   const name =  prompt('Enter Your name');
//   document.querySelector('#name').textContent = name;
// }




const btnElement = document.querySelector('button');
const spanElement = document.querySelector('span');


btnElement.addEventListener('click', function(){
   const name = prompt('Enter your name')
   spanElement.textContent= name
})



