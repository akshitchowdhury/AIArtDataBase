import mongoose from "mongoose";



const ArtSchema = new mongoose.Schema(
  {
    imageurl: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
    }
    
  },
  { timestamps: true }
);

const Art = mongoose.models.Art || mongoose.model("Art", ArtSchema);
export default Art;
