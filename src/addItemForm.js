const itemForm = (submitFunction)=>{
let form = document.createElement('form')
let legend = document.createElement('legend')
legend.innerText = 'Add New Task:'
form.appendChild(legend);

let titleLabel = document.createElement('label');
titleLabel.innerText = 'Title';
titleLabel.setAttribute('for','titleinput');
let titleInput =document.createElement('input');
titleInput.type = 'text';
titleInput.id= 'titleinput'
form.appendChild(titleLabel)
form.appendChild(titleInput)

let descLabel = document.createElement('label');
descLabel.innerText = 'Description';
descLabel.setAttribute('for','description');
let descInput =document.createElement('input');
descInput.id='description'
descInput.type = 'text';
form.appendChild(descLabel)
form.appendChild(descInput)

let dateLabel = document.createElement('label');
dateLabel.innerText = 'Date';
dateLabel.setAttribute('for','date');
let dateInput =document.createElement('input');
dateInput.id='date';
dateInput.type = 'date';
form.appendChild(dateLabel);
form.appendChild(dateInput);
 
let addButton = document.createElement('button');
addButton.textContent = 'Add Item';
addButton.addEventListener('click',submitFunction)
addButton.type = 'button';

form.appendChild(addButton);

return form;
}
export default itemForm;