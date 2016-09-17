import { Component} from '@angular/core';
import {
    async,
    inject,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdInputModule } from '@angular2-material/input';

import { HighlightJsModule } from '../../src/highlight-js.module';

import { DemoComponent } from '../../demo/demo.component';
import { HighlightJsContentDirective } from '../../src/highlight-js-content.directive';

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

        TestBed.configureTestingModule({
            imports: [
                MdCardModule,
                MdToolbarModule,
                MdButtonModule,
                MdInputModule,
                HighlightJsModule
            ],            
            declarations: [                
                DemoComponent                
            ],
            providers: [
                {
                    provide: HighlightJsService,
                    useClass: mockHighlightJsService 
                }
            ]
        });
    });

    // it('should build without error', async(() => {
    //     TestBed.compileComponents().then(() => {
    //         var fixture = TestBed.createComponent(DemoComponent);
    //         fixture.detectChanges();
    //         var compiled = fixture.debugElement.nativeElement;

    //         expect(compiled).not.toBeNull();
    //     });
    // }));
});