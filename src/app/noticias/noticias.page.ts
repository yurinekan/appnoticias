import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { IonContent, Events } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  @ViewChild(IonContent, { static: true }) content: IonContent;
  data: any;
  pesquisa = '';
  hideSearch = true;
  hideAll = false;
  visible = true;
  showDarkAll = true;
  disR = false;

  constructor(private noticiaService: NoticiasService, public events: Events) {
    events.subscribe('mode:dark', (mode, time) => {
      console.log('Você está no darkmode', 'at', time);
      this.hideAll = true;
      this.showDarkAll = false;
      this.disR = true;
    });
    events.subscribe('mode:light', (mode, time) => {
      console.log('Você está no lightmode', 'at', time);
      this.hideAll = false;
      this.showDarkAll = true;
      this.disR = false;
    });
   }

  hideSearchf() {
    this.hideSearch = !this.hideSearch;
    this.visible = !this.visible;
  }

  ngOnInit() {
    this.dataBr();
  }

  scrollTop() {
    this.content.scrollToTop(1000);
  }

  dataBr() {
    this.noticiaService
      .getData(`top-headlines?country=br`)
      .subscribe(dados => {
        console.log(dados);
        this.data = dados;
      });
  }
  dataRefresh(event) {
    this.noticiaService
      .getData(`top-headlines?country=br`)
      .subscribe(dados => {
        console.log(dados);
        this.data = dados;
      });
    setTimeout(() => {
      console.log('Atualizou');
      event.target.complete();
    }, 300);
  }

  dataSearch(event) {
    this.content.scrollToTop(500);
    this.noticiaService
      .getData(`top-headlines?country=br&q=${this.pesquisa}`)
      .subscribe(dados => {
        console.log(dados);
        this.data = dados;
      });
  }
}
