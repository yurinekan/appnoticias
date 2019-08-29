import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

 nome = '';

  constructor() {}

  ngOnInit() {
  }
  darkMode() {
    console.log('darkmode');
  }
  nomeFunc() {
    console.log(this.nome);
  }
}
