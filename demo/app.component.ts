import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'highlight.js directive for Angular Demo';

  constructor() {

  }

  ngOnInit() {
   
  }
}
