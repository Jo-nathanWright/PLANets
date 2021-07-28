import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Moon = new Schema(
  {
    color: { type: String, required: true },
    size: { type: Number, required: true },
    speciesId: { type: ObjectId, ref: 'Species' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Moon
