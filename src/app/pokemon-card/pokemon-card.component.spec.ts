import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardComponent } from './pokemon-card.component';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonCardComponent]
    });
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create pokemon card', () => {
    expect(component).toBeTruthy();
  });

  it('should have pokemon name', () => {
    component.name = 'Charizard';
    fixture.detectChanges();
    const name: HTMLSpanElement = fixture.nativeElement.querySelector('span#name');
    expect(name).toBeTruthy();
    expect(name.textContent).toEqual('Charizard');
  });

  it('should have pokemon code', () => {
    component.code = 6;
    fixture.detectChanges();
    const code: HTMLSpanElement = fixture.nativeElement.querySelector('span#code');
    expect(code).toBeTruthy();
    expect(code.textContent).toEqual('#6')
  });

  it('should have a pokemon image', () => {
    const image: HTMLSpanElement = fixture.nativeElement.querySelector('img#pokemon-image');
    expect(image).toBeTruthy();
  });

  it('should have pokemon height', () => {
    component.height = 170;
    fixture.detectChanges();
    const height: HTMLSpanElement = fixture.nativeElement.querySelector('span#height');
    expect(height).toBeTruthy();
    expect(height.textContent).toEqual('170cm')
  });

  it('should have pokemon weight', () => {
    component.weight = 90.5;
    fixture.detectChanges();
    const weight: HTMLSpanElement = fixture.nativeElement.querySelector('span#weight');
    expect(weight).toBeTruthy();
    expect(weight.textContent).toEqual('90.5kg')
  });
});
