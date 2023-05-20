import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SimplePokemonSliderComponent } from './simple-pokemon-slider.component';

describe('SimplePokemonSliderComponent', () => {
  let component: SimplePokemonSliderComponent;
  let fixture: ComponentFixture<SimplePokemonSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SimplePokemonSliderComponent,
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(SimplePokemonSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create simple pokemons slider', () => {
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
