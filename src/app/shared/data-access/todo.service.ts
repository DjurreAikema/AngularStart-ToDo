import {Injectable, signal} from '@angular/core';
import {Todo} from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // We only want this class to be able to update the signal (# makes it private)
  #todos = signal<Todo[]>([]);

  // This can be read publicly
  todos = this.#todos.asReadonly();

  addTodo(todo: Todo) {
    this.#todos.update((todos) => [...todos, todo]);
  }
}
