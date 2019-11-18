import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PasswordValidator } from 'src/app/shared/validators/password.validator';
import { RegistrationService } from 'src/app/learning-platform/services/registration.service';
import { AppConstants } from 'src/assets/app_constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  get userEmail() {
    return this.registrationForm.get('email');
  }
  get fullName() {
    return this.registrationForm.get('fullName');
  }
  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService, private router: Router) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, {validator: PasswordValidator});
    if (sessionStorage.getItem(AppConstants.IS_LOGGEDIN)) {
      if (JSON.parse(sessionStorage.getItem(AppConstants.IS_LOGGEDIN))) {
        console.log('logged in');
        this.router.navigate(['/home']);
      }
    }
  }
  onSubmit() {
    console.log(this.registrationForm.value);
    this.registrationService.register(this.registrationForm.value)
    .subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }
}
