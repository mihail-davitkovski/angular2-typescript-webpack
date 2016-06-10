
/// <reference path="./node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from "angular2/platform/browser";

import {HelloWorld} from "./src/components/hello"; 

import {RedditApp} from "./src/components/articles/redditApp"; 

import {InventoryApp} from "./src/components/inventory/inventoryApp"; 

import {DemoFormSku} from "./src/components/forms/demo_form_sku"; 

import {DemoFormSkuBuilder} from "./src/components/forms/demo_form_sku_with_builder"; 

bootstrap(DemoFormSkuBuilder);

