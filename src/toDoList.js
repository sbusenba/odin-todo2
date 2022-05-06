const toDoList = () => {
    const list = new Array(0);
    const addItem = (item) => {
      list.push(item)
    };
    const deleteItem = (index)=>{
      list.splice(index,1);
    }
    
    return {
      list,
      addItem,
      deleteItem,
    };
  };
  
  module.exports = toDoList;