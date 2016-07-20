"use strict";
var testing_1 = require('@angular/compiler/testing');
var testing_2 = require('@angular/core/testing');
var demo_component_1 = require('../../demo/demo.component');
var MockHljs = (function () {
    function MockHljs() {
    }
    MockHljs.prototype.configure = function (args) {
    };
    MockHljs.prototype.highlightBlock = function (args) {
    };
    return MockHljs;
}());
testing_2.describe('demo component', function () {
    var mockHljs;
    beforeEach(function () {
        mockHljs = new MockHljs();
        spyOn(mockHljs, 'highlightBlock');
        spyOn(mockHljs, 'configure');
        window.hljs = mockHljs;
    });
    testing_2.it('should build without error', testing_2.async(testing_2.inject([testing_1.TestComponentBuilder], function (tcb) {
        tcb.createAsync(demo_component_1.DemoComponent)
            .then(function (fixture) {
            fixture.detectChanges();
            testing_2.expect(fixture).not.toBeNull();
        });
    })));
});
//# sourceMappingURL=demo.component.spec.js.map