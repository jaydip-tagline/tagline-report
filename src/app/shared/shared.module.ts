import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonPipe } from './pipes/common.pipe';

@NgModule({
  declarations: [CommonPipe],
  imports: [CommonModule],
  exports: [CommonPipe],
})
export class SharedModule {}
