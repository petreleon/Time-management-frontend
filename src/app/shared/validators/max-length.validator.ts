import { AbstractControl, ValidatorFn } from '@angular/forms';

export function maxLengthValidator(maxLength: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const input: string = control.value;
    if (input !== null && input.length <= maxLength) {
      return null;
    }

    return { maxLength: true };
  };
}
