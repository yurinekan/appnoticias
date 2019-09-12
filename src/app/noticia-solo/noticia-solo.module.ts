import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoticiaSoloPage } from './noticia-solo.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiaSoloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoticiaSoloPage]
})
export class NoticiaSoloPageModule {}
