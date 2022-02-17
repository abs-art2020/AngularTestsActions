import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have value as Login in router anchor tag`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const btn = fixture.debugElement.nativeElement.querySelector('#login');
    //const app = fixture.componentInstance;
    expect(btn.innerHTML).toBe('Login');
  });
  it(`should have value as SignUp in router anchor tag`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const btn = fixture.debugElement.nativeElement.querySelector('#signup');
   // const app = fixture.componentInstance;
    expect(btn.innerHTML).toBe('SignUp');
  });

});
