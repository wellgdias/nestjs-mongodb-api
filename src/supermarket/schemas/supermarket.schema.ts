import * as mongoose from 'mongoose';

export const SupermarketSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    latitude: Number,
    longitude: Number,
});