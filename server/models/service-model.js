const {Schema,model}=require('mongoose')
const serviceSchema=new Schema({
    type:{type:String,required:true},
    writer:{type:String,required:true},
    content:{type:String,required:true},
});
const Peom=new model("Service",serviceSchema)
module.exports=Peom