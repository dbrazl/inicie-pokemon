import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { NgFor } from '@angular/common';
import { TOP_10_POKEMONS } from 'src/mocks/top10Pokemons';
import { IPokemon } from 'src/models/Pokemon';

@Component({
  standalone: true,
  selector: 'app-triple-pokemon-slider',
  templateUrl: './triple-pokemon-slider.component.html',
  styleUrls: ['./triple-pokemon-slider.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [PokemonCardComponent, NgFor]
})
export class TriplePokemonSliderComponent {
  @ViewChild('swiperContainer') swiperContainer?: any;
  pokemons: IPokemon[] = TOP_10_POKEMONS;

  nextSlide() {
    this.swiperContainer?.nativeElement?.swiper?.slideNext();
  }

  prevSlide() {
    this.swiperContainer?.nativeElement?.swiper?.slidePrev();
  }
}
