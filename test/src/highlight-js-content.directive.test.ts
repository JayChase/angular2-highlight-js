// import {
//     ComponentFixture,
//     TestComponentBuilder
// } from '@angular/compiler/testing';
// import { Component, provide } from '@angular/core';
// import {
//     async,
//     inject,
//     beforeEachProviders,
//     describe,
//     expect,
//     it
// } from '@angular/core/testing';

// import { HighlightJsContentDirective } from '../../src/highlight-js-content.directive';

// @Component({
//     selector: 'container',
//     template: `<div highlight-js-content=".javascript">
//         <pre>
//             <code class="javascript">
//                 console.log('test snippet');
//             </code>
//         </pre>              
//      </div>`,
//     directives: [HighlightJsContentDirective]
// })
// class ContainerComponent {

// }

// class MockHljs {
//     configure(args: any) {

//     }

//     highlightBlock(args: any) {

//     }
// }

// describe('highlight-js-content directive', () => {
//     let mockHljs: MockHljs;

//     beforeEach(() => {
//         mockHljs = new MockHljs();

//         spyOn(mockHljs, 'highlightBlock');
//         spyOn(mockHljs, 'configure');

//         (<any>window).hljs = mockHljs;
//     });

//     it('should build without error',
//         async(
//             inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
//                 tcb.createAsync(ContainerComponent)
//                     .then((fixture: ComponentFixture<ContainerComponent>) => {
//                         fixture.detectChanges();

//                         expect(fixture).not.toBeNull();
//                     });
//             })
//         )
//     );

//     it('should call hljs.configure if useBr set',
//         async(
//             inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
//                 tcb.overrideTemplate(ContainerComponent, `<div highlight-js-content=".javascript" useBr="true">
//                         <pre>
//                             <code class="javascript">
//                                 console.log('test snippet');
//                             </code>
//                         </pre>
//                     </div>`)
//                     .createAsync(ContainerComponent)

//                     .then((fixture: ComponentFixture<ContainerComponent>) => {

//                         fixture.detectChanges();

//                         let expectedElement = fixture.debugElement.nativeElement.querySelector('[highlight-js]');

//                         expect(mockHljs.configure).toHaveBeenCalled();
//                     });
//             })
//         )
//     );

//     it('should call hljs.highlightBlock() for each matching element under elementRef.nativeElement',
//         async(
//             inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
//                 tcb.overrideTemplate(ContainerComponent, `<div highlight-js-content=".javascript">
//                         <pre>
//                             <code class="javascript" useBr="true">
//                                 console.log('test snippet');
//                             </code>
//                         </pre>
//                         <pre>
//                             <code  class="javascript" useBr="true">
//                                 console.log('test snippet');
//                             </code>
//                         </pre>
//                     </div>`)
//                     .createAsync(ContainerComponent)
//                     .then((fixture: ComponentFixture<ContainerComponent>) => {
//                         fixture.detectChanges();

//                         expect((<jasmine.Spy>mockHljs.highlightBlock).calls.count()).toEqual(2);
//                     });
//             })
//         )
//     );

//     it('should default to code element selector is non supplied as attribute value',
//         async(
//             inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
//                 tcb.overrideTemplate(ContainerComponent, `<div highlight-js-content>
//                         <pre>
//                             <code class="javascript" useBr="true">
//                                 console.log('test snippet');
//                             </code>
//                         </pre>
//                         <pre>
//                             <code  class="javascript" useBr="true">
//                                 console.log('test snippet');
//                             </code>
//                         </pre>
//                     </div>`)
//                     .createAsync(ContainerComponent)
//                     .then((fixture: ComponentFixture<ContainerComponent>) => {
//                         fixture.detectChanges();

//                          expect((<jasmine.Spy>mockHljs.highlightBlock).calls.count()).toEqual(2);
//                     });
//             })
//         )
//     );
// })