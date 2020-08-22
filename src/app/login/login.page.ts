import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup
  constructor() { 
    this.loginForm = new FormGroup({ 
      email: new FormControl(''), 
      password: new FormControl('')
    })
  }

  ngOnInit() {
  }

}
