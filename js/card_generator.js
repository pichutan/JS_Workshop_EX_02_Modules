/**
 * Generates an HTML string for a list of cards displaying algorithm information.
 * @param {Array<Object>} data - Array of objects representing the algorithm details.
 * @returns {string} HTML string containing the generated cards.
 */
export function createCard(data) {
  let html = '';
  data.forEach((object, i) => {
    let { title, description, time_complexity, space_complexity, type } = object;
    html += `<div class="card mb-4" style="width: 18rem;" id="card-${i}">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text" style="min-height: 200px">${description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Time complexity: ${time_complexity}</li>
                <li class="list-group-item">space complexity: ${space_complexity}</li>
                <li class="list-group-item" id="measure-time">Time: 0</li>
            </ul>
            <div class="card-body d-grid gap-2">
                <a href="#" class="btn btn-primary measure" data-sort-type="${type}">Measure</a>
            </div>
        </div>`
  });
  return html
}

