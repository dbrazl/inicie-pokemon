import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { NgFor } from '@angular/common';
import { TOP_10_POKEMONS } from 'src/mocks/top10Pokemons';
import { IPokemon } from 'src/models/Pokemon';

@Component({
  standalone: true,
  selector: 'app-pokemon-slider',
  templateUrl: './pokemon-slider.component.html',
  styleUrls: ['./pokemon-slider.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [PokemonCardComponent, NgFor]
})
export class PokemonSliderComponent implements OnInit {
  swiperContainer: any;
  pokemons: IPokemon[] = TOP_10_POKEMONS;

  ngOnInit(): void {
    this.swiperContainer = document.querySelector('swiper-container');
  }

  nextSlide() {
    this.swiperContainer?.swiper?.slideNext();
  }

  prevSlide() {
    this.swiperContainer?.swiper?.slidePrev();
  }
}
