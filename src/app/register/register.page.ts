import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  submitError;
  registerForm: FormGroup 
  constructor(private userService: UsersService) { 
    this.registerForm = new FormGroup({ 
      username: new FormControl(''), 
      email : new FormControl(''), 
      password: new FormControl(''), 
      confirmPassword: new FormControl('')
    })
  }

  redirectLoggedUserToProfilePage() { 

  }

  signUpWithEmail() {
    this.userService.signUpWithEmail(this.registerForm.value['email'], this.registerForm.value['password'])
    .then(user => {
      // navigate to user profile
      this.redirectLoggedUserToProfilePage();
    })
    .catch(error => {
      this.submitError = error.message;
    });

  }

  ngOnInit() {
  }

}
