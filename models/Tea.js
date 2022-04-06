import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const teaSchema = new Schema({
    name:{type:String},
    description:{type:String},
    dateCreated:{type:Date, default:Date.now},
    price:{type:Number}
});

const Tea = model('Tea', teaSchema);

export default Tea;