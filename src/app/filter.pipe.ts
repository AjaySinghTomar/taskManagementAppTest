import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], value: string) {
     if (value === 'completed') {
       return list.filter(item => item.status == 'Completed')
    } else if (value === 'incompleted') {
      return list.filter(item => item.status == 'incompleted')
    } else {
      return list
    }
  }

}
