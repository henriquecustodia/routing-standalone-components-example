import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-third2',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      third2 works!
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class Third2Component {

}
