import { Component, provide } from '@angular/core';
import {
    async,
    inject,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import { disableDeprecatedForms, provideForms } from '@angular/forms';

import {MdInput} from '@angular2-material/input';

import { DemoComponent } from '../../demo/demo.component';

import { HighlightJsService } from '../../src/highlight-js.service';

class MockHighlightJsService extends HighlightJsService {
    highlight(codeBlock: any, useBr?: boolean): void {
    }
}

describe('demo component', () => {
    let mockHighlightJsService: MockHighlightJsService;

    beforeEach(() => {
        mockHighlightJsService = new MockHighlightJsService();
        spyOn(mockHighlightJsService, 'highlight');

        (<any>window).hljs = mockHighlightJsService;

        TestBed.configureTestingModule({
            declarations: [
                DemoComponent
            ],
            providers: [
                provide(HighlightJsService, { useValue: mockHighlightJsService })
            ]
        });

        TestBed.compileComponents();
    });

    it('should build without error', async(() => {
        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(DemoComponent);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;

            expect(compiled).not.toBeNull();
        });
    }));

    it('should call HighlightJsService highlight when highlight button clicked', async(() => {        
        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(DemoComponent);
            var compiled = fixture.debugElement.nativeElement;

            compiled.querySelector('#btnHighlight').click();

            fixture.detectChanges();

            expect(mockHighlightJsService.highlight).toHaveBeenCalled();
        });
    }));

    it('should call set sampleContent when add content button clicked', async(() => {
        expect(true).toBe(true);
        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(DemoComponent);
            var compiled = fixture.debugElement.nativeElement;

            compiled.querySelector('#btnAddContent').click();

            fixture.detectChanges();

            expect(fixture.componentInstance.sampleContent).toBeTruthy();
        });
    }));
});
