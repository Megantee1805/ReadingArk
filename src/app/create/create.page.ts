import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  createStoryForm: FormGroup;
  constructor() { 
    this.createStoryForm = new FormGroup ({ 
      title: new FormControl(''), 
      description: new FormControl('')
    })

  }

  ngOnInit() {
  }

}
