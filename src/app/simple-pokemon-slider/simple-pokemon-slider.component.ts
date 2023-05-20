import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { TOP_10_POKEMONS } from 'src/mocks/top10Pokemons';
import { IPokemon } from 'src/models/Pokemon';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-simple-pokemon-slider',
  templateUrl: './simple-pokemon-slider.component.html',
  styleUrls: ['./simple-pokemon-slider.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    PokemonCardComponent,
    NgFor,
    NgIf
  ]
})
export class SimplePokemonSliderComponent implements OnInit {
  swiperContainer: any;
  pokemons: IPokemon[] = TOP_10_POKEMONS;
  @Input() animate: boolean = false;

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
