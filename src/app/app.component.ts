import './edui-name-card';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    edui-name-card {
      width: 400px;
      display: block;
      margin: 50px auto;
    }
  `],
  template: `
    <edui-name-card [user]="currentUser" (greet)="onGreet($event)"></edui-name-card>
  `
})
export class AppComponent {
  currentUser = {
    firstName: 'Danny',
    lastName: 'Blue',
    company: 'LiveSafe'
  }

  onGreet(e) {
    alert(e.detail.firstName + ' said Hello!');
  }
}
