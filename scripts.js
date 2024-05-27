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
};

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
