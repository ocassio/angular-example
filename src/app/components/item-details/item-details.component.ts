import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ItemModel } from 'src/app/models/item.model';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { luhnValidator } from 'src/app/validators/luhn.validator';
import { expirationDateValidator } from 'src/app/validators/expiration-date.validator';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent {

  @Input()
  set item(value: ItemModel) {
    this.form.patchValue(value);
  }

  @Input()
  set readonly(value: boolean) {
    if (value) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Output()
  submitItem = new EventEmitter<ItemModel>();

  form: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.formBuilder.group({
      streetAddress: ['', Validators.required],
      apt: ['']
    }),
    billing: this.formBuilder.group({
      cardNumber: ['', Validators.compose([
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
        luhnValidator
      ])],
      cardType: ['', Validators.required],
      cvc: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3)
      ])],
      expiration: this.formBuilder.group({
        month: ['', Validators.required],
        year: ['', Validators.required]
      }, {
        validators: expirationDateValidator
      })
    })
  });

  get cardNumber(): AbstractControl {
    return this.form.get('billing').get('cardNumber');
  }

  constructor(private formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitItem.emit(this.form.getRawValue());
    }
  }

}
