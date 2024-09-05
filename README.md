# JavaScript Projects

### Buidling JS projects and learning concepts through them

## 01-welcome
* document, eventlistener, querySelector, diff b/w innerHTML, innerText, textContent
* text manipulation
* basic alert & prompt


## 02-modal
* modal styling
* selection of dom elements
  <details>
  <summary>Differences between Global and Scoped selection of DOM elements</summary>

  The main difference between the two approaches you mentioned lies in how the browser searches for elements, specifically in terms of scope.

    ### 1. Using `document.querySelector('.modal-content')`:
    - **Global scope**: This searches the **entire document** (the whole page) for the first element that matches the `.modal-content` class.
    - In your case, since there is only one `.modal-content` element in the DOM, it works fine.
    - This is the more generic approach, as it will search through the whole page even if you later add other elements outside of `.modal` that share the `.modal-content` class.
    
    ### 2. Using `modalElement.querySelector('.modal-content')`:
    - **Scoped search**: This searches **within the `modalElement`** only, which is the parent container. The browser will look for the first `.modal-content` class inside the modal container.
    - This approach is more specific because it limits the scope of the search to just within the modal.
    
    ### Which is the correct process?
    - **Best Practice**: It's generally better to use the second approach (`modalElement.querySelector('.modal-content')`), as it makes your code more **modular** and **scoped** to where you expect the `.modal-content` to be. If you ever have another `.modal-content` class elsewhere on the page, this method avoids any unintended behavior by restricting the search within the `modalElement`.
    
    ### Here's the updated suggestion:
    
    ```javascript
    const openModalElement = document.querySelector('#open-modal');
    const modalElement = document.querySelector('.modal');
    const modalContentElement = modalElement.querySelector('.modal-content'); // Scoped
    
    openModalElement.addEventListener('click', () => {
        modalElement.classList.add('open');
    });
    
    modalContentElement.addEventListener('click', () => {
        modalElement.classList.remove('open');
    });

