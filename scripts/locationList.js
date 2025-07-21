import { database } from './aquariumData.js';

export const locationList = () => {
    let locationHTML = `<h2 class="list-header">Locations</h2>`;

    for (const location of database.locations) {
        locationHTML += `
        <article class="locations">
                <section class="location">
                    <p>Name: ${location.name}</p>
                    <p>Country: ${location.country}</p>
                    <p>Description: ${location.description}</p>
               </section>
        </article>  
        `
    }

    return locationHTML
}