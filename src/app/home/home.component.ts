import { Component } from '@angular/core';
import { Task } from '../models/task';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  taskName: any;
  taskList: Task[] = [];
  status: any = 'incompleted';
  task:any;
  taskStatus:any;

  addTask() {
    this.task = {title: this.taskName, id:1, status:this.status}
    this.taskList.push(this.task)
    this.taskName = '';
  }

  onChange(i:any) {
    this.task.isCompleted = !this.task.isCompleted;
    if(this.task.isCompleted) {
      this.taskList[i].status = 'Completed';
      this.task.isCompleted = false;
    }
  }
}
