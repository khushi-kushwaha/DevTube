const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagSchema = new Schema({
    name:{ type :String , required: true, trim:true, unique:true },
    video:[{ type:Schema.Types.ObjectId, ref:"Video"}],
    channels:[{type:Schema.Types.Objectd, ref:"Channel"}]    
});


const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;