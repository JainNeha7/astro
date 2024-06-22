"use client"

import React, { useEffect } from "react";



import axios from "axios";
import Follow from "@/components/Follow";

function Contact() {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    message: "",
})


const handleform = async()=>{
  try{
    const response = await axios.post("/api/contact",user);
    console.log("form submission success", response.data);
    alert("Response Submitted Seccessfully")
// toast.success("Form submitted successfully")
  }catch(error){
  console.log("Submission failed", error.message);
 alert("please fill the details properly")
  }
}

// useEffect(() => {
  
// }, [user]);
  return (
    <div className="hero p-4 bg-gradient-to-r  from-orange-200 to-orange-400">
   
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center flex-none text-black lg:mr-8 lg:text-right">
      <h1 className="text-5xl font-bold">Contact Us</h1>
      <div className="w-36 h-1 border-b-4 border-white mt-1 rounded-2xl"></div>
      <p className="p-2 mt-4 bg-yellow-300  text-center font-semibold">We will Contact you Soon</p>

      <div className="bg-slate-200 mt-2 rounded ">
        <div className="flex text-center p-1 ">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="30" viewBox="0 0 50 50">
<path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"></path>
</svg>
<h3 className="mt-1">9721423456</h3>
</div>
<div className="flex text-center p-1 ">
<svg xmlns="http://www.w3.org/2000/svg" className="size-7 ml-1"  viewBox="0 0 128 96"  width="30" height="30" id="email"><g><path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path></g></svg>
<h3 className="mt-1  pl-2">jneha0459@gmail.com</h3>
</div>
<div className="flex text-center p-1 ">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 mb-1 ml-1">
  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>

<h3 className="mt-1 pl-1 pr-4"> 76/577 , coolie Bazar, Kanpur Nagar, <br/>Uttar Pradesh, India</h3>
</div>



      

    </div>

    <div className="mt-3">
      <Follow/>
    </div>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    
        
      <div className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input  placeholder="name" className="input input-bordered"   id="name"
            type="text"
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
            required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  placeholder="email" className="input input-bordered" required 
          id="email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({...user, email: e.target.value})}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <input type="text" placeholder="write your message" className="input input-bordered" required 
          id="message"
          
          value={user.message}
          onChange={(e) => setUser({...user, message: e.target.value})}/>
          <label className="label">
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary"  onClick={handleform}>Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
    
   
  
  )
}

export default Contact
