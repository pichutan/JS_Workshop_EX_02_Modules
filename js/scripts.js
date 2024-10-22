//TODO: Import all of the important data and modules
//TODO: Render all of the cards from given data
//TODO: Add a click function to each button, that will start the measurement
// and update the cards data with the new measurement
import data from "./data.js";
import createCard from "./card_generator.js";
import * as sortAlgorithm from "./sorting_algorithm.js";

const addCode = () => {
  document.getElementById("cardPlace")
      .innerHTML = createCard(data);
}

const getNewSortableArray = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i).sort((a, b) => 0.5 - Math.random());

$(document).ready(function(e) {
  addCode()
  data.forEach((element) => {
    document.getElementById(`button_${element.id}`).onclick = () => {
      const sortableArray = getNewSortableArray(1, 5000)
      const nameMethod = element.function_name
      // https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute
      const startTime = performance.now()
      sortAlgorithm[nameMethod](sortableArray)
      const endTime = performance.now()
      document.getElementById(`card_${element.id}`).innerText = `Time: ${endTime - startTime}`
    };
  });
})