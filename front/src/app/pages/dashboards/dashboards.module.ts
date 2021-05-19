import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { BsDropdownModule } from "ngx-bootstrap";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";

import { DashboardComponent } from "./dashboard/dashboard.component";

import { RouterModule } from "@angular/router";
import { DashboardsRoutes } from "./dashboards.routing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelect2Module } from "ng-select2";

import { RolesPipe } from '../../pipes/roles.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    RolesPipe
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(DashboardsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgSelect2Module
  ],
  exports: [DashboardComponent]
})
export class DashboardsModule {}
