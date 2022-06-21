export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

export enum TaskStatus {
  INCOMPLETE = 'INCOMPLETE',
  DONE = 'DONE',
}
