import { createCard } from './card_generator.js';
import { sortingAlgorithmData } from './data.js';
import * as sortingAlgorithmFunctions from './sorting_algorithm.js';

/**
 * Generates a new array of integers from min to max, shuffled randomly.
 * @param {number} min - The minimum value in the array.
 * @param {number} max - The maximum value in the array.
 * @returns {number[]} - A shuffled array of integers.
 */
const getNewSortableArray = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i).sort((a, b) => 0.5 - Math.random());

/**
 * An object mapping sorting algorithm names to their respective functions.
 */
const sortingFunctions = {
  "Bubble Sort": sortingAlgorithmFunctions.bubbleSort,
  "Selection Sort": sortingAlgorithmFunctions.selectionSort,
  "Insertion Sort": sortingAlgorithmFunctions.insertionSort,
  "Merge Sort": sortingAlgorithmFunctions.mergeSort,
  "Quick Sort": sortingAlgorithmFunctions.quickSort,
  "Heap Sort": sortingAlgorithmFunctions.heapSort
};

/**
 * Initializes the card container with sorting algorithm cards and sets up event listeners for performance measurement buttons.
 */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('card-container');
  const sortableArray = getNewSortableArray(1, 5000)
  sortingAlgorithmData.forEach(algorithm => {
    algorithm.execution_time = 0;
    const cardHTML = createCard(algorithm);
    container.innerHTML += cardHTML;
  });

  const elements = document.getElementsByClassName('measure-performance-btn');
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (e) => {
      const algorithmName = e.target.dataset.algorithm;
      const sortingFunction = sortingFunctions[algorithmName];
      const executionTime = sortingAlgorithmFunctions.measurePerformance(sortingFunction, sortableArray);
      const card = e.target.closest('.card');
      const executionTimeElement = card.querySelector('.execution-time');
      executionTimeElement.textContent = `Execution Time: ${executionTime.toFixed(3)}ms`;
    });
  }
});