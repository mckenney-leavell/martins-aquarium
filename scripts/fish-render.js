export const renderFish = (fishHTML) => {
   const fishList = document.getElementById('fish-list');

   if (fishList) {
       fishList.innerHTML = fishHTML;
   } else {
       console.error('Could not find element with id "fish-list"');
   }
};