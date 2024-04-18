import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {CreateTodo} from "../../shared/interfaces/todo";

@Component({
  standalone: true,
  selector: 'app-todo-form',
  template: `
    <form [formGroup]="todoForm" (ngSubmit)="todoSubmitted.emit(todoForm.getRawValue())">
      <input type="text" formControlName="title" placeholder="title..."/>
      <input type="text" formControlName="description" placeholder="description..."/>
      <button type="submit" [disabled]="!todoForm.valid">Add todo</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class TodoFormComponent {
  @Output() todoSubmitted: EventEmitter<CreateTodo> = new EventEmitter<CreateTodo>();

  private fb: FormBuilder = inject(FormBuilder);

  todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: [''],
  });
}
