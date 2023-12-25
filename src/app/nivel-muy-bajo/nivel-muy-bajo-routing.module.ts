import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NivelMuyBajoPage } from './nivel-muy-bajo.page';

const routes: Routes = [
  {
    path: '',
    component: NivelMuyBajoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NivelMuyBajoPageRoutingModule {}
