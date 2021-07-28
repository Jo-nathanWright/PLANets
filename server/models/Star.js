import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Star = new Schema(
  {
    size: { type: Number, required: true },
    brightness: { type: String, enum: ['Blinding', 'Bright', 'Dull'], required: true },
    heat: { type: Number, required: true },
    planetId: { type: ObjectId, ref: 'Planet' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Star
