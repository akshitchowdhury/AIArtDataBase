import mongoose from "mongoose";

const connectMongoDb = async()=>{
    try {
        await mongoose.connect(`${process.env.NEXT_PUBLIC_MONGODB_URI}`)
        console.log("connected to mongo DB")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDb;