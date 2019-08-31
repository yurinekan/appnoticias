import { Component, OnInit, DefaultIterableDiffer } from '@angular/core';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  data: any;
  pesquisa = '';
  hideSearch = true;
  hideContent = true;
  visible = true;
  constructor(private noticiaService: NoticiasService) { }

  hideSearchf() {
    this.hideSearch = !this.hideSearch;
    this.visible = !this.visible;
  }

  ngOnInit() {
    this.dataBr();
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
      console.log('End');
      event.target.complete();
    }, 300);
  }

  dataSearch(event) {
    this.noticiaService
    .getData(`top-headlines?country=br&q=${this.pesquisa}`)
    .subscribe(dados => {
      console.log(dados);
      this.data = dados;
    });
    setTimeout(() => {
      console.log('End');
      event.target.complete();
    });
  }
}
