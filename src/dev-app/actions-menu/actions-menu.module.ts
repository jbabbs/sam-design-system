import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ActionsMenuDemoComponent} from './actions-menu.component';
import {SdsActionsMenuModule} from '@gsa-sam/components/actions-menu';
import {SdsMenuModule} from '@gsa-sam/components/menu';

@NgModule({
  imports: [SdsActionsMenuModule, SdsMenuModule,
    CommonModule,
    FormsModule,
    RouterModule

  ],
  exports: [],
  declarations: [ActionsMenuDemoComponent],
  providers: []
})
export class ActionsMenuDemoModule {}
