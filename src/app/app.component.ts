import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: ` 
  <ul>
    <li>
      <a routerLink="first">first</a>
    </li>
    <li>
      <a routerLink="second">second</a>
    </li>
    <li>
      <a routerLink="third">third</a>
    </li>
    <li>
      <a routerLink="fourth">fourth</a>
    </li>
  </ul>
  
  <router-outlet /> `,
})
export class AppComponent {}
