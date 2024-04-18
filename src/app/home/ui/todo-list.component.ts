import {Component, Input} from '@angular/core';
import {Todo} from '../../shared/interfaces/todo';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  template: `
    <ul>
      @for (todo of todos; track $index) {
        <li>
          <a>{{ todo.title }}</a>
        </li>
      } @empty {
        <li>Nothing to do!</li>
      }
    </ul>
  `,
})
export class TodoListComponent {

  @Input({required: true}) todos!: Todo[];

}
