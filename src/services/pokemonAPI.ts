import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});

export const endpoints = {
  pokemon: (id: number) => `/pokemon/${id}`,
  pokemonSpecies: (id: number) => `/pokemon-species/${id}`
};
