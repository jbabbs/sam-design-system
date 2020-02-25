import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-ng-select',
  template: ` 
  test
  <ng-select [formControl]="formControl" [formlyAttributes]="field"
  [items]="to.items"
  [multiple]="to.multiple"
  [closeOnSelect]="to.closeOnSelect"
  [searchable]="to.searchable"
  bindLabel="name"
  [placeholder]="to.placeholder"
  >
</ng-select>
{{to | json}}
   `,
})
export class FormlyFieldNgSelectComponent extends FieldType { }