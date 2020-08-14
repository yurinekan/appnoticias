import { AlertController } from '@ionic/angular';
import { browser } from 'protractor';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';
import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { User } from './../../models/user';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  ig = true;
  name = 'Visitante';
  notifications;
  bulb;
  darkM;
  lightM;
  md: string;
  object;
  user: User;
  constructor(public events: Events, public themeableBrowser: ThemeableBrowser, public alertCtrl: AlertController, private storage: Storage) { }

  ngOnInit() {
    this.md = localStorage.getItem('mode');
    if (this.md === 'dark') {
      this.darkM = false;
      this.lightM = true;
      this.bulb = true;
    } else {
      this.darkM = true;
      this.lightM = false;
      this.bulb = false;
    }
      // this.nameQuest();
      this.storage.get('user').then((user) => {
        this.name = user.name
      })
      
  }
  
  showIg(){
    this.ig = !this.ig;
    console.log(this.user.getNome())
  }
  darkMode(mode) {
    this.bulb = !this.bulb;
    if (this.bulb === true) {
      console.log('darkmode');
      this.darkM = false;
      this.lightM = true;
      this.events.publish('mode:dark', mode, Date.now());
      localStorage.setItem('mode', 'dark');
    } else {
      console.log('lightmode');
      this.darkM = true;
      this.lightM = false;
      this.events.publish('mode:light', mode, Date.now());
      localStorage.setItem('mode', 'light');
    }
  }
  openInstagram() {
    const options: ThemeableBrowserOptions = {
      toolbar: {
        height: 44,
        color: '#222428ff'
      },
      title: {
        color: '#fffffff',
        showPageTitle: true,
        staticText: 'APPN'
      },
      backButton: {
        wwwImage: 'assets/icon/back.svg',
        align: 'left',
        event: 'backPressed'
    },
    forwardButton: {
        wwwImage: 'assets/icon/back.svg',
        align: 'left',
        event: 'forwardPressed'
    },
    closeButton: {
        wwwImage: 'assets/icon/back.svg',
        align: 'right',
        event: 'closePressed'
    },

    };
    const browser: ThemeableBrowserObject = this.themeableBrowser.create('https://instagram.com/yurinekan', '_self', options);
    browser.on('closePressed').subscribe(res => {
      browser.close();
    });
  }
  openFace() {
    const options: ThemeableBrowserOptions = {
      toolbar: {
        height: 44,
        color: '#222428ff'
      },
      title: {
        color: '#fffffff',
        showPageTitle: true,
        staticText: 'APPN'
      },
      backButton: {
        wwwImage: 'assets/icon/back.svg',
        align: 'left',
        event: 'backPressed'
    },
    forwardButton: {
        wwwImage: 'assets/icon/back.svg',
        align: 'left',
        event: 'forwardPressed'
    },
    closeButton: {
        wwwImage: 'assets/icon/back.svg',
        align: 'right',
        event: 'closePressed'
    },

    };
    const browser: ThemeableBrowserObject = this.themeableBrowser.create('https://pt-br.facebook.com/yurinekan', '_blank', options);
    browser.on('closePressed').subscribe(res => {
      browser.close();
    });
  }
}
