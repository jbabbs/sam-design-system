import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SdsFooterModule} from '@gsa-sam/components/footer';
import {ActionsMenuSampleComponent} from './overview/actions-menu.component';

export {
  ActionsMenuSampleComponent,
};

const EXAMPLES = [
  ActionsMenuSampleComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SdsFooterModule
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES,
})
export class FooterExamplesModule {
}
