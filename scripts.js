// Pokemon Card Generator; Fetch Data...

const url = " https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

btn.addEventListener("click", getPokeData);
