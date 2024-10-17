import { TasksService } from './../tasks.service';
import { NewTaskType } from './../task/task.model';
import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  // Send event to Tasks
  @Output() close = new EventEmitter<void>();
  @Input({ required: true }) userId!: string;
  private tasksService = inject(TasksService);

  // On click to the close task form will be closed!
  onClickClose() {
    this.close.emit();
  }

  // Store Data from the form Tasks
  taskTitle = '';
  taskSummry = '';
  taskDate = '';

  // When clicked to the submit form Buttom will be
  onSubmitForm() {
    if (this.taskTitle !== '' && this.taskSummry !== '' && this.taskDate !== '') {
      this.tasksService.addTask(
        {
          title: this.taskTitle,
          summary: this.taskSummry,
          dueDate: this.taskDate,
        },
        this.userId
      );
      this.close.emit();
      
    } else {
      alert('Please Enter The Data Task!!')
    }

  }
}
