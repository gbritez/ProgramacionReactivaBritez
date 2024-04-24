import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProgramacionReactivaBritez';
  showComponent = true;

  toggle() {
    this.showComponent = !this.showComponent;
  }
}
