import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CustomValidationService } from 'src/app/shared/services/customValidation/custom-validation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  matchPasswords: boolean = false;

  constructor(
    public authService: AuthService,
    public fb: FormBuilder,
    private customValidator: CustomValidationService
  ) {}

  signUp = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    },
    {
      validator: this.customValidator.MatchPassword(
        'password',
        'confirmPassword'
      ),
    }
  );

  ngOnInit() {}

  submit() {
    this.authService.SignUp(this.signUp.controls['email'].value,this.signUp.controls['password'].value)
  }

  get signUpFormControl() {
    return this.signUp.controls;
  }

  get passwordMatchError() {
    return (
      this.signUp.getError('mismatch') &&
      this.signUp.get('confirmPassword')?.touched
    );
  }
}
