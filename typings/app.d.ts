/**
 * Declarations angular depends on for compilation to ES6.
 * This file is also used to propagate our transitive typings
 * to users.
 */


// <reference path="../typings/hammerjs/hammerjs.d.ts"/>
// <reference path="../typings/jasmine/jasmine.d.ts"/>
// <reference path="../typings/angular-protractor/angular-protractor.d.ts"/>
// <reference path="../typings/node/node.d.ts" />
// <reference path="../typings/es6-shim/es6-shim.d.ts" />
// <reference path="../typings/zone.js/zone.js.d.ts"/>

///<reference path="../typings/jquery/jquery.d.ts" />
// <reference path='../node_modules/angular2/typings/browser.d.ts'/>
///<reference path="../typings/browser/ambient/systemjs/systemjs.d.ts" />
///<reference path="../typings/browser/ambient/es6-shim/es6-shim.d.ts" />
///<reference path="../typings/browser/ambient/require/require.d.ts" />
///<reference path="../typings/browser/ambient/redux/redux.d.ts" />
///<reference path="../typings/browser/ambient/redux-thunk/redux-thunk.d.ts" />
///<reference path="../typings/browser/ambient/reselect/reselect.d.ts" />
///<reference path="../typings/bootbox/bootbox.d.ts" />
///<reference path="../typings/lodash/lodash.d.ts" />
///<reference path="../typings/moment/moment-node.d.ts" />
///<reference path='../node_modules/immutable/dist/Immutable.d.ts'/>

declare var assert:any;

declare module 'highcharts' {
}

// as of typescript 2.0 you can also do:
//declare module "highcharts/*";

interface Window {
    devToolsExtension: any;
    devToolsExtensionDisabled: any;
    DOMParser:any;
}

interface module {
    id: any;
}

/**
 * ES6 shims taken from /typings/browser/ambient/es6-shim
 */
interface ObjectConstructor {
    assign(target:any, ...sources:any[]): any;
}
// interface ArrayConstructor {
//     from:any;
// }
interface String {
    repeat(count:number): string;
}

interface NodeRequireFunction {
    (id: string): any;
}

interface NodeRequire extends NodeRequireFunction {
    resolve(id:string): string;
    cache: any;
    extensions: any;
    main: any;
}

//declare var require: NodeRequire;

interface NodeModule {
    exports: any;
    require: NodeRequireFunction;
    id: string;
    filename: string;
    loaded: boolean;
    parent: any;
    children: any[];
}

declare var module: NodeModule;
declare var __moduleName: string;
declare var watch:any;




