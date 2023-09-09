const items = document.querySelectorAll('[data-item]')
const controls = document.querySelectorAll('[data-control]')
const pseudoClass = document.styleSheets[1].cssRules[31]
let selectedItem = 1 
let lasItem = items.length
const firstItem = 1

controls.forEach((control) => {
    control.addEventListener('click', (event) => {
        choiceOfAction(event.target.dataset.control)        
    })
})

function choiceOfAction(action) {

    if (action === 'next') {

        selectedItem += 1  
        pseudoClass.selectorText = `.caps:nth-of-type(${selectedItem})`

        if(selectedItem === lasItem ) {
            items[0].classList.add('moved')
            selectedItem = 0
        } else {
            backToOriginal()
        }      
    }

    if (action === 'previous') { 
        if (lasItem) {
            backToOriginal()
        }
        if (selectedItem < firstItem){
            selectedItem = lasItem
            items[0].classList.add('moved')
        }         

        pseudoClass.selectorText = `.caps:nth-of-type(${selectedItem})`
        selectedItem -= 1       
    }
}

function backToOriginal() {
    items[0].classList.remove('moved')
    items[0].style.cssText = 'transition: 0.5s;'
}