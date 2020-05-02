import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser/ngx';
@Component({
  selector: 'app-noticia-solo',
  templateUrl: './noticia-solo.page.html',
  styleUrls: ['./noticia-solo.page.scss'],
})
export class NoticiaSoloPage implements OnInit {
  constructor( public noticiaService: NoticiasService, public themeableBrowser: ThemeableBrowser ) { }
article;
  ngOnInit() {
    this.article = this.noticiaService.umArtigo;
    console.log(this.noticiaService.umArtigo);
  }
  openArticle() {
    const options: ThemeableBrowserOptions = {
      toolbar: {
        height: 44,
        color: '#222428ff'
      },
      title: {
        color: '#fffffff',
        showPageTitle: true,
        staticText: 'APPN'
      },
      backButton: {
        wwwImage: 'assets/icon/back.svg',
        align: 'left',
        event: 'backPressed'
    },
    forwardButton: {
        wwwImage: 'assets/icon/back.svg',
        align: 'left',
        event: 'forwardPressed'
    },
    closeButton: {
        wwwImage: 'assets/icon/back.svg',
        align: 'right',
        event: 'closePressed'
    },

    };
    const browser: ThemeableBrowserObject = this.themeableBrowser.create(`${this.article.url}`, '_blank', options);
    browser.on('closePressed').subscribe(res => {
      browser.close();
    });
  }
}
