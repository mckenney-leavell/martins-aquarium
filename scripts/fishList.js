import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = `<h2 class="list-header">Fish</h2>`;
    for (const fish of database.fish) {
        fishHTML += `
            <article class="fish">
                <img src="${fish.image}" alt="${fish.image} poster" class="fish__image">
                    <div class="fish__details">
                    <h2 class="fish__name">${fish.name}</h2>
                    <p class="fish__species">${fish.species}</p>
                    <p class="fish__location">${fish.location}</p>
                    <p class="fish__diet">${fish.diet}</p>
               </div>
            </article>   
        `
    }
    return fishHTML
};