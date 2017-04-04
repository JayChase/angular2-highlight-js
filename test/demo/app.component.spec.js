"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("../../demo/app.component");
describe('App component', function () {
    var testTemplate = '<div>TEST</div>';
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent]
        });
    });
    it('should build without error', testing_1.async(function () {
        testing_1.TestBed.overrideComponent(app_component_1.AppComponent, {
            set: {
                template: testTemplate,
                templateUrl: null
            }
        });
        testing_1.TestBed.compileComponents().then(function () {
            var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).not.toBeNull();
        });
    }));
});
//# sourceMappingURL=app.component.spec.js.map