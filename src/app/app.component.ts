import { Component } from '@angular/core';
declare var UIkit: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Outgofox-Angular5';
  showAlert(): void {
    UIkit.modal.alert('UIkit alert!');
  }
}
