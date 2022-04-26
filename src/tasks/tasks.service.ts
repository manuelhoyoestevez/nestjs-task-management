import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getTaskById(taskId: string): Task | undefined {
        return this.tasks.find(({ id }) => id === taskId);
    }

    deleteTaskById(id: string): Task {
        const task = this.getTaskById(id);

        if (!task) {
            return;
        }

        const index = this.tasks.indexOf(task);

        this.tasks.splice(index, 1);

        return task;
    }

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask({ title, description }: CreateTaskDto): Task {
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        };

        this.tasks.push(task);

        return task;
    }

    updateTaskStatusById(id: string, updateTaskDto: UpdateTaskDto): Task {
        const task = this.getTaskById(id);

        if (!task) {
            return;
        }

        task.status = updateTaskDto.status;

        return task;
    }
}
