import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isShowTask = false;

  // constructor(private taskService: TasksService) {}
  private taskService = inject(TasksService);

  // Get user Select current
  get userTaskSelect() {
    return this.taskService.userTaskSelect(this.userId);
  }

  // Show Task
  onClickAddTask() {
    this.isShowTask = true;
  }
  // Close Task
  onClickCloseTask() {
    this.isShowTask = false;
  }
}
