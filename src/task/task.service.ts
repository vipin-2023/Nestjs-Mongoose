import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
    constructor(@InjectModel('Task') private readonly taskModel:Model<Task>){}
    
    async getAllTasks():Promise<Task[]>{
        return await this.taskModel.find().exec();
    }

    async createTask(task:Task):Promise<Task>{
      const newTask = new this.taskModel(task);
      return await newTask.save();
    }

    async updateTask(id:string,task:Partial<Task>):Promise<Task>{
        const existingTask = await this.taskModel.findByIdAndUpdate(id,task,{new:true})
        if(!existingTask){
            throw new NotFoundException(`Task with ID ${id} not found `)
        }
        return existingTask;
    }

    async deleteTask(id:string):Promise<void>{
        const result = await this.taskModel.deleteOne({_id:id}).exec();
        if(result.deletedCount === 0){
            throw new NotFoundException( `Task with ID ${id} not found`)
        }
          
    }
}
