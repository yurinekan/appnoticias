import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
@Component({
  selector: 'app-noticia-solo',
  templateUrl: './noticia-solo.page.html',
  styleUrls: ['./noticia-solo.page.scss'],
})
export class NoticiaSoloPage implements OnInit {
  constructor( public noticiaService: NoticiasService ) { }
article;
  ngOnInit() {
    this.article = this.noticiaService.umArtigo;
    console.log(this.noticiaService.umArtigo);
  }
}
