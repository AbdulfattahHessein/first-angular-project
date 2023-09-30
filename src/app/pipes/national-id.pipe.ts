import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalId',
})
export class NationalIdPipe implements PipeTransform {
  transform(value: string, datePart: string = 'yy-mm-dd'): string {
    let date = value.substring(1, 8);
    switch (datePart) {
      case 'yy':
        return `20${date[0]}${date[1]}`;
      case 'mm':
        return `${date[2]}${date[3]}`;
      case 'dd':
        return `${date[4]}${date[5]}`;
      default:
        return `20${date[0]}${date[1]}/${date[2]}${date[3]}/${date[4]}${date[5]}`;
    }
  }
}
