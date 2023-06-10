import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      third1 works!
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
export class Third1Component {

}
