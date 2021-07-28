import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Planet = new Schema(
  {
    color: { type: String, required: true },
    size: { type: Number, required: true },
    life: { type: Boolean, required: true },
    moonId: { type: ObjectId, ref: 'Moon' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Planet
