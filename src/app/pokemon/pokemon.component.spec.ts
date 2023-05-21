import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PokemonComponent } from './pokemon.component';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonComponent],
      imports: [RouterTestingModule]
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
    const description: HTMLImageElement = fixture.nativeElement.querySelector('#description');
    expect(description).toBeTruthy();
  });

  it('should have the pokemon status', () => {
    const status: HTMLDivElement = fixture.nativeElement.querySelector('#status');
    expect(status).toBeTruthy();
  });

  it('should have the pokemon most wanted list', () => {
    const mostWanteds: HTMLDivElement = fixture.nativeElement.querySelector('#most-wanted-pokemon-list');
    expect(mostWanteds).toBeTruthy();
  });
});
