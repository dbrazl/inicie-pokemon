import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';

describe('HomeComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        SearchInputComponent
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the Home', () => {
    expect(component).toBeTruthy();
  });

  it('should have a logo', () => {
    const logo: HTMLImageElement = fixture.nativeElement.querySelector('img#logo');
    expect(logo).toBeTruthy();
  });

  it('should have a title', () => {
    const title: HTMLTitleElement = fixture.nativeElement.querySelector('h1#title');
    expect(title).toBeTruthy();
    expect(title.textContent).toEqual('Explore o mundo dos Pokémons');
  })

  it('should have a description', () => {
    const description: HTMLSpanElement = fixture.nativeElement.querySelector('span#description');
    expect(description).toBeTruthy();
    expect(description.textContent).toEqual('Descubra todas as espécies de Pokémons');
  })

  it('should have a input to search pokemons', () => {
    const inputContainer: HTMLDivElement = fixture.nativeElement.querySelector('#search-input');
    expect(inputContainer).toBeTruthy();
  })
});
