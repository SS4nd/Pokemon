"use strict";
window.addEventListener("load",initApp);


function initApp(){


    //data = [
    //    {name: "Clefable",
    //    description: "Clefable is a tall, pink Pokémon with a vaguely star-shaped body. It has long, pointed ears with dark brown tips and black, oval eyes with wrinkles on either side. A curled lock of fur hangs over its forehead, much like its long, tightly curled tail. On its back is a pair of dark pink wings; each wing has three points. Its hands have three fingers each, and its feet have two clawed toes and dark pink soles.",
    //    ability: "Cute Charm, Magic Guard and Unaware",
    //    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
    //    footprint: "https://archives.bulbagarden.net/media/upload/d/d8/F0036.png",
    //    dexindex: 36,
    //    type: "Normal",
    //    subtype: "",
    //    weaknesses:  ["FIGHTING"],
    //    gender: "female",
    //    weight: 40000,
    //    height: 130,
    //    generation: 1,
    //    spilversion: "All",
    //    canEvolve: false,
    //    statsHP: 7,
    //    statsAttack: 4,
    //    statsDefence: 5,
    //    statsSpecialAttack: 5,
    //    statsSpecialDefence: 5,
    //    statsSpeed: 3},
//
    //    {name: "bbbbbb",
    //    description: "Clefable is a tall, pink Pokémon with a vaguely star-shaped body. It has long, pointed ears with dark brown tips and black, oval eyes with wrinkles on either side. A curled lock of fur hangs over its forehead, much like its long, tightly curled tail. On its back is a pair of dark pink wings; each wing has three points. Its hands have three fingers each, and its feet have two clawed toes and dark pink soles.",
    //    ability: "Cute Charm, Magic Guard and Unaware",
    //    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
    //    footprint: "https://archives.bulbagarden.net/media/upload/d/d8/F0036.png",
    //    dexindex: 136,
    //    type: "Normal",
    //    subtype: "",
    //    weaknesses:  ["FIGHTING"],
    //    gender: "female",
    //    weight: 40000,
    //    height: 130,
    //    generation: 1,
    //    spilversion: "All",
    //    canEvolve: false,
    //    statsHP: 7,
    //    statsAttack: 4,
    //    statsDefence: 5,
    //    statsSpecialAttack: 5,
    //    statsSpecialDefence: 5,
    //    statsSpeed: 3},
//
    //    {name: "aaaaaa",
    //    description: "Clefable is a tall, pink Pokémon with a vaguely star-shaped body. It has long, pointed ears with dark brown tips and black, oval eyes with wrinkles on either side. A curled lock of fur hangs over its forehead, much like its long, tightly curled tail. On its back is a pair of dark pink wings; each wing has three points. Its hands have three fingers each, and its feet have two clawed toes and dark pink soles.",
    //    ability: "Cute Charm, Magic Guard and Unaware",
    //    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
    //    footprint: "https://archives.bulbagarden.net/media/upload/d/d8/F0036.png",
    //    dexindex: 31,
    //    type: "Normal",
    //    subtype: "",
    //    weaknesses:  ["FIGHTING"],
    //    gender: "female",
    //    weight: 40000,
    //    height: 130,
    //    generation: 1,
    //    spilversion: "All",
    //    canEvolve: false,
    //    statsHP: 7,
    //    statsAttack: 4,
    //    statsDefence: 5,
    //    statsSpecialAttack: 5,
    //    statsSpecialDefence: 5,
    //    statsSpeed: 3}
    //];
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
    
    grid.addEventListener('click', event => {
      if (event.target.classList.contains('grid-item')) {
        const content = event.target.querySelector('p');
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
      }
    });


    //PULL DATA
    //array = data;

    //data.forEach(element => {
    //    element.name
    //    next = `
    //    <div id='box'>
    //      <button id='button-1'>Button</button>
    //    </div>`;
    //    document.querySelector("body").insertAdjacentHTML("beforeend",next);
    //});

}