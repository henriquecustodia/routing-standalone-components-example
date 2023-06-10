import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: ` 
    <ul>
      <li>
        <a routerLink="one">one</a>
      </li>
      <li>
        <a routerLink="two">two</a>  
      </li>
      <li>
        <a routerLink="three">three</a>
      </li>
    </ul>

    <router-outlet /> 
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ThirdComponent {}
