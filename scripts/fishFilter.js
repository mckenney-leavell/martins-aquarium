import { fishData } from './aquariumData.js'


//display fish that have length divisible by 3
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = `<h2 class=list-header>Fish</h2>`
    // iterate through fishData.fish
    for (const fish of fishData) {
        //find fish with length that is divisible by 3
        if (fish.length % 3 === 0) {
            // use HTML from fish list module and push into holyFish string
            holyFish += `
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
    }

    return holyFish
}

//display fish that have length divisible by 5
export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let swordFish = ""
    // iterate through fishData.fish
    for (const fish of fishData) {
        //find fish with length that is divisible by 5
        if (fish.length % 5 === 0) {
            // use HTML from fish list module and push into swordFish string
            swordFish += `
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
    }
    
    return swordFish
}

//display all other fish
export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
        let otherFish = ""
    // iterate through fishData.fish
    for (const fish of fishData) {
            if (fish.length % 5 !== 0) && (fish.length % 3 !== 0) {
            otherFish += `
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
        }
    
    return otherFish
}