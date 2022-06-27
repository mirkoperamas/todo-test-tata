export interface Tasks {
  id: number;
  title: string;
  completed: boolean;
  editing: boolean;
}

export class PreviewTask {
  public taskName: string;
  public taskStatus: boolean;
  constructor(taskName: string, taskStatus?: boolean) {
    this.taskStatus = taskStatus ? true : false;
    this.taskName = taskName;
  }
}
