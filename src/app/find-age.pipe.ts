import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findAge'
})
export class FindAgePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let currentDate: Date = new Date();
    let currentYear: number = currentDate.getFullYear();
    return value ? currentYear - Number(value) : '';
  }

}
