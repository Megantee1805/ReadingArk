import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  labels = ['Hot', 'Featured', 'New']
  changeLog; 
  constructor(private storage : Storage) { }

  ngOnInit() {
  }

  getUser() { 
    this.storage.get('email').then((val) => {
      console.log('Your email is', val);
    });
  }

  ngAfterContentInit() { 
    this.getUser()
  }

  // ngAf() {
  //   // viewChild is updated after the view has been checked
  //   this.getUser()
  // }

 

}
