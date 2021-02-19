import { Pipe, PipeTransform } from '@angular/core';
import { Ulke } from '../interfaces/ulke';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(list: Ulke[], filterKey:string): any {
    if (!filterKey) {
      return list;
    } else {
      return list.filter(item=>item.capital.toLowerCase().includes(filterKey.toLowerCase()));
    }
  }
}
