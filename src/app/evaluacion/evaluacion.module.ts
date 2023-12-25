// evaluacion.module.ts

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EvaluacionPage } from './evaluacion.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: EvaluacionPage }]),
  ],
  declarations: [EvaluacionPage]
})
export class EvaluacionPageModule {}
