import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

    @Input() viewMode = false;

    @Input() currentToDo: ToDo = {
      name: '',
      description: '',
      priority: '',
      complete: false,
    };

    message = '';

    constructor(
      private todoService: TodoService,
      private route: ActivatedRoute,
      private router: Router) { }
    
    ngOnInit(): void {
        if (!this.viewMode) {
          this.message = '';
          this.getTodo(this.route.snapshot.params["id"]);
        }
    }
    getTodo(id: string): void {
      this.todoService.get(id)
        .subscribe({
          next: (data) => {
            this.currentToDo = data;
            console.log(data)
          },
          error: (e) => console.error(e)
        });
    }

    updateComplete(status: boolean): void {
      const data = {
        name: this.currentToDo.name,
        desciption: this.currentToDo.description,
        priority: this.currentToDo.priority,
        complete: status
      };

      this.message = '';

      this.todoService.update(this.currentToDo.id, data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.currentToDo.complete = status;
            this.message = res.message ? res.message : 'The status was updated'
          },
          error: (e) => console.error(e)
        });
    }

    updateTodo(): void {
      this.message = '';

      this.todoService.update(this.currentToDo.id, this.currentToDo)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.message = res.message ? res.message : 'This task was updated!';
          },
          error: (e) => console.error(e)
        })
    }

    deleteTodo(): void {
      this.todoService.delete(this.currentToDo.id)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.router.navigate(['/todos']);

          },
          error: (e) => console.error(e)
        })
    }
}
