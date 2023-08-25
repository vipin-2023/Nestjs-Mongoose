import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService:TaskService){}

    @Get()
    getAllTasks():Promise<Task[]>{
        return this.taskService.getAllTasks();
    }
    @Post()
    createTask(@Body() task:Task ):Promise<Task>{
        return this.taskService.createTask(task);
    }
    @Put(":id")
    updateTask(@Param('id')id:string,@Body() task:Partial<Task>):Promise<Task>{
        return this.taskService.updateTask(id,task);
    }
    @Delete(":id")
    deleteTask(@Param('id') id:string):Promise<void>{
        return this.taskService.deleteTask(id);
    }












    
}
