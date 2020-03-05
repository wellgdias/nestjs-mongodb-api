import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SupermarketModel } from '../models/supermarket.model';
import { SupermarketService } from '../services/supermarket.service';

@Controller('supermarkets')
export class SupermarketController {
    constructor(private readonly service: SupermarketService) { }

    @Get()
    async getAll(): Promise<SupermarketModel[]> {
        return this.service.get();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<SupermarketModel> {
        return this.service.getById(id);
    }

    @Post()
    async createt(@Body() model: SupermarketModel) {
        this.service.create(model);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() model: SupermarketModel): Promise<SupermarketModel> {
        return this.service.update(id, model);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.service.delete(id);
    }
}
