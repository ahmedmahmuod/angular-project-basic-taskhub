import { Component } from '@angular/core';
import { HeaderComponent } from './Header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy.users';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectUserId?: string;

  get selectUser() {
    return this.users.find((user) => user.id === this.selectUserId)!;
  }

  selectedUser(id: string) {
    this.selectUserId = id;
  }
}
