import { Injectable } from '@angular/core';
import { PreviewTask } from '../pages/tasks-view/task-view-interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private storageKey = 'Task';

  public getAllTasks(): PreviewTask[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }
  public saveAllTasks(tareas: PreviewTask[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(tareas));
  }
}
