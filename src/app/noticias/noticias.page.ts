import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  data: any;
  constructor(private noticiaService: NoticiasService) { }

  ngOnInit() {
    this.noticiaService
    .getData('top-headlines?country=br')
    .subscribe(dados => {
      console.log(dados);
      this.data = dados;
    });
  }
}
