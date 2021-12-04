import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,RequiredValidator } from '@angular/forms';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm !: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
            lastName: ['', Validators.required],
              email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          let payload={
            firstName:this.registerForm.value.firstName,
            lastName:this.registerForm.value.lastName,
            email:this.registerForm.value.email,
            password:this.registerForm.value.password,
            service:"advance"
          }
          console.log(payload);
         
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
 

}
