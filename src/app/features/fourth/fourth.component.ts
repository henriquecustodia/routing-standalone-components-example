import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fourth',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>Hello {{ name }}</p> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export default class FourthComponent {
  @Input() name!: string;
}
