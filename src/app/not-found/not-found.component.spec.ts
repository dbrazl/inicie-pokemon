import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent]
    });
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Not Found Component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a image', () => {
    const image: HTMLImageElement = fixture.nativeElement.querySelector('#image');
    expect(image).toBeTruthy();
  });

  it('should have a title', () => {
    const title: HTMLTitleElement = fixture.nativeElement.querySelector('#title');
    expect(title).toBeTruthy();
  });

  it('should have a message', () => {
    const message: HTMLSpanElement = fixture.nativeElement.querySelector('#message');
    expect(message).toBeTruthy();
  });

  it('should have a back button', () => {
    const button: HTMLAnchorElement = fixture.nativeElement.querySelector('#button');
    expect(button).toBeTruthy();
    expect(button.textContent).toEqual('Voltar');
  });
});
