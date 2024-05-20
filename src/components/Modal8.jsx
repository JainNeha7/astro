
'use client'
import React from 'react'
import axios from 'axios'



function Modal8() {
  
// const  [selected, setSelected]= React.useState('');
  const [app, setApp] = React.useState({
    Service:`PLANETRY SHIFTINGS HEALINGS`,
    category:"",
    price:"₹ 5555",
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
    console.log(selected);

// toast.success("Form submitted successfully")
  }catch(error){
  console.log("Submission failed", error.message);

  }
}

const handleForm = (e) => {
  e.preventDefault();
  // You can add your form submission logic here

  // Clear the form data
  setApp({
    Service:"PLANETRY SHIFTINGS HEALINGS",
    category:'',
    price:"₹ 5555",
    name: '',
    email: '',
    phone: '',
    date: '',
  });
  // setSelected('')
};

  return (
    <>
    <div>
    <dialog id="my_modal_8" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={console.log('close')}>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">PLANETRY SHIFTINGS HEALINGS</h3>
    <p className="py-4">Planetary shifting healings" typically refer to the influence of celestial bodies like the Sun, Moon, and planets on our lives and well-being.
    <br></br>
   Here's a brief explanation with emojis: <br/>🌞 Sun: Boosts confidence and clarity. <br/> 🌛 Moon: Brings emotional balance and inner peace.<br/> ♃ Jupiter: Enhances abundance and wisdom.<br/> ♅ Uranus (Rahu): Sparks innovation and change.<br/> ☿ Mercury (Budh): Improves mental clarity and communication.<br/> ♀️ Venus (Shukra): Nurtures love and harmony.<br/> ☋ Neptune (Ketu): Facilitates spiritual awakening and release.<br/> ♄ Saturn (Shani): Builds stability and resilience.<br/> Mars (Mangal): Builds Name and Fame <br/>
1 sitting </p>
   <div> <form onSubmit={handleForm} className='space-y-4'>
   
   <div className="mb-4">
        
        <select
          id="category"
          name="category"
          value={app.category}
          onChange={(e) => setApp({...app, category:e.target.value})}
          required
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="" >Choose </option>
          <option value="Sun">Sun: For Career & Oppertunity</option>
          <option value="Moon">Moon: Relationship & Marriage</option>
          <option value="Jupiter">Jupiter: Studies, Family & Social Association</option>
          <option value="Uranus">Uranus: Stability,cash & Liquidity</option>
          <option value="Mercury">Mercury: Achievement & Control </option>
          <option value="Venus">Venus: Luxuries</option>
          <option value="Neptune">Neptune: Gain & Profit </option>
          <option value="Saturn">Saturn: Knowledge</option>
          <option value="Mars">Mars: Name & Fame </option>
        </select>
      </div>
      
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

export default Modal8
