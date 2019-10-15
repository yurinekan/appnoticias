import { browser } from 'protractor';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';
import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  nome = '';
  bulb;
  darkM;
  lightM;
  md: string;
  constructor(public events: Events, public themeableBrowser: ThemeableBrowser) { }

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
  nameFunc() {
    console.log(this.nome);
  }

  openInstagram() {
    const options: ThemeableBrowserOptions = {
      toolbar: {
        height: 44,
        color: '#222428'
      },
      title: {
        color: '#fffffff',
        showPageTitle: true,
        staticText: 'Instagram'
      },
      backButton: {
        image: 'back',
        imagePressed: 'back_pressed',
        align: 'left',
        event: 'backPressed'
    },
    forwardButton: {
        image: 'forward',
        imagePressed: 'forward_pressed',
        align: 'left',
        event: 'forwardPressed'
    },
    closeButton: {
        image: 'close',
        imagePressed: 'close_pressed',
        align: 'left',
        event: 'closePressed'
    },

    };
    const browser: ThemeableBrowserObject = this.themeableBrowser.create('https://instagram.com', '_blank', options);
    browser.on('closePressed').subscribe(res => {
      browser.close();
    });
  }
}
