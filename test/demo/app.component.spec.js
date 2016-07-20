"use strict";
var testing_1 = require('@angular/compiler/testing');
var testing_2 = require('@angular/core/testing');
var app_component_1 = require('../../demo/app.component');
var MockHljs = (function () {
    function MockHljs() {
    }
    MockHljs.prototype.configure = function (args) {
    };
    MockHljs.prototype.highlightBlock = function (args) {
    };
    return MockHljs;
}());
testing_2.describe('App component', function () {
    var mockHljs;
    beforeEach(function () {
        mockHljs = new MockHljs();
        spyOn(mockHljs, 'highlightBlock');
        spyOn(mockHljs, 'configure');
        window.hljs = mockHljs;
    });
    testing_2.it('should build without error', testing_2.async(testing_2.inject([testing_1.TestComponentBuilder], function (tcb) {
        tcb.createAsync(app_component_1.AppComponent)
            .then(function (fixture) {
            fixture.detectChanges();
            testing_2.expect(fixture).not.toBeNull();
        });
    })));
    testing_2.it('should set the title', testing_2.async(testing_2.inject([testing_1.TestComponentBuilder], function (tcb) {
        tcb.createAsync(app_component_1.AppComponent)
            .then(function (fixture) {
            fixture.detectChanges();
            //set the title
            fixture.debugElement.componentInstance.title = 'test-title';
            fixture.detectChanges();
            //check the title heading is test-title                        
            testing_2.expect(fixture.debugElement.nativeElement.querySelector('.component-title').innerText).toEqual('test-title');
        });
    })));
});
//# sourceMappingURL=app.component.spec.js.map