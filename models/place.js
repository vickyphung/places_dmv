
const { Schema } = require("mongoose");
const mongoose = require("mongoose");


const locationSchema = mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip:{ type: Number, required: false }
},
{
  _id: false
});


const placeSchema = new Schema({
  name: { type: String, required: true, unique: true },
  location: {
    type: locationSchema,
    required: true,
  },
  hours: { type: String, required: false },
  tags: [ { type: String, required: true } ],
  reviews: [ { type: Schema.Types.ObjectId, ref: 'review', required: false } ],
  favorites:  { type: Number, default: 0, required: false, unique: true } ,
  favorite_users: [ { type: Schema.Types.ObjectId, ref: 'user', unique: true, required: false } ]
})






const location = mongoose.model('location', locationSchema)
const place = mongoose.model('place', placeSchema);

module.exports = place, location;



