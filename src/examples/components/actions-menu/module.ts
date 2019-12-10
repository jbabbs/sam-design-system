import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SdsActionsMenuModule} from '@gsa-sam/components/actions-menu';
import {SdsMenuModule} from '@gsa-sam/components/menu';
import {ActionsMenuSampleComponent} from './overview/actions-menu-sample.component';

export {
  ActionsMenuSampleComponent,
};

const EXAMPLES = [
  ActionsMenuSampleComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SdsActionsMenuModule,
    SdsMenuModule
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES,
})
export class FActionMenuExamplesModule {
}
