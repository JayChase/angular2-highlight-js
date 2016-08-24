import { Component, provide } from '@angular/core';
import {
    async,
    inject,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import { HighlightJsContentDirective } from '../../src/highlight-js-content.directive';

@Component({
    template: '<div><section [innerHTML]="sampleContent" highlight-js-content=".highlight"></section></div>',
    directives: [HighlightJsContentDirective]
})
class TestHostComponent {
    sampleContent = `
        <pre>
            <code class="javascript highlight">
                alert('Hello, World!');
            </code>
        </pre>`;
}

class MockHljs {
    configure(args: any) {

    }

    highlightBlock(args: any) {
    }
}

describe('highlight-js-content directive', () => {
    let mockHljs: MockHljs;

    beforeEach(() => {
        mockHljs = new MockHljs();
        spyOn(mockHljs, 'highlightBlock');
        spyOn(mockHljs, 'configure');
        (<any>window).hljs = mockHljs;

        TestBed.configureTestingModule({
            declarations: [
                TestHostComponent,
                HighlightJsContentDirective
            ]
        });
    });


    it('should call hljs.configure if useBr set', () => {
        TestBed.overrideComponent(TestHostComponent, {
            set: {
                template: `
                        <pre highlight-js-content [useBr]="true">
                            <code class="javascript highlight">
                                alert('Hello, World!');
                            </code>
                        </pre>`
            }
        });

        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(TestHostComponent);

            fixture.detectChanges();

            expect(mockHljs.configure).toHaveBeenCalled();
        });
    });

    it('should NOT call hljs.configure if no useBr set', () => {
        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(TestHostComponent);

            fixture.detectChanges();

            expect(mockHljs.configure).not.toHaveBeenCalled();
        });
    });

    it('should call hljs.highlightBlock() for each matching element under elementRef.nativeElement', () => {
        TestBed.overrideComponent(TestHostComponent, {
            set: {
                template: `<div highlight-js-content=".javascript">
                         <pre>
                            <code class="javascript" useBr="true">
                                 console.log('test snippet');
                             </code>
                         </pre>
                         <pre>
                             <code  class="javascript" useBr="true">
                                 console.log('test snippet');
                             </code>
                       </pre>
                     </div>`
            }
        });

        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(TestHostComponent);

            fixture.detectChanges();

            expect((<jasmine.Spy>mockHljs.highlightBlock).calls.count()).toEqual(2);
        });
    });

    it('should default to code element selector is non supplied as attribute value', () => {
        TestBed.overrideComponent(TestHostComponent, {
            set: {
                template: `<div highlight-js-content>
                         <pre>
                            <code class="javascript" useBr="true">
                                 console.log('test snippet');
                             </code>
                         </pre>
                         <pre>
                             <code  class="javascript" useBr="true">
                                 console.log('test snippet');
                             </code>
                       </pre>
                     </div>`
            }
        });

        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(TestHostComponent);

            fixture.detectChanges();

            expect((<jasmine.Spy>mockHljs.highlightBlock).calls.count()).toEqual(2);
        });
    });
});