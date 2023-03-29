"use strict";

window.addEventListener("load", initApp);

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
        const response = await fetch('https://cederdorff.github.io/dat-js/05-data/pokemons.json');
        const data = await response.json();
        data.sort((a, b) => a.dexindex - b.dexindex);

        data.forEach(name => {
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
                const temp = `123`;

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