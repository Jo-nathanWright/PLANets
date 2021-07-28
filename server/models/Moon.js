import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Moon = new Schema(
  {
    color: { type: String, required: true },
    size: { type: Number, required: true },
    planetId: { type: ObjectId, ref: 'Planet', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Moon.virtual('planet', {
  localField: 'planetId',
  ref: 'Planet',
  foreignField: '_id',
  justOne: true
})

export default Moon
