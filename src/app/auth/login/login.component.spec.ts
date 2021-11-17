import { AuthService } from './../auth.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthModule } from '../auth.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ITwoFactoryInterface } from 'projects/academy/src/lib/two-factory/two-factory.interface';

interface IFormValue {
  email: string;
  password: string;
  twoFactory: ITwoFactoryInterface;
}

function fillForm(fixture: ComponentFixture<LoginComponent>, value: IFormValue) {
  const form = fixture.componentInstance.formGroup;
  const email = form?.get('email');
  const password = form?.get('password');
  const twoFactory = form?.get('twoFactory');
  email?.setValue(value.email);
  password?.setValue(value.password);
  twoFactory?.setValue(value.twoFactory);
}

const EMAIL = 'dummy@email.com';
const PASSWORD = 'PASSWORD';
const TWO_FA_CODE: ITwoFactoryInterface = {
  a1: '1',
  a2: '2',
  a3: '3',
  a4: '4',
  a5: '5',
  a6: '6',
};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const authServiceSpy: jasmine.SpyObj<AuthService> = jasmine.createSpyObj('AuthService', ['login']);
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthModule, NoopAnimationsModule, RouterTestingModule],
      declarations: [ LoginComponent ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('form buttons', () => {
    let buttons: DebugElement[];

    beforeEach(() => {
      buttons = fixture.debugElement.queryAll(By.css('button'));
    });

    it('should have 2 buttons', () => {
      expect(buttons.length).toBe(2);
    });

    it('should have "Register" button', () => {
      expect(buttons[1].nativeElement.textContent).toBe('Register');
    });
  });

  describe('when the form filled incorrectly', () => {
    describe('when no password provided', () => {
      it('should keep form group invalid', () => {
        fillForm(fixture, { email: EMAIL, password: 'abc', twoFactory: TWO_FA_CODE });
        expect(fixture.componentInstance.formGroup?.valid).toBeFalse();
      });
    });
  });

  describe('when the form filled correctly', () => {
    const formData = { email: EMAIL, password: PASSWORD, twoFactory: TWO_FA_CODE };

    beforeEach(() => {
      fillForm(fixture, formData);
    });

    it('should call "login" method of AuthService', () => {
      fixture.componentInstance.submit();
      expect(authService.login).toHaveBeenCalled();
      expect(authService.login).toHaveBeenCalledOnceWith({ ...formData, twoFactory: '123456' } as any);
    });
  });
});
