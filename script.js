"use strict";

window.addEventListener("load", initApp);

async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    data.sort((a, b) => a.dexindex - b.dexindex);
    return data;
}

async function initApp() {
    const grid = document.getElementById('grid');
    const itemDetails = document.getElementById('item-details');
    const itemText = document.getElementById('item-text');
    var image = document.getElementById("curImage");
    var popup = document.getElementById("popup");
    var mainPop = document.getElementById("mainPop");
    var img = document.getElementById("popupimg");
    var foot = document.getElementById("popupfoot");

    try {
        const pokemons = await getData('https://cederdorff.github.io/dat-js/05-data/pokemons.json');
        pokemons.forEach(name => {
            const listItem = document.createElement('li');
            listItem.className = 'grid-item';
            const heading = document.createElement('h2');
            heading.textContent = name.name;

            listItem.addEventListener('mouseover', () => {
                itemDetails.style.display = 'block';
                itemText.textContent = `${name.dexindex} ${name.name[0].toUpperCase()}${name.name.substring(1)}`;
                image.src = name.image;
            });

            listItem.addEventListener('mouseout', () => {
                itemDetails.style.display = 'none';
            });

            listItem.addEventListener('click', () => {
                mainPop.style.display = 'block';
                itemDetails.style.display = 'block';
                img.src = name.image;
                const temp = `${name.description}<br>Abilities: ${name.ability}<br>Type and Subtype: ${name.type} ${name.subtype}<br>Weaknesses: ${name.weaknesses}<br>Gender: ${name.gender}<br>Weight(g):  ${name.weight} and Height(cm): ${name.height} <br>Generation:  ${name.generation}  <br>Game version:  ${name.spilversion} <br>Can evolve: ${name.canEvolve}<br>statsHP: ${name.statsHP}    statsAttack: ${name.statsAttack}  <br>statsDefence: ${name.statsDefence}   statsSpeed: ${name.statsSpeed}   <br>statsSpecialDefence: ${name.statsSpecialDefence}   statsSpecialAttack: ${name.statsSpecialAttack}`;

                document.getElementById("popuph").innerHTML = `${name.dexindex} ${name.name[0].toUpperCase()}${name.name.substring(1)}`;
                document.getElementById("popupp").innerHTML = temp;
                foot.src = name.footprint;

                popup.addEventListener('mouseout', () => {
                    mainPop.style.display = 'none';
                });
            });

            listItem.appendChild(heading);
            grid.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching JSON: ', error);
    }
}