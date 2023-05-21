import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PokemonComponent } from './pokemon.component';
import { PokemonTypeComponent } from '../pokemon-type/pokemon-type.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { MostWantedPokemonsComponent } from '../most-wanted-pokemons/most-wanted-pokemons.component';
import { SimplePokemonSliderComponent } from '../simple-pokemon-slider/simple-pokemon-slider.component';
import { PokemonListSliderComponent } from '../pokemon-list-slider/pokemon-list-slider.component';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PokemonComponent,
        PokemonTypeComponent,
        ProgressBarComponent,
        MostWantedPokemonsComponent
      ],
      imports: [
        RouterTestingModule,
        SimplePokemonSliderComponent,
        PokemonListSliderComponent,
      ]
    });
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Pokemon Component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the pokemon name', () => {
    const name: HTMLTitleElement = fixture.nativeElement.querySelector('#name');
    expect(name).toBeTruthy();
  });

  it('should have the pokemon code', () => {
    const code: HTMLSpanElement = fixture.nativeElement.querySelector('#code');
    expect(code).toBeTruthy();
  });

  it('should have the pokemon type', () => {
    const type: HTMLSpanElement = fixture.nativeElement.querySelector('#type');
    expect(type).toBeTruthy();
  });

  it('should have the pokemon image', () => {
    const image: HTMLImageElement = fixture.nativeElement.querySelector('#pokemon-image');
    expect(image).toBeTruthy();
  });

  it('should have the pokemon description', () => {
    const description: HTMLParagraphElement = fixture.nativeElement.querySelector('#description');
    expect(description).toBeTruthy();
  });

  it('should have the pokemon status', () => {
    const status: HTMLDivElement = fixture.nativeElement.querySelector('#status');
    const health: HTMLElement = fixture.nativeElement.querySelector('#health');
    const defense: HTMLElement = fixture.nativeElement.querySelector('#defense');
    const velocity: HTMLElement = fixture.nativeElement.querySelector('#velocity');
    const atack: HTMLElement = fixture.nativeElement.querySelector('#atack');
    expect(status).toBeTruthy();
    expect(health).toBeTruthy();
    expect(defense).toBeTruthy();
    expect(velocity).toBeTruthy();
    expect(atack).toBeTruthy();
  });

  it('should have the pokemon most wanted list', () => {
    const mostWanteds: HTMLDivElement = fixture.nativeElement.querySelector('#most-wanted-pokemon-list');
    expect(mostWanteds).toBeTruthy();
  });
});
