var 
  idValue = 898,
  upBtn = document.getElementById('up'),
  downBtn = document.getElementById('down'),
  main = document.getElementById('main')
;
upBtn.addEventListener('click', () => idValue++);
downBtn.addEventListener('click', () => idValue > 1 ? idValue-- : 1);

window.onload = pullData();
[upBtn, downBtn].forEach(e => e.addEventListener('click', () => {
  pullData();
}));

function pullData() {
  const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: idValue,
  }

  const {url, type, id} = apiData;

  const apiUrl = `${url}${type}/${id}`

  fetch(apiUrl)
    .then((data) => data.json())
    .then((pokemon) => generateHTML(pokemon));
}

const generateHTML = (data) => {
  console.log(data)
  const name = data.name;
  const imageURL = data.sprites.front_default;
  const height = data.height;
  const weight = data.weight;

  const content = `
    <h1 class="pokemon_name">${name}</h1>
    <img src=${imageURL} class="pokemon_image">
    <div class="pokemon_details">
      <div class="pokemon_height">Height: ${height}</div>
      <div class="pokemon_weight">Weight: ${weight}</div>
    </div>
  `

  main.innerHTML = content;
}