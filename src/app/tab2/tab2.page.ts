import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  usa: any = [];
  bre = 0;
  tec: any = [];
  ent = 0;
  hlt: any = [];

  datahlt: any;
  datausa: any;
  databre: any;
  datatec: any;
  dataent: any;

  nHLT = false;
  nENT = false;
  nTEC = false;
  nUSA = false;
  nBRE = false;
  hideAll = false;

  slideOpts = {
    slidesPerView: 1,
    initialSlide: 0,
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    }
  };
  constructor(private noticiaService: NoticiasService) { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.nBRE = false;
    //   this.nUSA = false;
    //   // event.target.complete();
    // }, 350);
  }

  async appearUSA() {
    this.usa++;

    if (this.usa === 1) {
      this.noticiaService
        .getData(`top-headlines?country=us&pageSize=100`)
        .subscribe(dados => {
          console.log(dados);
          this.datausa = dados;
        });
    }
    if ( this.nBRE === false && this.nTEC === false  && this.nENT === false && this.nHLT === false) {
      this.nUSA = !this.nUSA;
    } else {
      this.nBRE = false;
      this.nTEC = false;
      this.nENT = false;
      this.nHLT = false;
      this.nUSA = !this.nUSA;
    }
  }

  appearBRE() {
    this.bre++;

    if (this.bre === 1) {
      this.noticiaService
        .getData(`top-headlines?country=br&category=sports&pageSize=100`)
        .subscribe(dados => {
          console.log(dados);
          this.databre = dados;
        });
    }
    if (this.nUSA === false && this.nTEC === false  && this.nENT === false && this.nHLT === false) {
      this.nBRE = !this.nBRE;
    } else {
      this.nUSA = false;
      this.nTEC = false;
      this.nENT = false;
      this.nHLT = false;
      this.nBRE = !this.nBRE;
    }
  }

  appearTEC() {
    this.tec++;

    if (this.tec === 1) {
      this.noticiaService
        .getData(`top-headlines?country=br&category=technology&pageSize=100`)
        .subscribe(dados => {
          console.log(dados);
          this.datatec = dados;
        });
    }
    if (this.nBRE === false && this.nUSA === false && this.nENT === false && this.nHLT === false) {
      this.nTEC = !this.nTEC;
    } else {
      this.nBRE = false;
      this.nUSA = false;
      this.nENT = false;
      this.nHLT = false;
      this.nTEC = !this.nTEC;
    }
  }

  appearENT() {
    this.ent++;

    if (this.ent === 1) {
      this.noticiaService
        .getData(`top-headlines?country=br&category=entertainment&pageSize=100`)
        .subscribe(dados => {
          console.log(dados);
          this.dataent = dados;
        });
    }
    if (this.nBRE === false && this.nUSA === false && this.nTEC === false && this.nHLT === false) {
      this.nENT = !this.nENT;
    } else {
      this.nBRE = false;
      this.nUSA = false;
      this.nTEC = false;
      this.nHLT = false;
      this.nENT = !this.nENT;
    }
  }

  appearHLT() {
    this.hlt++;

    if (this.hlt === 1) {
      this.noticiaService
        .getData(`top-headlines?country=br&category=health&pageSize=100`)
        .subscribe(dados => {
          console.log(dados);
          this.datahlt = dados;
        });
    }
    if (this.nBRE === false && this.nUSA === false && this.nTEC === false && this.nENT === false) {
      this.nHLT = !this.nHLT;
    } else {
      this.nBRE = false;
      this.nUSA = false;
      this.nTEC = false;
      this.nENT = false;
      this.nHLT = !this.nHLT;
    }
  }
}
