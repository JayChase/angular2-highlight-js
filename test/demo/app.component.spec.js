"use strict";
var testing_1 = require('@angular/compiler/testing');
var testing_2 = require('@angular/core/testing');
var app_component_1 = require('../../demo/app.component');
testing_2.describe('App component', function () {
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
            testing_2.expect(fixture.debugElement.nativeElement.querySelector('.component-title')).toHaveText('test-title');
        });
    })));
});
//# sourceMappingURL=app.component.spec.js.map