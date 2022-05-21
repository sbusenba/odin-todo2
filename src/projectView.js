const projectView = (project,color)=>{
    let projectDiv = document.createElement('div');
    projectDiv.style.backgroundColor  = color;
    projectDiv.classList.add('projectDiv');
    let projectTitle = document.createElement('div'); 
    projectTitle.innerText = project;
    projectDiv.appendChild(projectTitle) ;
    let colorInput = document.createElement('input');
    colorInput.classList.add('colorInput')
    colorInput.type = 'color';
    projectDiv.appendChild(colorInput);

return projectDiv; 
}
export default projectView;