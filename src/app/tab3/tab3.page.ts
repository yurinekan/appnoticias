import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  nome = '';
  bulb = false;
  darkM = true;
  lightM = false;
  constructor(public events: Events) { }

  ngOnInit() {
  }
  darkMode(mode) {
    this.bulb = !this.bulb;
    if (this.bulb === true) {
      console.log('darkmode');
      this.darkM = false;
      this.lightM = true;
      this.events.publish('mode:dark', mode, Date.now());
    } else {
      this.events.publish('mode:light', mode, Date.now());
      this.darkM = true;
      this.lightM = false;
      console.log('lightmode');
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
