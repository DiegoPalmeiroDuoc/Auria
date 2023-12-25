import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NivelBajoPage } from './nivel-bajo.page';

const routes: Routes = [
  {
    path: '',
    component: NivelBajoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NivelBajoPageRoutingModule {}
