const toDoItem = () => {
    const tags = new Array(0);
    let title = "an item";
    let description = "an item on your todo list";
    let completed = false;
    let dueDate = new Date(); 
    const setTitle = (text) => title = text;
    const getTitle = () => title;
    const setDesc = (text) => description = text;
    const getDesc = () => description;
    const addTag = (newTag) => this.tags.push(newTag);
    const removeTag = (tagToRemove) =>{
        if (tags.indexOf(tagToRemove)>=0){
            tags.splice(tags.indexOf(tagToRemove), 1)
        }
    }
    const isCompleted= ()=>completed;
    const getTags = ()=> tags;
    const setTags = (t) => tags = t;
    return {
      setTitle,
      getTitle,
      setDesc,
      getDesc,
      addTag, 
      getTags,
      setTags,
      isCompleted,
      removeTag,
    };
  };
  
  module.exports = toDoItem;