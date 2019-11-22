import {NgModule} from '@angular/core';
import {SdsFooterModule} from '@gsa-sam/components/footer';
import {FooterOverviewExample} from './footer-overview/footer-overview-example';

export {FooterOverviewExample};

const EXAMPLES = [
  FooterOverviewExample,
];

@NgModule({
  imports: [
    SdsFooterModule
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES,
})
export class FooterExamplesModule {
}
