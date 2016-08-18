// import {
//     ComponentFixture,
//     TestComponentBuilder
// } from '@angular/compiler/testing';
// import { Component, provide } from '@angular/core';
// import {
//     async,
//     beforeEachProviders,
//     describe,
//     expect,
//     inject,
//     it
// } from '@angular/core/testing';
// import { DemoComponent } from '../../demo/demo.component';
// class MockHljs {
//     configure(args: any) {
//     }
//     highlightBlock(args: any) {
//     }
// }
// describe('demo component', () => {
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
//                 tcb.createAsync(DemoComponent)
//                     .then((fixture: ComponentFixture<DemoComponent>) => {
//                         fixture.detectChanges();
//                         expect(fixture).not.toBeNull();
//                     });
//             })
//         )
//     );
// }) 
//# sourceMappingURL=demo.component.spec.js.map