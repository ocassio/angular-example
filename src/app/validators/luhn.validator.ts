import { AbstractControl } from '@angular/forms';
import luhn from "luhn";

export function luhnValidator(control: AbstractControl): {[key: string]: any} | null {
  const valid = luhn.validate(control.value);
  if (!valid) {
    return {
      luhn: true
    };
  }
  return null;
}
