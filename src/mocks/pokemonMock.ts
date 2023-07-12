export const pokemonMock = {
  pokemon: {
    name: "Pikachu",
    sprites: {
      back_shiny: "back_shiny_url",
      front_shiny: "front_shiny_url",
    },
    stats: [
      { stat: { name: "hp" }, base_stat: 80 },
      { stat: { name: "defense" }, base_stat: 80 },
      { stat: { name: "special-defense" }, base_stat: 80 },
      { stat: { name: "attack" }, base_stat: 80 },
      { stat: { name: "special-attack" }, base_stat: 80 },
      { stat: { name: "speed" }, base_stat: 90 },
    ],
  },
  loading: false,
  error: false,
};
