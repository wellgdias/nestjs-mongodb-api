import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SupermarketModel } from '../models/supermarket.model';

@Injectable()
export class SupermarketService {
    constructor(@InjectModel('Supermarket') private readonly model: Model<SupermarketModel>) { }

    async get(): Promise<SupermarketModel[]> {
        return await this.model.find().exec();
    }

    async getById(id: string): Promise<SupermarketModel> {
        return await this.model.findById(id).exec();
    }

    async create(model: SupermarketModel) {
        const supermarket = new this.model(model);
        return await supermarket.save();
    }

    async update(id: string, model: SupermarketModel): Promise<SupermarketModel> {
        await this.model.updateOne({ _id: id }, model).exec();
        return this.getById(id);
    }

    async delete(id: string) {
        return await this.model.deleteOne({ _id: id }).exec();
    }
}