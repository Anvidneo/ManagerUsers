import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { BsDropdownModule } from "ngx-bootstrap";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxPrintModule } from "ngx-print";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { UserComponent } from 'src/app/pages/user/user.component';
import { RouterModule } from '@angular/router';
import { UserRouting } from './user.routing';
import { CreateComponent } from './modals/create/create.component';
import { UpdateComponent } from './modals/update/update.component';
import { NgbModalModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './modals/delete/delete.component';
import { NgSelect2Module } from "ng-select2";


@NgModule({
  declarations: [UserComponent, CreateComponent, UpdateComponent,DeleteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRouting),
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    NgxDatatableModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelect2Module
  ],
  entryComponents: [
    CreateComponent,
    UpdateComponent,
    DeleteComponent
  ],
  providers: [NgbActiveModal,UpdateComponent,DeleteComponent,UserComponent],
  exports: [CreateComponent,UpdateComponent],
  bootstrap: [CreateComponent,UpdateComponent,DeleteComponent]
})
export class UserModule { }
