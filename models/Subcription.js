const mongoose= require("mongoose");
const { Schema } = mongoose;

const SubcriptionSchema= new Schema({
    subscriber:{type:Schema.Types.ObjectId, ref:"Chennel", required: true},
    channel:{type:Schema.Types.ObjectId, required:true, re:"Channel"},
    mode:{type:String, enum:["silent", "notification"], required: true } 
})

const subscriber = mongoose.model("Subscription", SubscriptionSchema)

module.exports= Subcription;
