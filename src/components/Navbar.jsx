"use client"

import Image from 'next/image'
import Link from 'next/link'
function Navbar() {

  return (
    <div className='bg-yellow-100'>
      <div className="navbar relative justify-between shadow-xl bg-yellow-200 rounded-lg  flex-auto md:flex">
   <Image src="/logo.png" width={100} height={100} alt='logo' className='ml-8  -m-3'></Image>
   <div className='md:flex font-semibold  px-8 '>
    
    {/* <Link className=' hover:bg-orange-400 p-3 hover:font-bold text-lg cursor-pointer' href="/">Home</Link> */}
    <div className=" dropdown dropdown-hover">
  <Link  href="/" className="font-bold  mx-1  md:mx-10  rounded-lg   hover:bg-orange-400 p-3 hover:font-bold text-lg cursor-pointer">Home</Link>
  <ul  className="dropdown-content z-10 absolute menu p-2  w-20">
    <Link href="/#journey" className=' hover:bg-white bg-orange-400 p-3 hover:font-bold text-lg  rounded-md cursor-pointer'>Journey</Link>
    <Link href="/#services" className=' hover:bg-white bg-orange-400 p-3 hover:font-bold text-lg rounded-md cursor-pointer' >Services</Link>
    <Link href="/#review" className=' hover:bg-white bg-orange-400 p-3 hover:font-bold text-lg rounded-md cursor-pointer' >Reviews</Link>
    <Link href="/#achievements" className=' hover:bg-white bg-orange-400  p-3 hover:font-bold text-lg rounded-md cursor-pointer' >Achievements</Link>
  </ul>
</div>
    <Link className='mx-1  md:mx-10  rounded-lg hover:bg-orange-400 p-3 hover:font-bold text-lg cursor-pointer' href="/About">About</Link>
    <Link className='mx-1  md:mx-10  rounded-lg hover:bg-orange-400 p-3 hover:font-bold text-lg cursor-pointer' href="/Contact">Contact</Link>
    {/* <Link className='mx-1  md:mx-10  rounded-lg hover:bg-orange-400 p-3 hover:font-bold text-lg cursor-pointer' href="/Services">Services</Link> */}
    {/* <Link className='mx-1 sm:mx-5 md:mx-10  rounded-lg hover:bg-orange-400 p-3 hover:hover:font-bold text-lg cursor-pointer' href="/#review">Reviews</Link> */}
    {/* <Link className='mx-1 md:mx-10  rounded-lg hover:bg-orange-400 p-3 hover:hover:font-bold text-lg cursor-pointer' href="/#achievements">Achievements</Link> */}
    

   </div>
</div>
    </div>
  )
}

export default Navbar
