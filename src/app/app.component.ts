import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // Remove or comment out the styleUrls property if not needed
  // styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [SearchComponent]
})
export class AppComponent {
  title = 'angular-covid-app';
}
