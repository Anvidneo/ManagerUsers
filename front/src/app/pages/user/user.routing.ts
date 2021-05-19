import { Routes } from "@angular/router";

import { UserComponent } from "./user.component";

export const UserRouting: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: UserComponent
      }
    ]
  }
];
