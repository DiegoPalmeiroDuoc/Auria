import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivelAltoPageRoutingModule } from './nivel-alto-routing.module';

import { NivelAltoPage } from './nivel-alto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivelAltoPageRoutingModule
  ],
  declarations: [NivelAltoPage]
})
export class NivelAltoPageModule {}
