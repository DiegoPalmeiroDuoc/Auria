import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivelBajoPageRoutingModule } from './nivel-bajo-routing.module';

import { NivelBajoPage } from './nivel-bajo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivelBajoPageRoutingModule
  ],
  declarations: [NivelBajoPage]
})
export class NivelBajoPageModule {}
