import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'removewhitespaces'
})
export class RemoveSpacesPipe implements PipeTransform {

    transform(value: string, args?: any): string {
        return value.replace(/ /g,"_");

    }

}

