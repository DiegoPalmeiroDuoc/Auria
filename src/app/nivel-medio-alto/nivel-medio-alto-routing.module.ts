import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NivelMedioAltoPage } from './nivel-medio-alto.page';

const routes: Routes = [
  {
    path: '',
    component: NivelMedioAltoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NivelMedioAltoPageRoutingModule {}
