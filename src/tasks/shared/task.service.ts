import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
    tasks: Task[] = [
        { id: 1, description: 'Tarefa 1', completed: false },
        { id: 2, description: 'Tarefa 1', completed: false },
        { id: 3, description: 'Tarefa 1', completed: false },
        { id: 4, description: 'Tarefa 1', completed: false },
        { id: 5, description: 'Tarefa 5', completed: false },
        { id: 6, description: 'Tarefa 6', completed: false },
        { id: 7, description: 'Tarefa 7', completed: false },
        { id: 8, description: 'Tarefa 8', completed: false },
        { id: 9, description: 'Tarefa 9', completed: false },
        { id: 10, description: 'Tarefa 10', completed: false },
    ]

    getAll(): Task[] {
        return this.tasks;
    }

    getById(id: number): Task {
        const task = this.tasks.find(t => t.id == id);
        return task;
    }

    create(task: Task): Task {
        let lastId = 0;
        if (this.tasks.length > 0) {
            lastId = this.tasks[this.tasks.length - 1].id;
        }
        task.id = lastId + 1;
        this.tasks.push(task);

        return task;
    }

    update(task: Task): Task {
        const taskUpdate = this.getById(task.id);
        if (taskUpdate) {
            taskUpdate.description = task.description;
            taskUpdate.completed = task.completed;
        }

        return task;
    }

    delete(id: number): void {
        const index = this.tasks.findIndex(t => t.id == id);
        if (index) {
            this.tasks.splice(index, 1);
        }
    }
}
