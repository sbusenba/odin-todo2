import navBar from './navBar'
import itemForm from './addItemForm';
import toDoItem from './toDoItem';
import toDoList from './toDoList';
import itemView from './itemView';
import itemEditForm from './editItemView';
import projectView from './projectView';

const items = ['Task List','Projects','Add Item']
let selected = 2;
let myToDoList = toDoList();
let editIndex = 0;

const save = ()=>{
    localStorage.setItem('toDoList',JSON.stringify(myToDoList.list))
}
function clearBody(){
    while (body.firstChild) {
        body.removeChild(body.firstChild)
    }
}

function showList(list){
    list.forEach((item,index)=>{
        let newItemDiv =itemView(item);
        newItemDiv.setAttribute('data-key', index);
        if (item.selected === false){
            newItemDiv.addEventListener('click',itemClicked)
            body.appendChild(newItemDiv);
        } else {
            body.appendChild(newItemDiv);
            let deleteButton = document.querySelector('.deleteButton');
            deleteButton.addEventListener('click',deleteItem);
            let editButton = document.querySelector('.editButton');
            editButton.addEventListener('click',editItem);
        }
    });
}




function deleteItem(e){
    myToDoList.deleteItem(this.parentNode.getAttribute('data-key'));
    clearBody()
    body.appendChild(myNav)
    showList(myToDoList.list)
    save();
}
function editButtonPushed(){
    let titleInput =document.querySelector('#titleinput')
    myToDoList.list[editIndex].title = titleInput.value;
    titleInput.value = ''
    let descInput= document.querySelector('#description')
    myToDoList.list[editIndex].description = descInput.value;
    descInput.value = ''
    let dateInput = document.querySelector('#date')
    myToDoList.list[editIndex].dueDate = dateInput.value; 
    let projectInput = document.querySelector('#project')
    myToDoList.list[editIndex].project = projectInput.value;
    projectInput.value =''
    clearBody()
    body.appendChild(myNav)
    showList(myToDoList.list)
    save();
}
function editItem(){
    editIndex = this.parentNode.getAttribute('data-key');
    
    clearBody()
    body.appendChild(myNav)
    body.append(itemEditForm(myToDoList.list[editIndex],editButtonPushed))

}

const addItem =() => {
    let newToDo = toDoItem();
    let titleInput =document.querySelector('#titleinput')
    newToDo.title = titleInput.value;
    titleInput.value = ''
    let descInput= document.querySelector('#description')
    newToDo.description = descInput.value;
    descInput.value = ''
    let dateInput = document.querySelector('#date')
    newToDo.dueDate = dateInput.value;
    let projectInput = document.querySelector('#project')

    newToDo.project = projectInput.value;
    projectInput.value = ''
    myToDoList.addItem(newToDo);
    save()
}
const projectColor=(e) =>{
    myToDoList.setBGColor(e.target.parentNode.firstChild.textContent,e.target.value)
    e.target.parentNode.style.backgroundColor = e.target.value;
    save();

}
const projectClicked= (e) =>{
    console.log(e.target)
    if (e.target.type !=='color'){
        clearBody()
        body.appendChild(myNav)
        showList(myToDoList.list.filter(item=>item.project===e.target.firstChild.textContent))
        console.log(e.target.firstChild.textContent)
    } 

}
const itemClicked = (e) => {

    console.log(e.target.getAttribute('data-key'));
    myToDoList.list.forEach((item,index)=> {
        if (index === parseInt(e.target.getAttribute('data-key'))){
            item.selected = true;
        } else {
            item.selected = false;
        }
    })

    clearBody()
    body.appendChild(myNav)
    showList(myToDoList.list);

}


const navClicked = (e) => {
 selected = items.indexOf(e.target.textContent)
    clearBody();
 switch (e.target.textContent){
    case 'Task List':
        myNav = navBar(items,selected,navClicked)
        body.appendChild(myNav)
        console.log(myToDoList.list)
        myToDoList.list.forEach(item=>item.selected = false)
        myToDoList.list.forEach((item,index)=>{
            let newItemDiv =itemView(item);
            newItemDiv.setAttribute('data-key', index);
            if (item.selected == false){
                newItemDiv.addEventListener('click',itemClicked)
            }
            body.appendChild(newItemDiv);
        });

        break;
    case 'Projects':
        myNav = navBar(items,selected,navClicked)
        body.appendChild(myNav)
        myToDoList.getProjects().forEach((projectName)=>body.append(projectView(projectName,myToDoList.getColor(projectName))));
        document.querySelectorAll('.colorInput').forEach((input)=>{
            input.addEventListener('change',projectColor)
        
        })
        let projects = document.querySelectorAll('.projectDiv')
        projects.forEach((projectDiv)=>{
            projectDiv.addEventListener('click',projectClicked)
        })
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



if (localStorage.getItem('toDoList')){
    let storedToDoList = JSON.parse(localStorage.getItem('toDoList'))
    console.table(storedToDoList)
    storedToDoList.forEach((item)=>{
        let newToDo = toDoItem()
        newToDo.title = item.title;
        newToDo.description = item.description;
        newToDo.dueDate = item.dueDate;
        newToDo.completed = item.completed;
        newToDo.selected = false;
        newToDo.project= item.project;
        newToDo.color = item.color
        myToDoList.addItem(newToDo)
    })
}



let body= document.querySelector('body')
body.style.backgroundColor = '#b000b5'
let myNav = navBar(items,selected,navClicked)
let myAddItem = itemForm(addItem);
body.appendChild(myNav);
body.appendChild(myAddItem);