import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todo: ToDo = {
    name: '',
    description: '',
    priority: '',
    complete: false
  };
  submitted = false;

  constructor(private todoService: TodoService){ }

  ngOnInit(): void { 
  }

  saveTodo(): void {
    const data = {
      name: this.todo.name,
      description: this.todo.description,
      priority: this.todo.priority,
      complete: this.todo.complete
    }
    this.todoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true
        },
        error: (e) => console.error(e)
      });
  }

  newTodo(): void {
    this.submitted = false;
    this.todo = {
      name: '',
      description: '',
      priority: '',
      complete: false
    }
  }
}





// private name: string;
// private description: string;
// private priority: string;
// private complete: boolean;