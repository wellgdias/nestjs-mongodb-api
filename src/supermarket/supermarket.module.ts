import { Module } from '@nestjs/common';
import { SupermarketController } from './controllers/supermarket.controller';
import { SupermarketService } from './services/supermarket.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SupermarketSchema } from './schemas/supermarket.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Supermarket', schema: SupermarketSchema }])],
    controllers: [SupermarketController],
    providers: [SupermarketService],
})
export class SupermarketModule {}
