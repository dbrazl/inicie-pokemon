import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});

export const endpoints = {
  pokemon: (id: string) => `/pokemon/${id}`,
  pokemonSpecies: (id: string) => `/pokemon-species/${id}`
};
