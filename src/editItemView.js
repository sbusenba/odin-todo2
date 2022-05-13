const itemEditForm = (editItem,editFunction)=>{

    let form = document.createElement('form')
    let legend = document.createElement('legend')
    legend.innerText = 'Edit Task'
    form.appendChild(legend);
    
    let titleLabel = document.createElement('label');
    titleLabel.innerText = 'Title:';
    titleLabel.setAttribute('for','titleinput');
    let titleInput =document.createElement('input');
    titleInput.type = 'text';
    titleInput.id= 'titleinput'
    titleInput.value=editItem.title
    titleLabel.appendChild(titleInput)
    form.appendChild(titleLabel)
    
    
    let descLabel = document.createElement('label');
    descLabel.innerText = 'Description:';
    descLabel.setAttribute('for','description');
    let descInput =document.createElement('textarea');
    descInput.id='description'
    descInput.setAttribute('rows', 3)
    descInput.value= editItem.description;
    descInput.setAttribute('columns',20)
    descLabel.appendChild(descInput)
    form.appendChild(descLabel)
    
    let projLabel = document.createElement('label');
    projLabel.innerText = 'Project:';
    projLabel.setAttribute('for','project');
    let projInput =document.createElement('textarea');
    projInput.id='project'
    projInput.setAttribute('rows', 3)
    projInput.value= editItem.project;
    projInput.setAttribute('columns',20)
    projLabel.appendChild(projInput)
    form.appendChild(projLabel)
    
    let dateLabel = document.createElement('label');
    dateLabel.innerText = 'Date:';
    dateLabel.setAttribute('for','date');
    let dateInput =document.createElement('input');
    dateInput.id='date';
    dateInput.type = 'date';
    dateInput.value=editItem.dueDate
    dateLabel.appendChild(dateInput);
    form.appendChild(dateLabel);
     
    let addButton = document.createElement('button');
    addButton.textContent = 'Save Edit';
    addButton.addEventListener('click',editFunction)
    addButton.type = 'button';
    
    form.appendChild(addButton);
    

    return form;
}
export default itemEditForm;