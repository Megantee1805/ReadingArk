import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/homepage',
      icon: 'home'
    },
    {
      title: 'Inbox',
      url: '/inbox',
      icon: 'mail'
    },
    {
      title: 'Favorites',
      url: '/saved-stories',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/archive',
      icon: 'archive'
    },
    {
      title: 'Account',
      url: '/account',
      icon: 'person'
    },
    {
      title: 'Support',
      url: '/support',
      icon: 'help-circle'
    }
  ]; 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
