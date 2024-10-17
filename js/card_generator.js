/**
 * Generates HTML for a card displaying information about a sorting algorithm.
 *
 * @param {Object} algorithm - The sorting algorithm details.
 * @param {string} algorithm.title - The title of the sorting algorithm.
 * @param {string} algorithm.description - A brief description of the sorting algorithm.
 * @param {string} algorithm.time_complexity - The time complexity of the sorting algorithm.
 * @param {string} algorithm.space_complexity - The space complexity of the sorting algorithm.
 * @param {number} algorithm.execution_time - The execution time of the sorting algorithm.
 * @returns {string} - The HTML string for the card.
 */
export const createCard = ({ title, description, time_complexity, space_complexity, execution_time }) => `
    <div class="card mb-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text" style="min-height: 200px;">${description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Time complexity: ${time_complexity}</li>
            <li class="list-group-item">Space complexity: ${space_complexity}</li>
            <li class="list-group-item execution-time">Execution Time: ${execution_time}ms</li>
        </ul>
        <div class="card-body d-grid gap-2">
            <div class="btn btn-primary measure-performance-btn" data-algorithm="${title}">Measure</div>
        </div>
    </div>
`;



