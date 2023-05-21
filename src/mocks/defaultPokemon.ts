import { IPokemon } from "src/models/Pokemon";

export const DEFAULT_POKEMON: IPokemon = {
  name: 'Charizard',
  code: 6,
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ea eveniet, quia doloremque tempore itaque non! Hic voluptatibus aut incidunt, nemo rem et officiis laborum quaerat rerum, architecto dolore nam.',
  height: 170,
  weight: 90.5,
  types: ['fire', 'dragon'],
  stats: {
    health: 0,
    defense: 0,
    speed: 0,
    attack: 0
  }
};

