import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { BsDropdownModule, AccordionModule } from "ngx-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { TagInputModule } from "ngx-chips";
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { NgSelect2Module } from "ng-select2";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { appService } from './services/app.service';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { userService } from './services/user/user.service';
import { alert } from './services/global/alert.global';
import { sidebarService } from './services/sideBar/sidebar.service';
import { alertService } from './services/alert/alert.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    AppRoutingModule,
    ToastrModule.forRoot(),
    CollapseModule.forRoot(),
    TagInputModule,
    NgxDatatableModule,
    NgSelect2Module
  ],
  declarations: [
    AppComponent, 
    AdminLayoutComponent, 
    AuthLayoutComponent
  ],
  providers: [
    appService,
    userService,
    alert,
    sidebarService,
    alertService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
