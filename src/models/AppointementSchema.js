import mongoose from "mongoose"


const Appointement = new mongoose.Schema({
  Service:{
   type: String,
   
  },
  category:{
  type: String,
 required: false,
  },
  price:{
    type: String,
    
  },
  name: {
    type: String,
    required: true,
    // trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
 
  phone: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{10}$/, 'Please fill a valid 10-digit phone number'],
  },
  date: {
    type: String,
    required: true,
  },
  
 
  
});
const AppointementSchema = mongoose.models.bookings || mongoose.model("bookings", Appointement);

export default AppointementSchema;