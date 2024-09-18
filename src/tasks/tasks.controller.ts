import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { NewTaskDto } from './dtos/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post('new')
  createNewTask(@Body() task: NewTaskDto) {
    return this.tasksService.createTask(task.title, task.description);
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return `Get task by id: ${id}`;
  }

  @Delete(':id')
  deleteTaskByid(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }
}
