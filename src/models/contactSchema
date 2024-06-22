import mongoose from "mongoose"


const contact = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
    
  },
 
  message: {
    type: String,
    required: true,
    
  },
 
  
});
const contactSchema = mongoose.models.contacts || mongoose.model("contacts", contact);

export default contactSchema;