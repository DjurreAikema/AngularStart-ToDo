import {Component, computed, inject, Signal} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {TodoService} from "../shared/data-access/todo.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {Todo} from "../shared/interfaces/todo";

@Component({
  standalone: true,
  selector: 'app-detail',
  template: `
    <h2>Detail</h2>
    @if (todo(); as todo) {
      <h2>{{ todo.title }}</h2>
      <p>{{ todo.description }}</p>
    } @else {
      <p>Could not find todo...</p>
    }
  `,
})
export default class DetailComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private todoService: TodoService = inject(TodoService);

  private paramMap: Signal<ParamMap | undefined> = toSignal(this.route.paramMap);

  public todo: Signal<Todo | undefined> = computed(() =>
    this.todoService
      .todos()
      .find((todo: Todo): boolean => todo.id === this.paramMap()?.get('id'))
  );
}
