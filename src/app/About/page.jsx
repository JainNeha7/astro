import Follow from '@/components/Follow'
import React from 'react'

function page() {
  return (
 <section className='text-black bg-slate-50'>

<div className="hero pt-4  ">
  <div className="hero-content  flex-col  lg:flex-row-reverse">
    <div className='lg:-mt-96 relative '>

    <img src="/about.png" className="max-w-full z-0 relative lg:-mt-40 md:max-w-lg md:ml-2 object-contain mb-2 rounded-lg shadow-2xl" />
    </div>
    <div>
      <h1 className="text-4xl  font-bold">Cozzmo by Neha Jain</h1>
      <div className="w-36 h-1 border-b-4 border-orange-500 mt-1 rounded-2xl"></div>
      <p className="py-4 text-sm md:text-md ">Welcome to Cozzmo by Neha Jain, your destination for spiritual guidance and personal transformation. Neha Jain, our seasoned and healer, brings over two decades of experience to the table, assisting individuals on their journey towards self-discovery and empowerment.</p>
    
      <p className="py-4 text-sm md:text-md ">Neha's approach combines a deep understanding of celestial dynamics with a nurturing attitude towards healing. She has cultivated a reputation for insightful readings, compassionate counseling, and transformative healing sessions.</p>
     
     <p className="py-4 text-sm md:text-md ">At Cozzmo by Neha Jain, we offer a variety of services tailored to your spiritual needs:</p>

     <ul className='list-disc ml-4 py-4 text-sm md:text-md '>
      <li className='m-1'><span className='bg-yellow-200 p-1 -pr-1 font-semibold'>Tarot Sessions: </span>Gain insights and guidance through tarot card readings.</li>
      <li className='m-1'><span className='bg-yellow-200 p-1 -pr-1 font-semibold'>Oracle Card Readings:</span>Delve deeper into your spiritual journey with oracle card readings.</li>
      <li className='m-1'><span className='bg-yellow-200 p-1 -pr-1 font-semibold'>Past Life Readings:</span>Explore your past incarnations and uncover patterns or unresolved issues.</li>
      <li className='m-1'><span className='bg-yellow-200 p-1 -pr-1 font-semibold'>Psychic Sessions: </span>Tap into intuitive abilities for insights and guidance.</li>
      <li className='m-1'><span className='bg-yellow-200 p-1 -pr-1 font-semibold'>Akashic Record Readings: </span>Access the Akashic Records for profound insights.</li>
      <li className='m-1'><span className='bg-yellow-200 p-1 -pr-1 font-semibold'>Mediumship Sessions:</span> Communicate with spirits and receive messages from the other side.</li>
     </ul>

     <p className="py-4 text-sm md:text-md ">Neha's clients praise her for her authenticity, wisdom, and ability to provide practical guidance for navigating life's challenges. Whether you're seeking clarity, healing, or empowerment, cozzmo By Neha is here to support you on your spiritual journey.</p>
     <p className="py-4 text-sm md:text-md ">Neha's journey into the realms of astrology and healing has equipped her with the wisdom and intuition to address a diverse range of challenges, helping her clients navigate life's complexities with clarity and confidence. With each consultation, Neha brings a unique blend of ancient wisdom, intuitive insight, and practical guidance, empowering her clients to unlock their inner potential and embrace the opportunities that lie ahead.</p>

     <p className="py-4 text-sm md:text-md ">With over two decades of experience, Neha has cultivated a reputation for her insightful readings, compassionate counseling, and transformative healing sessions. Her approach combines a deep understanding of celestial dynamics with a nurturing attitude towards healing, making her a trusted guide and mentor for those seeking spiritual guidance and personal transformation.</p>

     <p className="py-4 text-sm md:text-md ">At cozzmo By Neha, we are committed to providing a safe and supportive space for individuals to explore their spiritual journey, gain insights, and find healing and empowerment. Our mission is to help you unlock your inner potential, embrace your authenticity, and live a life aligned with your highest purpose.</p>

     <p className="py-4 text-sm md:text-md ">Get in touch with Neha today to book a session and embark on a journey of self-discovery and transformation.</p>
     
     

     <Follow/>
    
    </div>
   
  </div>

</div>
</section>
  )
}

export default page
