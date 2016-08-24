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
var testing_1 = require('@angular/core/testing');
var highlight_js_content_directive_1 = require('../../src/highlight-js-content.directive');
var TestHostComponent = (function () {
    function TestHostComponent() {
        this.sampleContent = "\n        <pre>\n            <code class=\"javascript highlight\">\n                alert('Hello, World!');\n            </code>\n        </pre>";
    }
    TestHostComponent = __decorate([
        core_1.Component({
            template: '<div><section [innerHTML]="sampleContent" highlight-js-content=".highlight"></section></div>',
            directives: [highlight_js_content_directive_1.HighlightJsContentDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], TestHostComponent);
    return TestHostComponent;
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
describe('highlight-js-content directive', function () {
    var mockHljs;
    beforeEach(function () {
        mockHljs = new MockHljs();
        spyOn(mockHljs, 'highlightBlock');
        spyOn(mockHljs, 'configure');
        window.hljs = mockHljs;
        testing_1.TestBed.configureTestingModule({
            declarations: [
                TestHostComponent,
                highlight_js_content_directive_1.HighlightJsContentDirective
            ]
        });
    });
    it('should call hljs.configure if useBr set', function () {
        testing_1.TestBed.overrideComponent(TestHostComponent, {
            set: {
                template: "\n                        <pre highlight-js-content [useBr]=\"true\">\n                            <code class=\"javascript highlight\">\n                                alert('Hello, World!');\n                            </code>\n                        </pre>"
            }
        });
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(TestHostComponent);
            fixture.detectChanges();
            expect(mockHljs.configure).toHaveBeenCalled();
        });
    });
    it('should NOT call hljs.configure if no useBr set', function () {
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(TestHostComponent);
            fixture.detectChanges();
            expect(mockHljs.configure).not.toHaveBeenCalled();
        });
    });
    it('should call hljs.highlightBlock() for each matching element under elementRef.nativeElement', function () {
        testing_1.TestBed.overrideComponent(TestHostComponent, {
            set: {
                template: "<div highlight-js-content=\".javascript\">\n                         <pre>\n                            <code class=\"javascript\" useBr=\"true\">\n                                 console.log('test snippet');\n                             </code>\n                         </pre>\n                         <pre>\n                             <code  class=\"javascript\" useBr=\"true\">\n                                 console.log('test snippet');\n                             </code>\n                       </pre>\n                     </div>"
            }
        });
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(TestHostComponent);
            fixture.detectChanges();
            expect(mockHljs.highlightBlock.calls.count()).toEqual(2);
        });
    });
    it('should default to code element selector is non supplied as attribute value', function () {
        testing_1.TestBed.overrideComponent(TestHostComponent, {
            set: {
                template: "<div highlight-js-content>\n                         <pre>\n                            <code class=\"javascript\" useBr=\"true\">\n                                 console.log('test snippet');\n                             </code>\n                         </pre>\n                         <pre>\n                             <code  class=\"javascript\" useBr=\"true\">\n                                 console.log('test snippet');\n                             </code>\n                       </pre>\n                     </div>"
            }
        });
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(TestHostComponent);
            fixture.detectChanges();
            expect(mockHljs.highlightBlock.calls.count()).toEqual(2);
        });
    });
});
//# sourceMappingURL=highlight-js-content.directive.test.js.map