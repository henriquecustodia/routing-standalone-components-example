import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-third3',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      third3 works!
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
export class Third3Component {

}
