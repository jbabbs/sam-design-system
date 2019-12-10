
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SdsMenuHeaderComponent} from './menu-header.component';
import {SdsMenuItemComponent} from './menu-item.component';
import {SdsMenuTriggerForDirective} from './menu-trigger.directive';
import {SdsMenuComponent} from './menu.component';
import {OverlayModule} from '@angular/cdk/overlay';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule, OverlayModule,
    //  FontAwesomeModule
  ],
  exports:
      [SdsMenuComponent, SdsMenuItemComponent, SdsMenuTriggerForDirective, SdsMenuHeaderComponent],
  declarations:
      [SdsMenuComponent, SdsMenuItemComponent, SdsMenuTriggerForDirective, SdsMenuHeaderComponent],
  providers: []
})
export class SdsMenuModule {
}
