import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SdsFiltersModule} from '@gsa-sam/sam-formly';
import {FormlyModule} from '@ngx-formly/core';

import {InputOverviewExample} from './overview/input-overview-example';

export {
  InputOverviewExample,
};

const EXAMPLES = [
  InputOverviewExample,
];

@NgModule({
  imports:
      [CommonModule, FormsModule, SdsFiltersModule, FormlyModule.forRoot(), ReactiveFormsModule],
  declarations: EXAMPLES,
  exports: EXAMPLES,
})
export class InputExamplesModule {
}
