import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  currentCustomer = "Test";
  itemImageUrl = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
}
