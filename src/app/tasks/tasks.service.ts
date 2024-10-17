import { type NewTaskType } from './task/task.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor () {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  // List of the all tasks of users
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master .Net',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master UI/UX',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  // Get user Select current
  userTaskSelect(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  // Add Task
  addTask(newTask: NewTaskType, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });
    this.saveTasksToLocal();
  }

  // Delet the task completed
  deletedTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasksToLocal();
  }

  // add tasks to localStorage 
  private saveTasksToLocal () {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
