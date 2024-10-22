//TODO: Create a function that takes some data and returns a visual representation of a bootstrap 5 card
//The example card can be found in the index.html file
//You should use techniques you learned in the workshop to create the card
export default function createCard(data) {
  let cardTemplate = "";
  data.forEach((item) => {
    cardTemplate += `
      <div class="card" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">Time complexity: ${item.time_complexity}</li>
              <li class="list-group-item">space complexity: ${item.space_complexity}</li>
              <li class="list-group-item" id="card_${item.id}">Time: 123456</li>
          </ul>
          <div id="button_${item.id}" class="card-body d-grid gap-2">
              <a href="#" class="btn btn-primary">Measure</a>
          </div>
      </div>
    `
  });
  return cardTemplate
}

