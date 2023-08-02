import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponentComponent } from './course-component/course-component.component';
import { TemplateComponent } from './template/template.component';
import { DirectiveComponent } from './directive/directive.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { MyService } from './dependency-injection/MyService.component';
import { InfomationComponent } from './infomation/infomation.component';
import { DataService } from './data.service';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponentComponent,
    TemplateComponent,
    DirectiveComponent,
    DependencyInjectionComponent,
    InfomationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MyService, DataService, FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
