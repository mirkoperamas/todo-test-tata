import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TasksViewComponent } from "./tasks-view.component";

const routes: Routes = [
  {
    path: "",
    component: TasksViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskPageRoutingModule {}
