// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: String,
//     image:{
//         type: String,
//         default:"https://media.istockphoto.com/id/1198320951/photo/sunset-at-the-beach.jpg?s=1024x1024&w=is&k=20&c=Fd34Xna7d7UWhzDVLwX7M6WTChOI0-6L6sRvM39iGXg=" ,

//         set: (v) => v === "" ? "https://media.istockphoto.com/id/1198320951/photo/sunset-at-the-beach.jpg?s=1024x1024&w=is&k=20&c=Fd34Xna7d7UWhzDVLwX7M6WTChOI0-6L6sRvM39iGXg=" : v,
//     },
//     price: Number,
//     location: String,
//     country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;

const mongoose = require("mongoose");
// const review = require("./review");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,

  image: {
    filename: String,
    url: String,
  },

  price: Number,
  location: String,
  country: String,
  reviews : [
    {
      type : Schema.Types.ObjectId,
      ref: "Review",
    }
  ],
  owner: {
    type:Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    },
  },
});

listingSchema.post("findOneAndDelete",async(listing) =>{
  if(listing){
    await Review.deleteMany({_id: {$in: listing.reviews}});
  }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;