import {Component, Input, Output, EventEmitter} from '@angular/core';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'sds-actions-menu',
  templateUrl: 'actions-menu.component.html'
})
export class SdsActionsMenuComponent {
  @Input() model: any;
  @Input() size: string;
  @Output() clicks = new EventEmitter<string>();
  faEllipsisV: IconDefinition = faEllipsisV;
  constructor() {}
}
