// import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { renderLocations, renderTips } from './data-render.js'
import { mostHolyFish, soldierFish, regularFish } from './fishFilter.js'

// Generate the fish list
// const fishHTML = fishList()
// renderFish(fishHTML)

// Generate the care tips
const tipHTML = tipList()
renderTips(tipHTML)

// Generate the location list
const locationHTML = locationList()
renderLocations(locationHTML)

//fish filter section: comment out fishHTML code above

//import functions from fishFilter.js

//invoke fish filter functions and store generated strings into variables
const holyFishHTML = mostHolyFish();
const swordFishHTML = soldierFish();
const unworthyFishHTML = regularFish();

const allFish = holyFishHTML + swordFishHTML + unworthyFishHTML

const fishContainer = document.querySelector("#fishList")


//update the DOM with the 3 HTML strings. Can use interpolation for this -- domReference.innerHTML = `${string1}${string2}${string3}`

const renderHTMLToDom = (htmlToRender, whereToRender) => {
    whereToRender.innerHTML = htmlToRender
}

renderHTMLToDom(allFish, fishContainer)