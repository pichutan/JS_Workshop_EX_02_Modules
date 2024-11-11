import { createCard } from "./card_generator.js"
import { sortingAlgorithmData } from "./data.js"
import { performanceSort } from './sorting_algorithm.js'
const getNewSortableArray = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i).sort((a, b) => 0.5 - Math.random());
const renderCards = () => {
  const cardContainer = document.getElementById("cardContainer");
  if (!cardContainer) return;
  let cardsHTML = "";
  for (let i = 0; i < sortingAlgorithmData.length; i++) {
    cardsHTML += createCard(sortingAlgorithmData[i]);
  }
  cardContainer.insertAdjacentHTML('beforeend', cardsHTML);
}

document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  const sortableArray = getNewSortableArray(1, 5000);
  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('btn-Measure')) {
      const sortName = evt.target.dataset.sortName;
      const card = evt.target.closest('.card');
      card.querySelector('.timeSort').innerText = performanceSort(sortName, sortableArray);
    }
  });
})