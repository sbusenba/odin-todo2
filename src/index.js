import navBar from './navBar'
import itemForm from './addItemForm';


const items = ['Task List','Projects','Add Item']
let selected = 2;
const addItem =() => {
console.log('adding!')
console.log(document.querySelector('#titleinput').value)
}



const navClicked = (e) => {
 console.log(e.target.textContent)
 selected = items.indexOf(e.target.textContent)
 while (body.firstChild) {
     body.removeChild(body.firstChild)
 }
 switch (e.target.textContent){
    case 'Task List':
        myNav = navBar(items,selected,navClicked)
        body.appendChild(myNav)

        break;
    case 'Projects':
        myNav = navBar(items,selected,navClicked)
        body.appendChild(myNav)
        break;

    case 'Add Item':
       myNav = navBar(items,selected,navClicked)
        body.appendChild(myNav)
        body.appendChild(myAddItem)
        
        
        

        break;
    default:
        break; 
 } 
}


let body= document.querySelector('body')
body.style.backgroundColor = '#b000b5'
let myNav = navBar(items,selected,navClicked)
let myAddItem = itemForm(addItem);
body.appendChild(myNav);
body.appendChild(myAddItem);