const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
const atlat = "mongodb+srv://huongvxph40510:huongvxph40510@cluster0.1dczug4.mongodb.net/AND103";
const connect = async() =>{
    try{
        await mongoose.connect(atlat,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('connect success');
    }catch(error){
        console.log(error);
        console.log('connect fail');
    }
}
module.exports = {connect}