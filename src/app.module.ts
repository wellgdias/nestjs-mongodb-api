import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { SupermarketModule } from './supermarket/supermarket.module';
import 'dotenv/config';

@Module({
  imports: [
    SupermarketModule,
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT || 27017}/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }),
  ],
})
export class AppModule { }
