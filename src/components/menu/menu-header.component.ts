import { Component, Input } from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'sds-menu-header',
  templateUrl: 'menu-header.component.html'
})
export class SdsMenuHeaderComponent {
  @Input() hideClose = false;
  faTimes: IconDefinition = faTimes;
}
