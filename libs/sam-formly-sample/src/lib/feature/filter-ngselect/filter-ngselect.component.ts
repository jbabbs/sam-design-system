import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'sds-filter-ngselect',
  templateUrl: './filter-ngselect.component.html',
 
})
export class FilterNgSelectComponent implements OnInit {

  constructor(private change: ChangeDetectorRef) {

  }
  results: any = {};
  form = new FormGroup({});
  model:any = {};
  options: FormlyFormOptions = {};
  /**
 * Event when something is checked/selected in the grid
 */
  public filterChange$ = new BehaviorSubject<object>(null);

  items = [

  { 'id': '1', 'parentId': null, 'name': 'Level 1', 'subtext': 'id 1', 'type': 'Level 1', 'sub': { 'val': 'Another value 1' } },
    { 'id': '2', 'parentId': '1', 'name': 'Level 2', 'subtext': 'id 2', 'type': 'Level 2', 'sub': { 'val': 'Another value 2' }  },
    { 'id': '3', 'parentId': '2', 'name': 'Level 3', 'subtext': 'id 3', 'type': 'Level 3', 'sub': { 'val': 'Another value 3' }  },
    { 'id': '4', 'parentId': '3', 'name': 'Level 4', 'subtext': 'id 4', 'type': 'Level 4', 'sub': { 'val': '4' }  },
    { 'id': '5', 'parentId': '4', 'name': 'Level 5', 'subtext': 'id 5', 'type': 'Level 5', 'sub': { 'val': '5' }  },
    { 'id': '6', 'parentId': '5', 'name': 'Level 6', 'subtext': 'id 6', 'type': 'Level 6', 'sub': { 'val': '6' }  },
    { 'id': '7', 'parentId': '6', 'name': 'Level 7', 'subtext': 'id 7', 'type': 'Level 7', 'sub': { 'val': '7' }  },
    { 'id': '8', 'parentId': '5', 'name': 'Level 6', 'subtext': 'id 8', 'type': 'Level 6' },
    { 'id': '9', 'parentId': '8', 'name': 'Level 7', 'subtext': 'id 9', 'type': 'Level 7' },
    { 'id': '10', 'parentId': '8', 'name': 'Level 7', 'subtext': 'id 10', 'type': 'Level 7' },
    { 'id': '11', 'parentId': '5', 'name': 'Level 6', 'subtext': 'id 11', 'type': 'Level 6' },
    { 'id': '12', 'parentId': '11', 'name': 'Level 7', 'subtext': 'id 12', 'type': 'Level 7' },
    { 'id': '13', 'parentId': '11', 'name': 'Level 7', 'subtext': 'id 13', 'type': 'Level 7' },
    { 'id': '14', 'parentId': '11', 'name': 'Level 7', 'subtext': 'id 14', 'type': 'Level 7' },
    { 'id': '15', 'parentId': '11', 'name': 'Level 7', 'subtext': 'id 15', 'type': 'Level 7' },
    { 'id': '16', 'parentId': '5', 'name': 'Level 6', 'subtext': 'id 16', 'type': 'Level 6' },
    { 'id': '17', 'parentId': '16', 'name': 'Level 7', 'subtext': 'id 17', 'type': 'Level 7' },
 
    { 'id': '34', 'parentId': '33', 'name': 'Level 7', 'subtext': 'id 34', 'type': 'Level 7' },
    { 'id': '35', 'parentId': '33', 'name': 'Level 7', 'subtext': 'id 35', 'type': 'Level 7' },
  
];

  fields: FormlyFieldConfig[] = [
    {
      key: 'searchKeyword',
      wrappers: ['filterwrapper'],
      templateOptions: {
        ariaHidden: false
      },
      fieldGroup: [{
        key: 'single',
        type: 'ngselect',
        templateOptions: {
          type: 'text',
          items: this.items,
          placeholder : 'ng select multiple'   
         }
      }]
    }
  ];


public ngOnInit() {
    console.log(this.model);
    this.filterChange$.subscribe(
      res => {
        this.results = res;
      }
    );
  }

}
