import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roles'
})
export class RolesPipe implements PipeTransform {

  transform(value: number): string {
    if (value == 0) {
      return "Admin";
    } else {
      return "User";
    }
  }

}
