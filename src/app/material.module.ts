import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatMenuModule,
  MatSlideToggleModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatMenuModule, MatSlideToggleModule],
  exports: [MatButtonModule, MatMenuModule, MatSlideToggleModule],
})
export class MaterialModule {}
