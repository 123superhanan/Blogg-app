import mongoose from "mongoose";

uri="mongodb+srv://abdulhananabbasi50:POBcLSr0udxd0Wjh@cluster0.mrm7pfp.mongodb.net/abdulhananabbasi50?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = ( ) => {

    return mongoose.connect('uri',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

}

module.exports = connectDb;