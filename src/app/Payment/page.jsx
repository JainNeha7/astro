import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <section > 
      <div className="hero bg-gradient-to-r text-black font-bold from-orange-300  to-orange-400">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <Image src="/paymentmethod.jpeg" width={400} height={400} /> */}
    <div className="mockup-phone border-primary">
  <div className="camera"></div> 
  <div className="display">
    <div className="artboard artboard-demo phone-1">
    <Image src="/paymentmethod.jpeg" width={400} height={400} />
    </div>
  </div>
</div>
    
    <div className=' mt-8 md:mr-20 lg:mr-36'>
        <div >
<button className="btn btn-outline bg-white font-bold text-black">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 color-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>

  Read Carefully
  
</button></div>
        <div>
    <ul className="steps steps-vertical">
  <li className="step step-primary">Scan the QR code</li>
  <li className="step step-primary">Make the payment</li>
  <li className="step step-primary">Share the Screnshot with Your name<br/> on WhatsApp -- 9721423456 </li>
 
</ul>
</div>
<div className='flex bg-white rounded-lg p-6 my-6 '> 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 mr-2 mt-4 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

<div className='text-lg  '>Your payments are secured <br/>with encrypted payment<br/> gateways</div>
</div>
    </div>
  </div>
</div>
    </section>
  )
}

export default page
