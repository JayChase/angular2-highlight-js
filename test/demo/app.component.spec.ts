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

import { AppComponent } from '../../demo/app.component';

describe('App component', () => {
    it('should build without error',
        async(
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                tcb.createAsync(AppComponent)
                    .then((fixture: ComponentFixture<AppComponent>) => {
                        fixture.detectChanges();

                        expect(fixture).not.toBeNull();
                    });
            })
        )
    );

    it('should set the title',
        async(
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                tcb.createAsync(AppComponent)
                    .then((fixture: ComponentFixture<AppComponent>) => {
                        fixture.detectChanges();

                        //set the title
                        fixture.debugElement.componentInstance.title = 'test-title';

                        fixture.detectChanges();

                        //check the title heading is test-title                        
                        expect(fixture.debugElement.nativeElement.querySelector('.component-title')).toHaveText('test-title');
                    });
            })
        )
    );
})