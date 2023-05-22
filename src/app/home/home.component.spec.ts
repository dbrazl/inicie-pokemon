import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { HomeComponent } from './home.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { TriplePokemonSliderComponent } from '../triple-pokemon-slider/triple-pokemon-slider.component';
import { PokemonListSliderComponent } from '../pokemon-list-slider/pokemon-list-slider.component';
import { SimplePokemonSliderComponent } from '../simple-pokemon-slider/simple-pokemon-slider.component';
import { MostWantedPokemonsComponent } from '../most-wanted-pokemons/most-wanted-pokemons.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PokemonCardComponent,
        TriplePokemonSliderComponent,
        SimplePokemonSliderComponent,
        PokemonListSliderComponent,
        ToastrModule.forRoot()
      ],
      declarations: [
        HomeComponent,
        SearchInputComponent,
        MostWantedPokemonsComponent
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create the Home', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const title: HTMLTitleElement = fixture.nativeElement.querySelector('h1#title');
    expect(title).toBeTruthy();
    expect(title.textContent).toEqual('Explore o mundo dos Pokémons');
  })

  it('should have a description', () => {
    const description: HTMLSpanElement = fixture.nativeElement.querySelector('span#description');
    expect(description).toBeTruthy();
    expect(description.textContent).toEqual('Descubra todas as espécies de Pokémons');
  })

  it('should have a input to search pokemons', () => {
    const inputContainer: HTMLDivElement = fixture.nativeElement.querySelector('#search-input');
    expect(inputContainer).toBeTruthy();
  })

  it('should have a pokemon slider', () => {
    const pokemonsSlider: HTMLElement = fixture.nativeElement.querySelector('#pokemon-slider');
    expect(pokemonsSlider).toBeTruthy();
  })

  it('should have a laptop banner', () => {
    const laptopBanner: HTMLImageElement = fixture.nativeElement.querySelector('#laptop-banner');
    expect(laptopBanner).toBeTruthy();
  })

  it('should have a most wanted pokemon list', () => {
    const section: HTMLElement = fixture.nativeElement.querySelector('#most-wanted');
    expect(section).toBeTruthy();
  })
});
