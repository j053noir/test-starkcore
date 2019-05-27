import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatSlideToggleModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatSlideToggleModule,
  ],

  exports: [
    MatSlideToggleModule,
  ],
})
export class MaterialModule {}
