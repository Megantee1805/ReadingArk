import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../shared/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup
  router: Router; 
  submitError; 
  constructor(private userService: UsersService) { 
    this.loginForm = new FormGroup({ 
      email: new FormControl(''), 
      password: new FormControl('')
    })
  }

  ngOnInit() {
  }

  redirectLoggedUserToProfilePage() { 
    this.router.navigate(['/homepage'])
  }

  add() { 
    this.signInWithEmail(this.loginForm.value['email'], this.loginForm.value['password'])
  }

  signInWithEmail(email: string, password: string) {
    this.userService.signInWithEmail(email, password)
    .then(user => {
      // navigate to user profile
      this.redirectLoggedUserToProfilePage();
    })
    .catch(error => {
      this.submitError = error.message;
    });
  }

}
