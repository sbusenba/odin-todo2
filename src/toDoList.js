const toDoList = () => {
    const list = new Array(0);
    const addItem = (item) => {
      

      
      list.push(item)
    
    };
  
    return {
      list,
      addItem,
    };
  };
  
  module.exports = toDoList;