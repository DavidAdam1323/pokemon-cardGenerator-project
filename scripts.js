// Pokemon Card Generator; Fetch Data...

const url = " https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getPokeData = () => {
  // Generate a random number between 1 and 150;
  let id = Math.floor(Math.random() * 150) + 1;
  console.log(id);

  // Combine the PokeAPI url with Pokemon id;
  const finalUrl = url + id;
  console.log(finalUrl);

  // Fetch generated URL;
  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      generateCard(data);
      // console.log(data);
    });
};

// Generate Card;
let generateCard = (data) => {
  // Get the necessary data and asign it to variables;
  console.log(data);
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default;
  const pokeName = data.name;
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  card.innerHTML = `
  <p class="hp">
    <span>HP</span>
    ${hp}
  </p>
  <img src=${imgSrc} alt="Pokemon Image" />
  <h2 class="poke-name">${pokeName}</h2>
  <div class="types">
    <span>type 1</span>
    <span>type 2</span>
  </div>
  <div class="stats">
    <div>
      <h3>${statAttack}</h3>
      <p>Attack</p>
    </div>
    <div>
      <h3>${statDefense}</h3>
      <p>Defense</p>
    </div>
    <div>
      <h3>${statSpeed}</h3>
      <p>Speed</p>
    </div>
  </div>
  `;
};

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
