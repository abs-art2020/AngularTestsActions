import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return name clicked',() =>{
   
   let com = new LoginComponent();
   com.nameProp = 'hello';
   com.OnSubmitLoginForm();
   expect(com.nameProp).toEqual('hello');
  })
  it('should return password when button clicked',()=>{
    let com = new LoginComponent();
    com.passwordProp = 'hello';
    //com.OnSubmitLoginForm();
    expect(com.passwordProp).toEqual('hello');
  })
  it(`should have logintitle as 'Login'`,()=>{
    let com = new LoginComponent();
    expect(com.loginTitle).toEqual('Login');
  })
});
