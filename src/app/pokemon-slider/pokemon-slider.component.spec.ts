import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSliderComponent } from './pokemon-slider.component';

describe('PokemonSliderComponent', () => {
  let component: PokemonSliderComponent;
  let fixture: ComponentFixture<PokemonSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonSliderComponent]
    });
    fixture = TestBed.createComponent(PokemonSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create pokemon slider', () => {
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
