import { Body, ConsoleLogger, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Patch('/:id/status')
    updateTaskStatusById(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Task {
        return this.tasksService.updateTaskStatusById(id, updateTaskDto);
    }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id): Task {
        return this.tasksService.deleteTaskById(id);
    }
}
