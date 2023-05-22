import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostWantedPokemonsComponent } from './most-wanted-pokemons.component';
import { SimplePokemonSliderComponent } from '../simple-pokemon-slider/simple-pokemon-slider.component';
import { PokemonListSliderComponent } from '../pokemon-list-slider/pokemon-list-slider.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MostWantedPokemonsComponent', () => {
  let component: MostWantedPokemonsComponent;
  let fixture: ComponentFixture<MostWantedPokemonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostWantedPokemonsComponent],
      imports: [
        SimplePokemonSliderComponent,
        PokemonListSliderComponent,
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(MostWantedPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Most Wanted Pokemons Component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a subtitle', () => {
    const subtitle: HTMLTitleElement = fixture.nativeElement.querySelector('#subtitle');
    expect(subtitle).toBeTruthy();
    expect(subtitle.textContent).toEqual('Mais procurados');
  });

  it('should have a pokemon list', () => {
    const pokemons: HTMLElement = fixture.nativeElement.querySelector('#most-wanted-pokemon-list');
    expect(pokemons).toBeTruthy();
  });
});
