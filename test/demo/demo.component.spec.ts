import {
    ComponentFixture,
    TestComponentBuilder
} from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import {
    async,
    beforeEachProviders,
    describe,
    expect,
    inject, 
    it
} from '@angular/core/testing';

import { DemoComponent } from '../../demo/demo.component';

describe('App component', () => {
    it('should build without error',
        async(
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                tcb.createAsync(DemoComponent)
                    .then((fixture: ComponentFixture<DemoComponent>) => {
                        fixture.detectChanges();

                        expect(fixture).not.toBeNull();
                    });
            })
        )
    );
})