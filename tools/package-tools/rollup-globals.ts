import {join} from 'path';
import {getSubdirectoryNames} from './secondary-entry-points';
import {buildConfig} from './build-config';

/** Method that converts dash-case strings to a camel-based string. */
export const dashCaseToCamelCase =
  (str: string) => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

/** Generates rollup entry point mappings for the given package and entry points. */
function generateRollupEntryPoints(packageName: string, entryPoints: string[]):
    {[k: string]: string} {
  return entryPoints.reduce((globals: {[k: string]: string}, entryPoint: string) => {
    globals[`@gsa-sam/${packageName}/${entryPoint}`] =
        `sds.${dashCaseToCamelCase(packageName)}.${dashCaseToCamelCase(entryPoint)}`;
    return globals;
  }, {});
}

/** List of potential secondary entry-points for the cdk package. */
const componentsSecondaryEntryPoints = getSubdirectoryNames(join(buildConfig.packagesDir, 'components'));
const layoutsSecondaryEntryPoints = getSubdirectoryNames(join(buildConfig.packagesDir, 'layouts'));

/** Object with all entry points in the format of Rollup globals. */
const rollupComponentsEntryPoints =
  generateRollupEntryPoints('components', componentsSecondaryEntryPoints);

const rollupLayoutsEntryPoints =
  generateRollupEntryPoints('layouts', layoutsSecondaryEntryPoints);

/** Map of globals that are used inside of the different packages. */
export const rollupGlobals = {
  'moment': 'moment',
  'protractor': 'protractor',
  'selenium-webdriver': 'selenium-webdriver',
  'tslib': 'tslib',

  '@angular/animations': 'ng.animations',
  '@angular/common': 'ng.common',
  '@angular/common/http': 'ng.common.http',
  '@angular/common/http/testing': 'ng.common.http.testing',
  '@angular/common/testing': 'ng.common.testing',
  '@angular/core': 'ng.core',
  '@angular/core/testing': 'ng.core.testing',
  '@angular/forms': 'ng.forms',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
  '@angular/platform-browser-dynamic/testing': 'ng.platformBrowserDynamic.testing',
  '@angular/platform-browser/animations': 'ng.platformBrowser.animations',
  '@angular/platform-server': 'ng.platformServer',
  '@angular/router': 'ng.router',

  // CDK
  '@angular/cdk': 'ng.cdk',
  '@angular/cdk/a11y': 'ng.cdk.a11y',
  '@angular/cdk/coercion': 'ng.cdk.coercion',
  '@angular/cdk/keycodes': 'ng.cdk.keycodes',
  '@angular/cdk/overlay': 'ng.cdk.overlay',
  '@angular/cdk/portal': 'ng.cdk.portal',
  '@angular/cdk/platform': 'ng.cdk.platform',

  // Material
  '@angular/material': 'ng.material',

  // FontAwesome
  '@fortawesome/angular-fontawesome': 'fortawesome.angular-fontawesome',
  '@fortawesome/free-solid-svg-icons': 'fortawesome.free-solid-svg-icons',

  // SDS MODIFICATION
  '@gsa-sam/sds-examples': 'sds.sdsExamples',
  '@gsa-sam/components': 'sds.components',

  // Include secondary entry-points of the components and layouts packages
  ...rollupComponentsEntryPoints,
  ...rollupLayoutsEntryPoints,

  'rxjs': 'rxjs',
  'rxjs/operators': 'rxjs.operators',
};
