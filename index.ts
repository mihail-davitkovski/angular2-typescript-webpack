
/// <reference path="./node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from "angular2/platform/browser";

import {HelloWorld} from "./src/components/hello"; 

import {RedditApp} from "./src/components/articles/redditApp"; 

import {InventoryApp} from "./src/components/inventory/inventoryApp"; 

bootstrap(InventoryApp);

