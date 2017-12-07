import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform{

  transform(value: any, length: number) {
    if (value.length <= length) {
      return value;
    }
    return value.substr(0,length) + ' ...';
  }

}
