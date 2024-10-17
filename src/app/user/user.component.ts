import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class UserComponent {
  @Input() selected!: boolean; 
  @Input() user!: User;
  @Output() currentUser = new EventEmitter();

  get imgPath() {
    return '../../assets/users/' + this.user.avatar;
  }

  selectUser() {
    this.currentUser.emit(this.user.id);
  }
}
