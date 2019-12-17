import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldInputComponent } from './types/input';
import { FormlyFormFieldFilterWrapperComponent } from './wrappers/form-field.filterwrapper';
import { FormlyWrapperFormFieldComponent } from './wrappers/form-field.wrapper';

export const FIELD_TYPE_COMPONENTS =
  [FormlyFieldInputComponent, FormlyFormFieldFilterWrapperComponent];

export const FORMLY_CONFIG: ConfigOption = {
  types: [{
    name: 'input',
    component: FormlyFieldInputComponent,
    wrappers: ['form-field'],
  }
  ],
  wrappers: [
    { name: 'form-field', component: FormlyWrapperFormFieldComponent }
  ],

};
