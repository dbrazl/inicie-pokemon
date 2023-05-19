import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriplePokemonSliderComponent } from './triple-pokemon-slider.component';

describe('TriplePokemonSliderComponent', () => {
  let component: TriplePokemonSliderComponent;
  let fixture: ComponentFixture<TriplePokemonSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TriplePokemonSliderComponent]
    });
    fixture = TestBed.createComponent(TriplePokemonSliderComponent);
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
