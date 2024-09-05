const openModalElement = document.querySelector('#open-modal');
const modalElement =document.querySelector('.modal');

// const modalContentElement = document.querySelector('.modal-content');
// targeting specific element
const modalContentElement = modalElement.querySelector('.modal-content');


openModalElement.addEventListener('click', ()=>{
    modalElement.classList.add('open');
})

modalContentElement.addEventListener('click', ()=>{
    modalElement.classList.remove('open');
})