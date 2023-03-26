"use strict";
window.addEventListener("load",initApp);


function initApp(){
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hank', 'Ivy', 'Julia'];

    const grid = document.getElementById('grid');
    
    names.forEach(name => {
      const listItem = document.createElement('li');
      listItem.className = 'grid-item';
      
      const heading = document.createElement('h2');
      heading.textContent = name;
      
      listItem.appendChild(heading);
      
      grid.appendChild(listItem);
    });
    
}