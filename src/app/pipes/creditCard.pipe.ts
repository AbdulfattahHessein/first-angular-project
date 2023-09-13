import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'creditCard'
} )
export class CreditCardPipe implements PipeTransform {

  transform( value: string, args?: any ): string { //0000

    let credit: string[] = value.split( '' );
    for ( let i = 4; i < value.length; i += 4 ) { //0000000
      credit.splice( i + (i / 4 - 1), 0, '-' )// add 1 to i for added - character
    }
    return credit.join( '' );
  }

}
