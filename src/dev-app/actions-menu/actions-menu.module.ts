/**
 * @license
 * Copyright [COPYRIGHT HOLDER] All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at [LINK TO LICENSE]
 */

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {SdsActionsMenuModule} from '@gsa-sam/components/actions-menu';
import {SdsMenuModule} from '@gsa-sam/components/menu';
import {ActionsMenuDemoComponent} from './actions-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SdsMenuModule,
    SdsActionsMenuModule,
    RouterModule.forChild([{path: '', component: ActionsMenuDemoComponent}]),
  ],
  exports: [],
  declarations: [ActionsMenuDemoComponent],
  providers: []
})
export class ActionsMenuDemoModule {}
