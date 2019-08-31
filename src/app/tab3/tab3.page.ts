import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  nome = '';
  bulb = false;
  constructor() { }

  ngOnInit() {
  }
  darkMode() {
    this.bulb = !this.bulb;
    if (this.bulb === true) {
      console.log('darkmode');
    } else {
      console.log('lightmode');
    }
  }
  nomeFunc() {
    console.log(this.nome);
  }
}
