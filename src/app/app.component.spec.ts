import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create App Component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a logo', () => {
    const logo: HTMLImageElement = fixture.nativeElement.querySelector('img#logo');
    expect(logo).toBeTruthy();
  });
});
