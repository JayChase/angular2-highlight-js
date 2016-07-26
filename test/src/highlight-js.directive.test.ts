import {
    ComponentFixture,
    TestComponentBuilder
} from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import {
    async,
    inject,
    beforeEachProviders,
    describe,
    expect,
    it
} from '@angular/core/testing';

import { HighlightJsDirective } from '../../src/highlight-js.directive';

@Component({
    selector: 'container',
    template: `<div>
        <pre>
            <code highlight-js class="javascript">
                console.log('test snippet');
            </code>
        </pre>
     </div>`,
    directives: [HighlightJsDirective]
})
class ContainerComponent {

}

class MockHljs {
    configure(args: any) {

    }

    highlightBlock(args: any) {

    }
}


describe('highlist-js directive', () => {
    let mockHljs: MockHljs;

    beforeEach(() => {
        mockHljs = new MockHljs();

        spyOn(mockHljs, 'highlightBlock');
        spyOn(mockHljs, 'configure');

        (<any>window).hljs = mockHljs;
    });

    it('should build without error',
        async(
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                tcb.createAsync(ContainerComponent)
                    .then((fixture: ComponentFixture<ContainerComponent>) => {
                        fixture.detectChanges();

                        expect(fixture).not.toBeNull();
                    });
            })
        )
    );

    it('should call hljs.configure if useBr set',
        async(
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                tcb.overrideTemplate(ContainerComponent, `<div>
                        <pre>
                            <code highlight-js class="javascript" useBr="true">
                                console.log('test snippet');
                            </code>
                        </pre>
                    </div>`)
                    .createAsync(ContainerComponent)

                    .then((fixture: ComponentFixture<ContainerComponent>) => {

                        fixture.detectChanges();

                        let expectedElement = fixture.debugElement.nativeElement.querySelector('[highlight-js]');

                        expect(mockHljs.configure).toHaveBeenCalled();
                    });
            })
        )
    );

    it('should call hljs.highlightBlock() with the current elementRef.nativeElement',
        async(
            inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
                tcb.createAsync(ContainerComponent)
                    .then((fixture: ComponentFixture<ContainerComponent>) => {
                        fixture.detectChanges();

                        let expectedElement = fixture.debugElement.nativeElement.querySelector('[highlight-js]');

                        expect(mockHljs.highlightBlock).toHaveBeenCalledWith(expectedElement);
                    });
            })
        )
    );
})