import { database } from './aquariumData.js';

export const tipList = () => {
    let tipHTML = ``;

    for (const tip of database.tips) {
        tipHTML += `
        <article class="fish__tips">
                <ul class="tips">
                    <li class="tip__topic">${tip.topic}</li>
                    <li class="tip__text">${tip.text}</li>
               </ul>
        </article>  
        `
    }

    return tipHTML
}