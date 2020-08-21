import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup 
  constructor() { 
    this.registerForm = new FormGroup({ 
      username: new FormControl(''), 
      email : new FormControl(''), 
      password: new FormControl('')
    })
  }

  ngOnInit() {
  }

}
