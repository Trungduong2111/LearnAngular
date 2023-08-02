import { Component } from '@angular/core';
import { MyService } from './MyService.component';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent {
  name: any;
  constructor(private service: MyService) {
    this.name = service.service();
  }
}
