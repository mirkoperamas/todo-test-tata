import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TaskService } from "src/app/services/task.service";
import { PreviewTask } from "./task-view-interface";

@Component({
  selector: "app-tasks-view",
  templateUrl: "./tasks-view.component.html",
  styleUrls: ["./tasks-view.component.scss"],
})
export class TasksViewComponent implements OnInit {
  public initial: string;
  public userLogged: string | null;
  public tasks: PreviewTask[];

  constructor(
    private tasksService: TaskService,
    private readonly router: Router
  ) {
    this.initial = "";
    this.tasks = [];
  }

  public ngOnInit() {
    this.getAllTasks();
    this.userLogged = localStorage.getItem("form");
  }

  public saveTask() {
    const newTask = new PreviewTask(this.initial);
    this.tasks.push(newTask);
    this.tasksService.saveAllTasks(this.tasks);
    this.getAllTasks();
  }

  public delete(i: number) {
    const confirmAlert = confirm("Delete?");
    if (!confirmAlert) {
      return;
    }

    this.tasks.splice(i, 1);
    this.tasksService.saveAllTasks(this.tasks);
  }

  public changeStatus() {
    this.tasksService.saveAllTasks(this.tasks);
  }

  public getAllTasks() {
    this.tasks = this.tasksService.getAllTasks();
  }

  public closeSession() {
    localStorage.removeItem("form");
    this.router.navigate(["login"]);
  }
}
