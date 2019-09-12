import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoticiaSoloDarkPage } from './noticia-solo-dark.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiaSoloDarkPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoticiaSoloDarkPage]
})
export class NoticiaSoloDarkPageModule {}
