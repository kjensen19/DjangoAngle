import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos?: ToDo[];
  currentToDo: ToDo = {};
  currentIndex = -1;
  name: any;
  
 

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
      this.retrieveTodos()
  }

  retrieveTodos(): void {
    this.todoService.getAll()
      .subscribe({
        next: (data) => {
          this.todos = data;
          console.log(data)
        },
        error: (e) => console.log(e)
      });
  }

  refreshList(): void {
    this.retrieveTodos();
    this.currentToDo = {};
    this.currentIndex = -1
  }

  setActiveTodo(todo: ToDo, index: number): void {
    this.currentToDo = todo;
    this.currentIndex = index
  }

  removeAllTodo(): void {
    this.todoService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentToDo = {};
    this.currentIndex = -1;

    this.todoService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.todos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}




// name: string;
// description: string;
// priority: string;
// complete: boolean;