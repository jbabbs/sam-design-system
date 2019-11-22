import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTreeModule} from '@angular/material/tree';
import {TreeChecklistExample} from './tree-checklist/tree-checklist-example';

export {
  TreeChecklistExample,
};

const EXAMPLES = [
  TreeChecklistExample,
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatTreeModule,
  ],
  declarations: EXAMPLES,
  exports: EXAMPLES,
})
export class TreeExamplesModule {
}
