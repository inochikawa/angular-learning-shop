import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCurrency'
})
export class AppCurrencyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return `US $${value}`;
  }

}
