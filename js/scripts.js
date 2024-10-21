//TODO: Import all of the important data and modules
//TODO: Render all of the cards from given data
//TODO: Add a click function to each button, that will start the measurement
// and update the cards data with the new measurement
import { createCard } from "./card_generator.js";
import { sortingAlgorithmData } from "./data.js";
import * as sorting from "./sorting_algorithm.js";

const getNewSortableArray = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i).sort((a, b) => 0.5 - Math.random());

$(document).ready(function(e) {
  let cardContainer = document.getElementsByClassName('card-container')[0];
  // Render card html to the body.
  cardContainer.innerHTML = createCard(sortingAlgorithmData);

  const card = document.querySelectorAll(".measure");

  // Iterates over each 'measure' button and attaches a click event listener
  card.forEach((element, index) => {
    element.addEventListener('click', function(e) {
      let time = document.querySelectorAll('.list-group-flush')[index].children[2];
      let sum;

      // Generates a new array of random values to sort
      const arr = getNewSortableArray(1,50000)

      // Defines the available sorting algorithms
      const sortingAlgorithms = {
        'Bubble Sort': sorting.bubbleSort,
        'Selection Sort': sorting.selectionSort,
        'Insertion Sort': sorting.insertionSort,
        'Merge Sort': sorting.mergeSort,
        'Quick Sort': sorting.quickSort,
        'Heap Sort': sorting.heapSort,
      };

      // Gets the algorithm name from the card title
      const algorithm = document.querySelectorAll('.card-title')[index].innerText;

      // If the algorithm exists in sortingAlgorithms, it runs the algorithm and measures execution time
      if (sortingAlgorithms[algorithm]) {
        const tc = new Date().getTime();
        sortingAlgorithms[algorithm](arr);
        const tu = new Date().getTime();
        sum = (tu - tc);
      }
      time.innerText = `Time: ${sum} millisecond`;
    });
  });
})

