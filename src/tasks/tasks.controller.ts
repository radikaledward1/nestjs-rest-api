import { Controller, Get, Param } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getAllTasks() {
    return 'Get all tasks';
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return `Get task by id: ${id}`;
  }
}
