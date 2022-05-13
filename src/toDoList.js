const toDoList = () => {
    const list = new Array(0);
    const addItem = (item) => {
      list.push(item)
    };
    const deleteItem = (index)=>{
      list.splice(index,1);
    }

    const getProjects = ()=>{
      let projects = list.map((listItem)=> listItem.project)
      return projects;
    }
    return {
      list,
      getProjects,
      addItem,
      deleteItem,
    };
  };
  
  module.exports = toDoList;