import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Task 1 description',
      status: TaskStatus.OPEN,
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Task 2 description',
      status: TaskStatus.DONE,
    },
    {
      id: '3',
      title: 'Task 3',
      description: 'Task 3 description',
      status: TaskStatus.IN_PROGRESS,
    },
  ];
  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string): string {
    const newTask: Task = {
      id: v4(),
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(newTask);
    return newTask.id;
  }
}
