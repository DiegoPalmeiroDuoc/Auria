import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivelMuyBajoPageRoutingModule } from './nivel-muy-bajo-routing.module';

import { NivelMuyBajoPage } from './nivel-muy-bajo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivelMuyBajoPageRoutingModule
  ],
  declarations: [NivelMuyBajoPage]
})
export class NivelMuyBajoPageModule {}
