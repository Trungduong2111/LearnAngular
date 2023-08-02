import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  isUserLoggedIn = false;
  clickButton() {
    this.isUserLoggedIn == true ? this.isUserLoggedIn = false : this.isUserLoggedIn = true;
  }
  names = ["Name 1", "Name 2", "Name 3"];

  colorBoolean = true;


  isRed = false;
  isBold = true;
}
