import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NivelAltoPage } from './nivel-alto.page';

const routes: Routes = [
  {
    path: '',
    component: NivelAltoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NivelAltoPageRoutingModule {}
