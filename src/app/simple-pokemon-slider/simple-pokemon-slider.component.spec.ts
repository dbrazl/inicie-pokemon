import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePokemonSliderComponent } from './simple-pokemon-slider.component';

describe('SimplePokemonSliderComponent', () => {
  let component: SimplePokemonSliderComponent;
  let fixture: ComponentFixture<SimplePokemonSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimplePokemonSliderComponent]
    });
    fixture = TestBed.createComponent(SimplePokemonSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
