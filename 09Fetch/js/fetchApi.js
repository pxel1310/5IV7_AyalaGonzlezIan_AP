const pokeApi = "http://pokeapi.co/api/v2/";

const pokedex = () => {
  const pokemonStatsElements = {
    hp: document.getElementById("pokemonStatHp"),
    attack: document.getElementById("pokemonStatAttack"),
    defense: document.getElementById("pokemonStatDefense"),
    especialAttack: document.getElementById("pokemonStatSpecialAttack"),
    especialDefense: document.getElementById("pokemonStatSpecialDefense"),
    speed: document.getElementById("pokemonStatSpeed"),
  };

  let currentClassType = null;
  const imageTemplate = "<img class 'pokedisplay' src='{imgSrc}' alt='pokedisplay'>"

  const images = {
    imgPokemonNotFound: "./src/404.png",
    imgLoading: "./src/loading.gif",
  }

  const container = {
    imageContainer: "",
    imageTypesContainer: "",
    imageNameElement: "",
    imageAbilitieselement: "",
    image: "",
  }

  const buttons = {
    all: Array.from(document.getElementById("btn")),
    search : document.getElementById("btnSearch"),
    next: document.getElementById("btnUp"),
    previous: document.getElementById("btnDown")
  }

  const processPokemonAbilities = (pokemonData) => {
    let pokemonAbilitiesContent = "";
    pokemonData.abilities?.forEach((pokeAbility) => {
      
    });
  }
  const setLoading = ( ) => {
    container.imageContainer
  }
  cosnt setLoadingComplete = () => {
    buttons.all.forEach(button => checkDisabled(button))
  }
};
