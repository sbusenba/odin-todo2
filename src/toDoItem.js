const toDoItem = () => {
    const tags = new Array(0);
    let title = "an item";
    let description = "an item on your todo list";
    let completed = false;
    let dueDate = new Date(); 
    let selected = false;
    const setTitle = (text) => title = text;
    const getTitle = () => title;
    const setDesc = (text) => description = text;
    const getDesc = () => description;
    const setDate = (date) => dueDate = date;
    const getDate = () => dueDate;

    const addTag = (newTag) => this.tags.push(newTag);
    const removeTag = (tagToRemove) =>{
        if (tags.indexOf(tagToRemove)>=0){
            tags.splice(tags.indexOf(tagToRemove), 1)
        }
    }
    const isCompleted= ()=>completed;
    const setCompleted =(bool) => completed = bool;
    const getTags = ()=> tags;
    const setTags = (t) => tags = t;
    return {
      title,
      setTitle,
      getTitle,
      description,
      setDesc,
      getDesc,
      dueDate,
      setDate,
      getDate,
      tags,
      addTag, 
      getTags,
      setTags,
      completed,
      isCompleted,
      setCompleted,
      removeTag,
      selected,
    };
  };
  
  module.exports = toDoItem;