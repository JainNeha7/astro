
'use client'
import React from 'react'
import axios from 'axios'


function Modal19() {
  

  const [app, setApp] = React.useState({
    Service:"Vastu healing",
    price:"₹ 7777",
    name:"",
    email:"",
    phone:"",
    date:""

})

const handleSubmit = async()=>{
  try{
   
    const response = await axios.post("/api/booking",app);
    console.log("form submission success", response.data);
    alert("Payment Successfull");
    

// toast.success("Form submitted successfully")
  }catch(error){
  console.log("Submission failed", error.message);
  alert('Please fill the form properly');
  }
}

const handleForm = (e) => {
  e.preventDefault();
  // You can add your form submission logic here

  // Clear the form data
  setApp({
    Service:"Vastu healing",
    price:"₹ 7777",
    name: '',
    email: '',
    phone: '',
    date: '',
  });
};

  return (
    <>
    <div>
    <dialog id="my_modal_19" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={console.log('close')}>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Vastu healing</h3>
    <p className="py-4">Vastu healing for a healer involves optimizing the energy flow in their workspace to enhance healing abilities. 🏡✨ This includes positioning their treatment table or chair in alignment with Vastu principles, using calming colors like blue or green, and incorporating natural elements like plants for positive energy. 🔮💫 Creating a serene and harmonious environment can amplify the healer's healing powers and promote a sense of balance and well-being for both the healer and their clients. 🌿🌟
</p>

   <div> <form onSubmit={handleForm} className='space-y-4'>
    <div >
        <label  className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name"  value={app.name}
            onChange={(e) => setApp({...app, name: e.target.value})} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
      </div>
      <div>
        <label  className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email"  value={app.email}
            onChange={(e) => setApp({...app, email: e.target.value})} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
      </div>
      <div>
        <label  className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input type="tel" id="phone" name="phone"  value={app.phone}
            onChange={(e) => setApp({...app, phone: e.target.value})} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
      </div>
      <div>
        <label   className="block text-sm font-medium text-gray-700">Appointment Date</label>
        <input type="date" id="date" name="date" value={app.date}
            onChange={(e) => setApp({...app, date: e.target.value})} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
         Pay now
        </button>
      </div>
    </form>
  </div>
  </div>
</dialog>
    </div>
  
</>
  )
}

export default Modal19

