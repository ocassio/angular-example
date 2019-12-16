import { ValidationErrors, FormGroup } from '@angular/forms';

export function expirationDateValidator(group: FormGroup): ValidationErrors | null {
  const monthCtrl = group.get('month');
  const yearCtrl = group.get('year');

  if (!monthCtrl || !yearCtrl) {
    return getError('missingControl');
  }

  if (!monthCtrl.value.trim() || !yearCtrl.value.trim()) {
    return getError('empty');
  }

  if (isNaN(monthCtrl.value) || isNaN(yearCtrl.value)) {
    return getError('notANumber');
  }

  const month = +monthCtrl.value;
  const year = +yearCtrl.value;

  const currentDate = new Date();
  const date = new Date();
  date.setFullYear(year, month - 1);

  if (currentDate >= date) {
    return getError('invalid');
  }

  return null;
}

function getError(value: string): ValidationErrors {
  return { expirationDate: value };
}
