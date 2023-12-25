import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivelMedioAltoPageRoutingModule } from './nivel-medio-alto-routing.module';

import { NivelMedioAltoPage } from './nivel-medio-alto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivelMedioAltoPageRoutingModule
  ],
  declarations: [NivelMedioAltoPage]
})
export class NivelMedioAltoPageModule {}
