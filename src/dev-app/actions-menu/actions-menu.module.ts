import {NgModule} from '@angular/core';

import {ActionsMenuDemoComponent} from './actions-menu.component';
import {SdsActionsMenuModule} from '@gsa-sam/components/actions-menu';

@NgModule({
  imports: [SdsActionsMenuModule],
  exports: [],
  declarations: [ActionsMenuDemoComponent],
  providers: []
})
export class ActionsMenuDemoModule {}
