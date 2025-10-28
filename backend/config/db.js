import mongoose, { skipMiddlewareFunction } from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://AWS-User:1234567890@aws-cluster.a1bxkce.mongodb.net/ForAWS').then(()=>console.log("DB Connected Shubhangam 2nd😊"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
//mongodb+srv://shubhangam2005singh_db_user:632014@globalcluster.9cv6fns.mongodb.net/Global