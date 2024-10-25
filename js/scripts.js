import { createCard } from "./card_generator.js";
import { sortingAlgorithmData } from "./data.js";
import * as sorting from "./sorting_algorithm.js";

$(document).ready(function() {
  let cardContainer = document.getElementById('card-container');
  const getNewSortableArray = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i).sort((a, b) => 0.5 - Math.random());

  // Defines the available sorting algorithms
  const sortingAlgorithms = {
    'bubble_sort': sorting.bubbleSort,
    'selection_sort': sorting.selectionSort,
    'insertion_sort': sorting.insertionSort,
    'merge_sort': sorting.mergeSort,
    'quick_sort': sorting.quickSort,
    'heap_sort': sorting.heapSort,
  };


  // Render card html to the body.
  cardContainer.innerHTML = createCard(sortingAlgorithmData);
  const card = document.querySelectorAll(".measure");

  // Iterates over each 'measure' button and attaches a click event listener
  card.forEach((element, index) => {
    element.addEventListener('click', function() {
      const algorithm = this.dataset.sortType;
      const arr = getNewSortableArray(1,50000)
      const cardElement = document.getElementById(`card-${index}`);
      let measureTime = cardElement.querySelector(`#measure-time`);
      let sumTime;
      // If the algorithm exists in sortingAlgorithms, it runs the algorithm and measures execution time
      if (sortingAlgorithms[algorithm]) {
        const tc = new Date().getTime();
        sortingAlgorithms[algorithm](arr);
        const tu = new Date().getTime();
        sumTime = (tu - tc);
      }
      measureTime.innerText = `Time: ${sumTime} millisecond`;
    });
  });
})

