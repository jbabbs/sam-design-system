/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TypographyDemo} from './typography-demo';

@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: TypographyDemo}]),
  ],
  declarations: [TypographyDemo],
})
export class TypographyDemoModule {
}
