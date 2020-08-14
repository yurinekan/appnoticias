import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  { path: 'noticias', loadChildren: './noticias/noticias.module#NoticiasPageModule' },
  { path: 'noticia-solo', loadChildren: './noticia-solo/noticia-solo.module#NoticiaSoloPageModule' },
  { path: 'noticia-solo-dark', loadChildren: './noticia-solo-dark/noticia-solo-dark.module#NoticiaSoloDarkPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
