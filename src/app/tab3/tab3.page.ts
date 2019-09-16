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
  constructor(public events: Events) { }

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

  metodoTeste() {
    console.log('chamou');
    return '';
  }
}
