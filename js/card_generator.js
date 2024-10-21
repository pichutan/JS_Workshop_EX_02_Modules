//TODO: Create a function that takes some data and returns a visual representation of a bootstrap 5 card
//The example card can be found in the index.html file
//You should use techniques you learned in the workshop to create the card

export const createCard = ({ title, description, time_complexity, space_complexity}) => {
  return `
    <div class="card" style="width: 18rem">
            <div class="card-body" style="height: 15rem">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${time_complexity}</li>
                <li class="list-group-item">${space_complexity}</li>
                <li class="list-group-item">Time: <span class="timeSort"></span></li>
            </ul>
            <div class="card-body d-grid gap-2">
                <a href="#" class="btn btn-primary btn-Measure" data-name = "${title}">Measure</a>
            </div>
    </div>
  `;
}

