import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  data: any;
  nUSA = false;
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
  constructor(private noticiaService: NoticiasService) {}

  ngOnInit() {
    this.noticiaService
      .getData(`top-headlines?country=us&pageSize=100`)
      .subscribe(dados => {
        console.log(dados);
        this.data = dados;
      });
    }

  appearUSA() {
    this.nUSA = !this.nUSA;
  }
}
