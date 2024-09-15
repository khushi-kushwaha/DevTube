const mongoose = require("mongoose");
const { Schema } = mongoose;

const ChannelSchema = new Schema({
    name: { type: String, required: true, trim: true },
    uid: {type: String, sparse: true},
    email: {type: String, required: true, trim: true},
    handle: {type: String, required: true, trim: true},
    description: {type: String, trim: true},
    logoURL: {type: String, trim: true},
    bannerImage:{type:String, trim:true},
    createDate: {type: String , trim:true},
    subscribers : [{ type: Schema.Types.ObjectId, ref: "Chaneel"}],
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }], 
    subscriptions: [{type: Schema.Types.ObjectId, ref:"subscription"}],
    collectionId: { type: String, sparse: true },
    videos: [{ type: Schema.Types.ObjectId, ref:"video"}] 
});

ChannelSchema.index({ uid :1 }, { unique: true, partialFilterExpression:{
  uid: { $exists:true, $one:null }   
} } );

ChannelSchema.index({ handle:1}, {unique: true, partialFilterExp: { handdle: {$ne:null}}});

ChannelSchema.index({ collectionId:1 }, { unique :true, partialFilterExpression: {collectionId: {$exists:true, $ne: null}} });

ChannelSchema.index({ name:'text', description:'text' });

const Channel = mongoose.model("Channel", ChannelSchema);

module.exports= Channel;