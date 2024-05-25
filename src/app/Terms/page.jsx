import React from 'react'
import Privacy from '@/components/privacy'
import Condition from '@/components/Condition'
import Refund from '@/components/refund'
function page() {
  return (
    <div>
        <Condition/>
        <br/>
        <hr/>
        <br/><br/><br/>

      <Privacy/>
      <br/>
      <hr/>
      <br/><br/><br/>
      <Refund/>
      <br></br>
      <hr />
    </div>
  )
}

export default page
