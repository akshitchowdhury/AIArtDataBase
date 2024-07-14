import mongoose from "mongoose";

const connectMongoDb = async()=>{
    try {
        await mongoose.connect("mongodb+srv://raikamiryu:oxGRL2Y40kttzOZv@cluster0.ikff7sr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("connected to mongo DB")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDb;