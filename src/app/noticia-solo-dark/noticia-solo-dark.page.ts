import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-noticia-solo-dark',
  templateUrl: './noticia-solo-dark.page.html',
  styleUrls: ['./noticia-solo-dark.page.scss'],
})
export class NoticiaSoloDarkPage implements OnInit {

  constructor(public noticiaService: NoticiasService) { }
  article;

  ngOnInit() {
    this.article = this.noticiaService.umArtigo;
    console.log(this.noticiaService.umArtigo);
  }
}
