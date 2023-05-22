import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchInputComponent],
      imports: [
        ToastrModule.forRoot()
      ]
    });
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create input', () => {
    expect(component).toBeTruthy();
  });

  it('should have a input', () => {
    const input = fixture.nativeElement.querySelector('input#search-input');
    expect(input).toBeTruthy();
  })

  it('should have a button', () => {
    const button = fixture.nativeElement.querySelector('button#input-search-button');
    expect(button).toBeTruthy();
    expect(button.textContent).toEqual('Buscar')
  })
});
