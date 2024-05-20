import mongoose from "mongoose"

const Appointement = new mongoose.Schema({
  Service:{
   type: String,
   
  },
  category:{
  type: String,

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
   
    
  },
  date: {
    type: String,
    required: true,
  },
  
 
  
});
const AppointementSchema = mongoose.models.bookings || mongoose.model("bookings", Appointement);

export default AppointementSchema;