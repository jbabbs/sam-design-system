import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import apiDocs from 'libs/documentation/src/documentation';

interface apiDesc {
  inputs: any;
  outputs: any;
  methods: any;
  properties: any;
}

export function getAPI(component) {
  const api:apiDesc = {
    inputs: {},
    outputs: {},
    methods: {},
    properties: {},
  };
  Object.values(apiDocs.components)
    .filter(entity => entity.name.startsWith(`${component}`))
    .forEach(entity => {
      api.inputs = entity.inputsClass;
      api.outputs = entity.outputsClass;
      api.methods = entity.methodsClass;
      api.properties = entity.propertiesClass;
    });
  return api;
}

@Component({
  selector: 'docs-api-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './docs-api-component.component.html',
  styles: [`
    code::before, code::after {
      content: '';
    }
    .api-label {
      width: 25%;
    }
    .api-content {
      width: 75%;
    }
    `
  ]
})
export class DocumentationAPIComponent {
  api: apiDesc;
  constructor() {}

  getArgs(method) {
    const argString: String[] = [];
    method.args
    .forEach(argument => {
      argString.push(`${argument.name}: ${argument.type}`);
    });
    return argString.join(", ");
  }

  @Input() set component(component: string) {
    this.api = getAPI(component);
  }
}