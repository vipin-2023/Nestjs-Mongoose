import mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
    title:String,
    description:String,
    done:Boolean,

});

export interface Task extends mongoose.Document{
    id:string,
    title:string,
    description:string,
    done:boolean;
}