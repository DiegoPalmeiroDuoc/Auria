import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'evaluacion',
    loadChildren: () => import('./evaluacion/evaluacion.module').then( m => m.EvaluacionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'nivel-bajo',
    loadChildren: () => import('./nivel-bajo/nivel-bajo.module').then( m => m.NivelBajoPageModule)
  },
  {
    path: 'nivel-muy-bajo',
    loadChildren: () => import('./nivel-muy-bajo/nivel-muy-bajo.module').then( m => m.NivelMuyBajoPageModule)
  },
  {
    path: 'nivel-medio',
    loadChildren: () => import('./nivel-medio/nivel-medio.module').then( m => m.NivelMedioPageModule)
  },
  {
    path: 'nivel-medio-alto',
    loadChildren: () => import('./nivel-medio-alto/nivel-medio-alto.module').then( m => m.NivelMedioAltoPageModule)
  },
  {
    path: 'nivel-alto',
    loadChildren: () => import('./nivel-alto/nivel-alto.module').then( m => m.NivelAltoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
