import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { renderFish, renderLocations, renderTips } from './data-render.js'

// Generate the fish list
const fishHTML = fishList()
renderFish(fishHTML)

// Generate the care tips
const tipHTML = tipList()
renderTips(tipHTML)

// Generate the location list
const locationHTML = locationList()
renderLocations(locationHTML)

// Render each HTML string to the correct DOM element
