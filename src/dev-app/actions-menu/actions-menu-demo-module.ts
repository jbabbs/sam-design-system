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

import {SdsActionsMenuModule} from '@gsa-sam/layouts/actions-menu';
import {SdsMenuModule} from '@gsa-sam/components/menu';
import {ActionsMenuDemo} from './actions-menu-demo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SdsMenuModule,
    SdsActionsMenuModule,
    RouterModule.forChild([{path: '', component: ActionsMenuDemo}]),
  ],
  exports: [],
  declarations: [ActionsMenuDemo],
  providers: []
})
export class ActionsMenuDemoModule {}
