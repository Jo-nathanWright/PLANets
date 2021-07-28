import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Galaxy = new Schema(
  {
    color: { type: String, required: true },
    size: { type: Number, required: true },
    type: { type: String, required: true },
    starId: { type: ObjectId, ref: 'Star' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Galaxy
