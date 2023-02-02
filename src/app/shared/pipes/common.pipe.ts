import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'common',
})
export class CommonPipe implements PipeTransform {
  transform(value: number, multiply: string): number {
    let mul = parseFloat(multiply);
    return mul * value;
  }
}
