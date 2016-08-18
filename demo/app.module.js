"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var demo_component_1 = require('./demo.component');
var highlight_js_module_1 = require('../src/highlight-js.module');
var card_1 = require('@angular2-material/card');
var toolbar_1 = require('@angular2-material/toolbar');
var button_1 = require('@angular2-material/button');
var input_1 = require('@angular2-material/input');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                //A2 stuff
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                //src module
                highlight_js_module_1.HighlightJsModule,
                //material modules
                card_1.MdCardModule,
                toolbar_1.MdToolbarModule,
                button_1.MdButtonModule,
                input_1.MdInputModule
            ],
            providers: [
                highlight_js_module_1.HighlightJsService
            ],
            declarations: [
                app_component_1.AppComponent,
                demo_component_1.DemoComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map