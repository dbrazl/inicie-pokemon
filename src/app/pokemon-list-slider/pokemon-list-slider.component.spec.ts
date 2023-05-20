import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListSliderComponent } from './pokemon-list-slider.component';

describe('PokemonListSliderComponent', () => {
  let component: PokemonListSliderComponent;
  let fixture: ComponentFixture<PokemonListSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonListSliderComponent]
    });
    fixture = TestBed.createComponent(PokemonListSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create pokemon list slider', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 pokemons', () => {
    const pokemons: HTMLElement[] = fixture.nativeElement.querySelectorAll('#pokemon');
    expect(pokemons.length).toBe(10);
  });

  it('should have a button to back to previous pokemon', () => {
    const previousButton: HTMLButtonElement = fixture.nativeElement.querySelector('#previous-button');
    expect(previousButton).toBeTruthy();
  });

  it('should have a button to go to next pokemon', () => {
    const previousButton: HTMLButtonElement = fixture.nativeElement.querySelector('#next-button');
    expect(previousButton).toBeTruthy();
  });
});
