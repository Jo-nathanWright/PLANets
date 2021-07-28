import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Species = new Schema(
  {
    avgHeight: { type: Number, required: true },
    intelligence: { type: Boolean, required: true },
    alignment: { type: String, enum: ['evil', 'nuetrul', 'good'], required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Species
