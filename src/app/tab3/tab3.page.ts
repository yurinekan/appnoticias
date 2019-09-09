import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  darkMode() {
    this.bulb = !this.bulb;
    if (this.bulb === true) {
      console.log('darkmode');
      this.darkM = false;
      this.lightM = true;
    } else {
      this.darkM = true;
      this.lightM = false;
      console.log('lightmode');
    }
  }
  nomeFunc() {
    console.log(this.nome);
  }
}
