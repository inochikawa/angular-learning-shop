import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCurrencyPipe } from './pipes/app-currency.pipe';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { DangerButtonComponent } from './components/danger-button/danger-button.component';



@NgModule({
  declarations: [AppCurrencyPipe, PrimaryButtonComponent, DangerButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [AppCurrencyPipe, PrimaryButtonComponent, DangerButtonComponent]
})
export class SharedModule { }
