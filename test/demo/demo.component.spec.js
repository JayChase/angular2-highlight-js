"use strict";
var testing_1 = require('@angular/compiler/testing');
var testing_2 = require('@angular/core/testing');
var demo_component_1 = require('../../demo/demo.component');
testing_2.describe('App component', function () {
    testing_2.it('should build without error', testing_2.async(testing_2.inject([testing_1.TestComponentBuilder], function (tcb) {
        tcb.createAsync(demo_component_1.DemoComponent)
            .then(function (fixture) {
            fixture.detectChanges();
            testing_2.expect(fixture).not.toBeNull();
        });
    })));
});
//# sourceMappingURL=demo.component.spec.js.map