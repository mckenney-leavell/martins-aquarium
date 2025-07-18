import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    let fishHTML = ``;
    for (const eachFish of fish) {
        fishHTML += `
            <article class="fish">
                <img src="${eachFish.image}" alt="${fish.image} poster" class="fish__image">
                    <div class="fish__details">
                    <h2 class="fish__name">${eachFish.name}</h2>
                    <p class="fish__species">${eachFish.species}</p>
                    <p class="fish__location">${eachFish.location}</p>
                    <p class="fish__diet">${eachFish.diet}</p>
               </div>
            </article>   
        `
    }
};