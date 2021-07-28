import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Galaxy = new Schema(
  {
    color: { type: String, required: true },
    size: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Galaxy
