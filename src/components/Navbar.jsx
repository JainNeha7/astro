"use client"

import Image from 'next/image'
import Link from 'next/link'
function Navbar() {

  return (
//     <div className='bg-yellow-100'>
//       <div className="navbar relative justify-between shadow-xl bg-yellow-200 rounded-lg  flex-auto md:flex">
//    <Image src="/logo.png" width={100} height={100} alt='logo' className='ml-8  -m-3'></Image>
//    <div classNamestart='md:flex font-semibold  px-8 '>
    
//     {/* <Link className=' p-3 hover:font-bold text-lg cursor-pointer' href="/">Home</Link> */}
//     <div className=" dropdown dropdown-hover">
//   <Link  href="/" className="font-bold  mx-1  md:mx-10  rounded-lg   p-3 hover:font-bold text-lg cursor-pointer">Home</Link>
//   <ul  className="dropdown-content z-10 absolute menu p-2  w-20">
//     <Link href="/#journey" className=' hover:bg-white bg-orange-400 p-3 hover:font-bold text-lg  rounded-md cursor-pointer'>Journey</Link>
//     <Link href="/#services" className=' hover:bg-white bg-orange-400 p-3 hover:font-bold text-lg rounded-md cursor-pointer' >Services</Link>
//     <Link href="/#review" className=' hover:bg-white bg-orange-400 p-3 hover:font-bold text-lg rounded-md cursor-pointer' >Reviews</Link>
//     <Link href="/#achievements" className=' hover:bg-white bg-orange-400  p-3 hover:font-bold text-lg rounded-md cursor-pointer' >Achievements</Link>
//   </ul>
// </div>
//     <Link className='mx-1  md:mx-10  rounded-lg p-3 hover:font-bold text-lg cursor-pointer' href="/About">About</Link>
//     <Link className='mx-1  md:mx-10  rounded-lg p-3 hover:font-bold text-lg cursor-pointer' href="/Contact">Contact</Link>
//     {/* <Link className='mx-1  md:mx-10  rounded-lg p-3 hover:font-bold text-lg cursor-pointer' href="/Services">Services</Link> */}
//     {/* <Link className='mx-1 sm:mx-5 md:mx-10  rounded-lg p-3 hover:hover:font-bold text-lg cursor-pointer' href="/#review">Reviews</Link> */}
//     {/* <Link className='mx-1 md:mx-10  rounded-lg p-3 hover:hover:font-bold text-lg cursor-pointer' href="/#achievements">Achievements</Link> */}
    

//    </div>
// </div>
//     </div>
<><div className='bg-yellow-100'>
<div className="navbar shadow-xl bg-yellow-200 md:hidden py-2 ">
  <div className="navbar-start font-semibold ">
  
    <div className="dropdown ">
      <div tabIndex={0} role="button" className=" btn btn-ghost hover:bg-orange-400 ml-6 p-2 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hover:font-bold " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-400 rounded-box w-52">

      <Link  href="/" className="font-bold  mx-1  md:mx-10  rounded-lg  hover:bg-white p-3 hover:font-bold text-lg cursor-pointer">Home</Link>
   <ul  className=" pl-4 ">
     <li><Link href="/#journey" className=' hover:bg-white bg-orange-400 p-3 hover:font-bold text-lg  rounded-md cursor-pointer'>Journey</Link></li>
     <li><Link href="/#services" className=' hover:bg-white bg-orange-400 p-3 hover:font-bold text-lg rounded-md cursor-pointer' >Services</Link></li>
     <li><Link href="/#review" className=' hover:bg-white bg-orange-400 p-3 hover:font-bold text-lg rounded-md cursor-pointer' >Reviews</Link></li>
     <li><Link href="/#achievements" className=' hover:bg-white bg-orange-400  p-3 hover:font-bold text-lg rounded-md cursor-pointer' >Achievements</Link></li>
   </ul>

     <Link className='mx-1  md:mx-10  rounded-lg hover:bg-white p-3 hover:font-bold text-lg cursor-pointer' href="/About">About</Link>
     <Link className='mx-1  md:mx-10  rounded-lg hover:bg-white p-3 hover:font-bold text-lg cursor-pointer' href="/Contact">Contact</Link>
        
      </ul>
      </div >
      </div>
      <div className='md-hidden navbar-end mr-6'>
      <a href="/"><Image src="/logo.png" width={100} height={100} alt='logo' className='ml-8  -m-3'></Image></a>
      </div>
      </div>
    
      
      <div className='hidden md:flex'>
      
      <div className="navbar  justify-between shadow-xl bg-yellow-200 rounded-lg  flex-auto ">
      
    <Image src="/logo.png" width={100} height={100} alt='logo' className='ml-8  -m-3'></Image>
    <div classNamestart='md:flex font-semibold  px-8 '>
    
     {/* <Link className=' p-3 hover:font-bold text-lg cursor-pointer' href="/">Home</Link> */}
     <div className=" dropdown dropdown-hover">
   <Link  href="/" className="font-bold  mx-1  md:mx-10  rounded-lg   p-3 hover:font-bold hover:bg-orange-400 text-lg cursor-pointer">Home</Link>
   <ul  className="dropdown-content z-10 absolute menu p-2  w-20">
     <Link href="/#journey" className=' hover:bg-white bg-orange-400 p-3 hover:font-bold text-lg    rounded-md cursor-pointer'>Journey</Link>
     <Link href="/#services" className=' hover:bg-white bg-orange-400 p-3 hover:font-bold text-lg   rounded-md cursor-pointer' >Services</Link>
     <Link href="/#review" className=' hover:bg-white bg-orange-400 p-3 hover:font-bold text-lg rounded-md cursor-pointer' >Reviews</Link>
     <Link href="/#achievements" className=' hover:bg-white bg-orange-400  p-3 hover:font-bold text-lg rounded-md cursor-pointer' >Achievements</Link>
   </ul>
 </div>
     <Link className='mx-1 font-bold  md:mx-10  rounded-lg p-3 hover:font-bold text-lg hover:bg-orange-400 cursor-pointer' href="/About">About</Link>
     <Link className='mx-1 font-bold  md:mx-10  rounded-lg p-3 hover:font-bold text-lg hover:bg-orange-400 cursor-pointer' href="/Contact">Contact</Link>
    <Link className='mx-1 font-bold  md:mx-10  rounded-lg p-3 hover:font-bold text-lg hover:bg-orange-400 cursor-pointer' href="/Services">Services</Link>
      </div>
  
</div>
</div>
  

</div>


  {/* <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div> */}
  

</>
  )
}

export default Navbar
