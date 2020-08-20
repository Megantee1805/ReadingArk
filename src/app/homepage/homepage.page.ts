import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  labels = ['Hot', 'Featured', 'New']
  constructor() { }

  ngOnInit() {
  }

}
