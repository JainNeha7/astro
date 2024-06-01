import React from 'react'
import Link from 'next/link'
function Offer() {
  return (
    <div>
      <dialog id="my_modal" className="modal">
   <div className="modal-box bg-gradient-to-r   from-purple-500 to-pink-500">
     <form method="dialog">
       {/* if there is a button in form, it will close the modal */}
       <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
     </form>
     <h2 className="font-bold text-2xl  ">🌟Website Launch Offer🌟</h2>
     <p className="py-4 text-xl font-semibold ml-10">50% off on All Services <br></br>Do not Miss this Great oppertunity</p>
<div className='my-2 ml-10'>
   <Link className='bg-black p-3 rounded-lg  hover:bg-white hover:text-black text-white' href='/#services'>Grab It Now</Link>
   </div>
   </div>
 </dialog>
    </div>
  )
}

export default Offer


// {/* You can open the modal using document.getElementById('ID').showModal() method */}
// <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
// <dialog id="my_modal_3" className="modal">
//   <div className="modal-box">
//     <form method="dialog">
//       {/* if there is a button in form, it will close the modal */}
//       <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//     </form>
//     <h3 className="font-bold text-lg">Hello!</h3>
//     <p className="py-4">Press ESC key or click on ✕ button to close</p>
//   </div>
// </dialog>