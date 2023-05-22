import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DEFAULT_POKEMON } from 'src/mocks/defaultPokemon';
import { IDescription, IPokemon, IPokemonStats, IPokemonType, LanguagesAvailables, PokemonStat } from 'src/models/Pokemon';
import { api, endpoints } from 'src/services/pokemonAPI';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemon: IPokemon = DEFAULT_POKEMON;
  loading: boolean = true;

  constructor(private route: ActivatedRoute) {}

  async getPokemon(pokemonId: number): Promise<IPokemon | null> {
    try {
      const responsePokemon = await api.get(endpoints.pokemon(pokemonId));
      const {
        name,
        id,
        sprites: {
          other: {
            'official-artwork': {
              front_default,
            }
          }
        },
        height,
        weight,
        types,
        stats
      } = responsePokemon.data;

      const responseCharacteristic = await api.get(endpoints.pokemonSpecies(pokemonId));

      const {
        flavor_text_entries,
      } = responseCharacteristic.data

      function getStat(type: string): number {
        return stats.find((stats: IPokemonStats) => stats.stat.name === type)?.base_stat ?? 0;
      };

      return {
        name,
        code: id,
        image: front_default,
        description: flavor_text_entries
          .find(
            (one: IDescription) => one.language.name === LanguagesAvailables.EN
          )
          .flavor_text
          .replace('\n', '')
          .replace('\f', ''),
        height: height * 10,
        weight: weight / 10,
        types: types.map((pokemonType: IPokemonType) => pokemonType.type.name),
        stats: {
          health: getStat(PokemonStat.HEALTH),
          defense: getStat(PokemonStat.DEFENSE),
          speed: getStat(PokemonStat.SPEED),
          attack: getStat(PokemonStat.ATTACK),
        }
      }
    } catch (error) {
      return null;
    } finally {
      this.loading = false;
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(async params => {
      const id = +(params.get('id') ?? 0);

      const pokemon = await this.getPokemon(id);

      if (pokemon) {
        this.pokemon = pokemon;
      }
    });
  }
}
