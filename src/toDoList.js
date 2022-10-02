const toDoList = () => {
    const list = new Array(0);
    const addItem = (item) => {
      item.priority = list.length
      item.color = getColor(item.project)
      list.push(item)
    };
    const deleteItem = (index)=>{
      list.splice(index,1);
    }
    const setBGColor = (project,color) =>{
      console.log('setting color')
      list.forEach((item)=>(item.project===project)? item.color = color: color)
    }
    const getProjects = ()=>{
      let projects = list.map((listItem)=> listItem.project)
      let uniqueProjects = []
      projects.forEach((project)=>{
        if (uniqueProjects.indexOf(project) === -1){
          uniqueProjects.push(project)
        }
      })
      return uniqueProjects;
    }
    const getColor=(project)=>{
      let projectColor = '';
      list.forEach((item)=>(item.project===project)? projectColor = item.color: item.color)
      return projectColor;
    }



    return {
      list,
      getProjects,
      addItem,
      deleteItem,
      getColor,
      setBGColor,
    };
  };
  
  module.exports = toDoList;