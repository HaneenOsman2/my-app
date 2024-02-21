// import { map } from 'rxjs';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  show: boolean = false;
  errorss!: FormControl;

  constructor(private formbuilder: FormBuilder) { }

  // registerForm: FormGroup = new FormGroup({
  //   name: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
  //   // name: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50), this.customValidator('name')]),
  //   email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  //   password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]/)]),
  //   confirmPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]/)]),
  //   phone: new FormControl(null, [Validators.required, Validators.pattern(/^(01)[0125][0-9]{8}$/)]),
  //   // err:new FormControl(null)

  // }, this.validatorPassword)

  registerForm: FormGroup = this.formbuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    phone: ['', Validators.required],

  }, this.validatorPassword)



  ngOnInit(): void {
    // console.log(this.registerForm);
  }
  validatorPassword(fg: any) {
    return fg.get('password')?.value == fg.get('confirmPassword')?.value ? null : { 'mismatch': true }

  }

  registerSubmit() {
    console.log(this.registerForm);
  }

  showOrHidePassword() {
    this.show = !this.show
  }

  onInputChange(controlName: string) {
    this.registerForm.setValidators(this.customValidator(controlName))
  }

  customValidator(controlName: string): ValidatorFn | null {

    return (group: FormGroup): ValidationErrors | null => {
      // const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/.test;
      // console.log(emailRegex);
      const passwordRegex = /^[A-Z]/;
      const phoneRegex = /^(01)[0125][0-9]{8}$/;

      const controls = group.controls;
      const value = controls[controlName].value;
      const emailRegex = /[a-zA-Z0-9._-]/.test(value)
      console.log('hamada', controls[controlName], value, emailRegex);

      if (value.value == '' && (value.touched || value.dirty) || value.errors?.['required']) {
        controls[controlName].setErrors({ 'required': 'input required' });
        console.log(value.value['required'], 'required');
      }


      else if (controlName == 'email') {
        console.log(controlName, value);

        console.log(value, 'email');
        controls[controlName].setErrors({ 'invalid': 'enter valid email pattern' })
        // console.log(emailRegex.test(value));



      }
      else if (emailRegex) {
        controls[controlName].setErrors({ 'invalid': 'enter valid email pattern' })
      }

      else if (value.length < 3) {
        controls[controlName].setErrors({ 'length': 'min length is 3' })
        console.log(value, 'length');
      }

      else if (controlName == 'password' && passwordRegex.test(value.value)) {
        controls[controlName].setErrors({ 'invalid': 'enter valid password pattern' })
        console.log(value, 'password');
      }

      else if (controlName == 'phone' && phoneRegex.test(value.value)) {
        controls[controlName].setErrors({ 'invalid': 'enter valid phone pattern' })
        console.log(value, 'phone');
      }

      else {
        controls[controlName].setErrors(null);
        console.log(value, 'null');
      }
      return null;
    }

  }
}

