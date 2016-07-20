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
var testing_1 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var testing_2 = require('@angular/core/testing');
var highlight_js_directive_1 = require('../../src/highlight-js.directive');
var ContainerComponent = (function () {
    function ContainerComponent() {
    }
    ContainerComponent = __decorate([
        core_1.Component({
            selector: 'container',
            template: "<div>\n        <pre>\n            <code highlight-js class=\"javascript\">\n                console.log('test snippet');\n            </code>\n        </pre>\n     </div>",
            directives: [highlight_js_directive_1.HighlightJsDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], ContainerComponent);
    return ContainerComponent;
}());
var MockHljs = (function () {
    function MockHljs() {
    }
    MockHljs.prototype.configure = function (args) {
    };
    MockHljs.prototype.highlightBlock = function (args) {
    };
    return MockHljs;
}());
testing_2.describe('highlist-js directive', function () {
    var mockHljs;
    beforeEach(function () {
        mockHljs = new MockHljs();
        spyOn(mockHljs, 'highlightBlock');
        spyOn(mockHljs, 'configure');
        window.hljs = mockHljs;
    });
    testing_2.it('should build without error', testing_2.async(testing_2.inject([testing_1.TestComponentBuilder], function (tcb) {
        tcb.createAsync(ContainerComponent)
            .then(function (fixture) {
            fixture.detectChanges();
            testing_2.expect(fixture).not.toBeNull();
        });
    })));
    testing_2.it('should call hljs.configure if useBr set', testing_2.async(testing_2.inject([testing_1.TestComponentBuilder], function (tcb) {
        tcb.overrideTemplate(ContainerComponent, "<div>\n                        <pre>\n                            <code highlight-js class=\"javascript\" useBr=\"true\">\n                                console.log('test snippet');\n                            </code>\n                        </pre>\n                    </div>")
            .createAsync(ContainerComponent)
            .then(function (fixture) {
            fixture.detectChanges();
            var expectedElement = fixture.debugElement.nativeElement.querySelector('[highlight-js]');
            testing_2.expect(mockHljs.configure).toHaveBeenCalled();
        });
    })));
});
//# sourceMappingURL=highlight-js.directive.test.js.map