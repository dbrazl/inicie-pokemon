import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypeComponent } from './pokemon-type.component';

describe('PokemonTypeComponent', () => {
  let component: PokemonTypeComponent;
  let fixture: ComponentFixture<PokemonTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonTypeComponent]
    });
    fixture = TestBed.createComponent(PokemonTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Pokemon Type', () => {
    expect(component).toBeTruthy();
  });

  it('should have pokemon type', () => {
    const type: HTMLSpanElement = fixture.nativeElement.querySelector('#type');
    expect(type).toBeTruthy();
  });
});
