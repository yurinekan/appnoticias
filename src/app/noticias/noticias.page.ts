import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { IonContent } from '@ionic/angular';

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
  hideContent = false;
  visible = true;
  constructor(private noticiaService: NoticiasService) { }

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
