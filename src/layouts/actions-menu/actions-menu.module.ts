/**
 * @license
 * Copyright [COPYRIGHT HOLDER] All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at [LINK TO LICENSE]
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SdsActionsMenuComponent} from './actions-menu.component';
import {SdsMenuModule} from '@gsa-sam/components/menu';

@NgModule({
  imports: [CommonModule, SdsMenuModule, FontAwesomeModule],
  exports: [SdsActionsMenuComponent],
  declarations: [SdsActionsMenuComponent],
  providers: []
})
export class SdsActionsMenuModule {}
