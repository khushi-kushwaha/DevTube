const { upload } = required('@lib/db');
const mongoose= required('mongoose');

const{ Schema} = mongoose;

const videoSchema = new Schema({
    videoId:{ type:String, required:true},
    title:{type:String, required:true},
    filename:{ type:String, required:true},
    uid: {type:String, required:true, unique:true},
    description:{type:String, default:''},
    likes:[{ type: Schema.Type.ObjectId, ref:"Channel"}],
    isDraft:{type:Boolean, default:false},
    isShort:{type:Booleam, default:false},
    dislikes:[{type:Schema.type.ObjectId, ref:"Channel"}],
    commentsStatus:{ type:Booleam , default:false},
    comments:[{ type:Schema.Types.ObjectId, ref:'Comment'}],
    tags:[{Type:Schema.Types.ObjectId, ref:'Tag'}],
    hashtags:[{ type:Schema.Types.ObjectId, ref:'Tag'}], 
    uploadDate:{type:Date},
    length:{type:Number},
    aspect: { type:Number },
    category:{ type:String},
    privateSettings:{ type:String, trim:true, default: 'private', enum:['public','private','unlisted']},
    viewsEnabled:{ type:Boolean,default:false},
    status: {type:String,trim:true, default:'Uploading'},
    channel:{type:Schema.Types.ObjectId, ref:"Channel"},

}, {timestamps: true});

videoSchema.index({ title: 'text', description: 'text'});
videoSchema.index({ channel:1});
videoSchema.index({length:1});
videoSchema.index({privarySettings:1});
videoSchema.index({uploadDate:1});

const video = mongoose.model("vedio", videoSchema);

module.exports = video; 