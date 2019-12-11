import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';


@ Component({
  selector: 'formly-input',
  templateUrl: './input-overview-example.html',
})
export class InputOverviewExample implements OnInit {
  results: any;
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};


  filterChange$ = new BehaviorSubject< object>(null);
  fields: FormlyFieldConfig[] = [{
    key: 'searchKeyword',
    wrappers: ['form-field'],
    templateOptions: {label: 'Keyword', ariaHidden: true},
    fieldGroup:
        [
          {
            key: 'keyword',
            type: 'input',
            templateOptions: {type: 'text', label: 'Search Keyword'},

          },
        ]
  }];


  // To display the selected model values
  ngOnInit() {
    this.filterChange$.subscribe(
      res =>
        this.results = res
    );
  }


}
