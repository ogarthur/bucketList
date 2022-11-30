import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationService {
  MatchPassword(password: string, confirmPassword: string) {
    return (controls: AbstractControl) => {
      const passwordControl = controls.get(password);
      const confirmPasswordControl = controls.get(confirmPassword);

      if (passwordControl && confirmPasswordControl) {
        if (passwordControl.value !== confirmPasswordControl.value) {
          return confirmPasswordControl.setErrors({ passwordMismatch: true });
        } else {
          return confirmPasswordControl.setErrors(null);
        }
      }
    };
  }
}
