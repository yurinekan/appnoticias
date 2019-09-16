import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { IonContent, Events } from '@ionic/angular';
import { Router } from '@angular/router';

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
  md: string;

  constructor(public noticiaService: NoticiasService, public events: Events, private router: Router) {
    events.subscribe('mode:dark', (mode, time) => {
      console.log('Você está no darkmode', 'at', time);
      this.hideAll = true;
    });
    events.subscribe('mode:light', (mode, time) => {
      console.log('Você está no lightmode', 'at', time);
      this.hideAll = false;
    });

  }

  hideSearchf() {
    this.hideSearch = !this.hideSearch;
    this.visible = !this.visible;
  }

  ngOnInit() {
    this.md = localStorage.getItem('mode');
    if (this.md === 'dark') {
      this.hideAll = true;
    } else {
      this.hideAll = false;
    }
    this.dataBr();
  }

  scrollTop() {
    this.content.scrollToTop(500);
  }

  dataBr() {
    this.noticiaService
      .getData(`top-headlines?country=br&pageSize=100`)
      .subscribe(dados => {
        console.log(dados);
        this.data = dados;
      });
  }
  dataRefresh(event) {
    this.noticiaService
      .getData(`top-headlines?country=br&pageSize=100`)
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
      .getData(`top-headlines?country=br&pageSize=100&q=${this.pesquisa}`)
      .subscribe(dados => {
        console.log(dados);
        this.data = dados;
      });
  }

  goToArticle(article) {
    this.noticiaService.umArtigo = article;
    if (this.hideAll === false) {
      this.router.navigate(['/noticia-solo']);
    }
    if (this.hideAll === true) {
      this.router.navigate(['/noticia-solo-dark']);
    }
  }
}
