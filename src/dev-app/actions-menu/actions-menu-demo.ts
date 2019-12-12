/**
 * @license
 * Copyright [COPYRIGHT HOLDER] All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at [LINK TO LICENSE]
 */

import {Component} from '@angular/core';

@Component({
  selector: 'actions-menu-demo',
  templateUrl: 'actions-menu-demo.html'
})
export class ActionsMenuDemo {
  constructor() {}

  menu = {
    trigger: {
      type: 'plain', // plain | primary
      shadow: true
    },
    actions: [
      { id: 'DownloadBtn', text: 'Download' },
      { id: 'FollowBtn', text: 'Follow' },
      { id: 'ShareBtn', text: 'Share' }
    ]
  };

  log(value: any) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
