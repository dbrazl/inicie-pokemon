import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { NgFor, NgIf } from '@angular/common';
import { TOP_10_POKEMONS } from 'src/mocks/top10Pokemons';
import { IPokemon } from 'src/models/Pokemon';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-pokemon-list-slider',
  templateUrl: './pokemon-list-slider.component.html',
  styleUrls: ['./pokemon-list-slider.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    PokemonCardComponent,
    NgFor,
    NgIf,
    RouterModule
  ]
})
export class PokemonListSliderComponent implements OnInit {
  @ViewChild('swiperContainer') swiperContainer?: any;
  pokemons: IPokemon[] = TOP_10_POKEMONS;
  isDesktop: boolean = window.innerWidth >= 1360;

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 1360;
    });
  }

  nextSlide() {
    this.swiperContainer?.nativeElement?.swiper?.slideNext();
  }

  prevSlide() {
    this.swiperContainer?.nativeElement?.swiper?.slidePrev();
  }
}
