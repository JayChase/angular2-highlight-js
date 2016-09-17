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
var highlight_js_service_1 = require('../src/highlight-js.service'); //in live this would be the node_modules path
var DemoComponent = (function () {
    function DemoComponent(service) {
        this.service = service;
        this.sampleContent = "";
    }
    DemoComponent.prototype.ngOnInit = function () { };
    DemoComponent.prototype.ngAfterViewInit = function () {
    };
    DemoComponent.prototype.highlightByService = function (target) {
        this.service.highlight(target);
    };
    DemoComponent.prototype.addContent = function () {
        this.sampleContent = "\n         <pre>\n            <code class=\"typescript highlight\">\n                class Greeter {\n                    constructor(public greeting: string) { }\n\n                    greet() {\n                        return \"hello world\";\n                    }\n                };\n            </code>\n        </pre>\n        <pre>\n            <code class=\"javascript highlight\">\n                alert('Hello, World!');\n            </code>\n        </pre>\n        ";
    };
    DemoComponent = __decorate([
        //in live this would be the node_modules path
        core_1.Component({
            moduleId: module.id,
            selector: 'demo',
            templateUrl: 'demo.component.html',
            styleUrls: ['demo.component.css']
        }), 
        __metadata('design:paramtypes', [highlight_js_service_1.HighlightJsService])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=demo.component.js.map