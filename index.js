async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemon-name")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      const wrongName = document.getElementById("wrong-name");
      wrongName.textContent = "You've Entered a WRONG PokeMon Name";
      throw new Error("could not fetch this resourseeee");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("Pokemon Sprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
    document.getElementById("wrong-name").textContent = "";
  } catch (e) {
    console.error(e);
  }
}
