import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatTabsModule],
  exports: [MatButtonModule, MatTabsModule],
})
export class MaterialModule { }
