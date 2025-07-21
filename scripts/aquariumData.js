export const database = {
    fish: [
        {
            name: "Nemo",
            species: "Clownfish",
            length: 3,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://i0.wp.com/fishkeepingnews.com/wp-content/uploads/2020/03/Falsche_Clownfisch_Amphiprion_ocellaris.jpg?resize=800%2C445&ssl=1"
        },
        {
            name: "Dory",
            species: "Blue Tang",
            length: 5,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://www.cincinnaticoral.com/cdn/shop/products/bluehippo_1024x1024@2x.jpg?v=1585108167"
        },
                {
            name: "Mike",
            species: "Seahorse",
            length: 4,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://www.treehugger.com/thmb/fGCoMcqJcbRhPD8prjKueIjQPR4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1159240457-79e9779a466c4b6e82d188384c34142b.jpg"
        },
        {
            name: "Amy",
            species: "Rainbowfish",
            length: 15,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://static.wixstatic.com/media/a24a53_a96c116b2d9b45fe817afafcbea97d7e~mv2.jpg/v1/fill/w_740,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a24a53_a96c116b2d9b45fe817afafcbea97d7e~mv2.jpg"
        },
                {
            name: "Sarah",
            species: "Starfish",
            length: 4,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://i.guim.co.uk/img/media/a7934b611a8b0713a1c32e69a62877e76ed8c13a/0_319_5315_3189/master/5315.jpg?width=620&dpr=1&s=none&crop=none"
        },
                {
            name: "Skip",
            species: "Corydora",
            length: 6,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://cdn.shopify.com/s/files/1/0311/3149/files/corydoras_sterbai.jpg?v=1605035087"
        },
        {
    name: "Flounder",
    species: "Atlantic Flounder",
    length: 12, // divisible by 3
    location: "Atlantic Ocean",
    diet: "Carnivore",
    image: "https://example.com/images/flounder.jpg"
  },
  {
    name: "Sebastian",
    species: "Red Crab",
    length: 7,
    location: "Caribbean Sea",
    diet: "Omnivore",
    image: "https://example.com/images/sebastian.jpg"
  },
  {
    name: "Ariel",
    species: "Mermaid Fish",
    length: 20, // divisible by 5
    location: "Atlantica",
    diet: "Omnivore",
    image: "https://example.com/images/ariel.jpg"
  },
  {
    name: "Oscar",
    species: "Tiger Oscar",
    length: 9, // divisible by 3
    location: "Amazon River",
    diet: "Carnivore",
    image: "https://example.com/images/oscar.jpg"
  },
  {
    name: "Angel",
    species: "Angelfish",
    length: 10, // divisible by 5
    location: "Amazon Basin",
    diet: "Omnivore",
    image: "https://example.com/images/angel.jpg"
  },
  {
    name: "Rainbow",
    species: "Rainbow Trout",
    length: 14,
    location: "Rocky Mountains",
    diet: "Carnivore",
    image: "https://example.com/images/rainbow.jpg"
  },
  {
    name: "Goldie",
    species: "Goldfish",
    length: 18, // divisible by 3
    location: "Pet Store Tank",
    diet: "Omnivore",
    image: "https://example.com/images/goldie.jpg"
  },
  {
    name: "Spike",
    species: "Pufferfish",
    length: 25, // divisible by 5
    location: "Red Sea",
    diet: "Carnivore",
    image: "https://example.com/images/spike.jpg"
  },
  {
    name: "Luna",
    species: "Moonfish",
    length: 11,
    location: "Mediterranean Sea",
    diet: "Planktivore",
    image: "https://example.com/images/luna.jpg"
  }
    ],

    tips: [
        {
            topic: "Water Temperature",
            text: "Maintain a consistent water temperature between 75-80°F (24-27°C) for most tropical fish."
        },
        {
            topic: "Determine Your Setup",
            text: "Use the largest tank practical for your space, with a minimum size of 10 gallons."
        },
                {
            topic: "Plants",
            text: "Plants encourage natural behavior from the fish, but will require light and nutrients."
        },
        {
            topic: "Food",
            text: "Research what type of food each fish requires. Feed your fish once a day, avoiding overfeeding."
        },
    ],

    locations: [
        {
            name: "Great Barrier Reef",
            country: "Australia",
            description: "The Great Barrier Reef is the world's largest coral reef system, supporting a diverse array of marine life."
        },
        {
            name: "Chesapeake Bay",
            country: "United States",
            description: "The largest estuary in the U.S., the Chesapeake Bay, is one of the biggest brackish water bays on the planet, creating a diverse habitat consisting of tidal pools, marshes and rivers."
        },
        {
            name: "The Great African Seaforest",
            country: "South Africa",
            description: "The Great African Seaforest is home to the 'sequoias of the sea', housing sharks, abalone, lobsters, and the now famous academy award-winning octopus"
        },

    ]
}

export const fishData = structuredClone(database.fish);