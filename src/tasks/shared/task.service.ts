import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 
import { Task } from './task';

@Injectable()
export class TaskService {
    constructor(
        @InjectModel('Task')
        private readonly taskModel: Model<Task>
    ) {}

    async getAll(): Promise<Task[]> {
        return await this.taskModel.find().exec();
    }

    async getById(id: string): Promise<Task> {
        return await this.taskModel.findById(id).exec();
    }

    async create(task: Task): Promise<Task> {
        const taskCreated = new this.taskModel(task);
        return await taskCreated.save();
    }

    async update(id: string, task: Task): Promise<Task> {
        await this.taskModel.updateOne({ _id: id }, task).exec();
        return this.getById(id);
    }

    async delete(id: string) {
        return await this.taskModel.deleteOne({ _id: id }).exec();
    }
}
