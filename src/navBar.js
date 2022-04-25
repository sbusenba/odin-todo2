const navBar = (navItems,selected,navItemListener) => {

    let header = document.createElement('div')
    header.classList.add('header')
    header.style.cssText =`    display:flex;
    flex-direction: column;
    justify-content: space-between;`
    let title  = document.createElement('div')
    title.classList.add('title')
    title.innerText='Malarky'
    header.appendChild(title)
    
    let navBarDiv = document.createElement('div')
    navBarDiv.classList.add('nav')
    navBarDiv.style.cssText = `display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        padding:10px;
        border:2px solid black;`
    navItems.forEach((navTextItem,index)=>{
        let navItem = document.createElement('div')
        navItem.addEventListener('click',navItemListener);
        navItem.classList.add('navItem')
        if (index != selected){
        navItem.style.cssText = `    
            border:2px solid black;
            flex:0 0 20px;
            padding:5px;
            border-radius:2px;`
        } else {
            navItem.style.cssText = `    
            border:4px solid darkgrey;
            flex:0 0 20px;
            padding:5px;
            border-radius:2px;`
        }
        navItem.innerText = navTextItem
        navBarDiv.appendChild(navItem)
    });
    header.appendChild(navBarDiv)
        return header;
    }
    export default navBar;