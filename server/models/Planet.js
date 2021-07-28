import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Planet = new Schema(
  {
    color: { type: String, required: true },
    type: { type: String, enum: ['gas', 'solid', 'liquid'], required: true },
    size: { type: Number, required: true },
    life: { type: Boolean, required: true },
    starId: { type: ObjectId, ref: 'Star' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Planet.virtual('star', {
  localField: 'starId',
  ref: 'Star',
  foreignField: '_id',
  justOne: true
})

export default Planet
