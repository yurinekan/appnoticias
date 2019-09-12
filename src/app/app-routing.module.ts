import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'noticias', loadChildren: './noticias/noticias.module#NoticiasPageModule' },
  { path: 'noticia-solo', loadChildren: './noticia-solo/noticia-solo.module#NoticiaSoloPageModule' },
  { path: 'noticia-solo-dark', loadChildren: './noticia-solo-dark/noticia-solo-dark.module#NoticiaSoloDarkPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
