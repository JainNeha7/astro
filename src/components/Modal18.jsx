
'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Modal18() {

  const [formValues, setFormValues] = useState({
    productinfo: 'Vasudha & kuber energy',
    amount: '7777.00',
    firstname: '',
    name: '',
    email: '',
    phone: '',
    key: '',
    txnid: '',
    surl: 'https://cozzmobynehaa.com/success',
    furl: 'https://cozzmobynehaa.com/failed',
    service_provider: 'payU India',
    date: '',
    hash: '',
  });

  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  useEffect(() => {
    if (isReadyToSubmit) {
      document.getElementById('paymentForm18').submit();
    }
  }, [isReadyToSubmit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formValues.firstname && formValues.email && formValues.phone && formValues.date) {

      const { amount, productinfo, firstname, email, phone } = formValues;

      try {

        const txnid = `TXN${Date.now()}`;
        const response = await axios.post('/api/payment', {
          txnid,
          amount,
          productinfo,
          firstname,
          email,
          phone,
        });

        if (response.status !== parseInt(200)) {
          throw new Error('Failed to generate hash');
        }

        const { data } = response;

        setFormValues((prevValues) => ({
          ...prevValues,
          key: data.merchantKey,
          txnid,
          hash: data.hash,
        }));
        setIsReadyToSubmit(true);

      } catch (error) {
        console.error('Error:', error);
        alert('Failed to process payment. Please try again.');
      }
    }
    else {
      alert("Please fill out all required fields.");
    }
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <dialog id="my_modal_18" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Vasudha & kuber energy</h3>
            <p className="py-4">Vasudha Energy 🌍: Represents the healing power derived from the Earth, grounding and stabilizing energies, connecting to nature, and fostering balance and harmony. Kuber Energy 💰: Symbolizes abundance, prosperity, and wealth consciousness, helping healers manifest their desires and attract abundance in all aspects of life. Combined, Vasudha and Kuber energies empower healers to tap into the Earth's nurturing forces while invoking abundance and prosperity in their healing practices. 🌟
            </p>

            <div> 
              
              <form onSubmit={handleSubmit} className='space-y-4'>
              <div >
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="firstname" value={formValues.firstname}
                    onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" value={formValues.email}
                    onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formValues.phone}
                    onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Appointment Date</label>
                <input type="date" id="date" name="date" value={formValues.date}
                    onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Pay now
                </button>
              </div>
            </form>
            </div>
          </div>
        </dialog>
      </div>

      <form id="paymentForm18" action="https://test.payu.in/_payment" method="post" style={{ display: 'none' }}>
        <input type="hidden" name="key" value={formValues.key} />
        <input type="hidden" name="txnid" value={formValues.txnid} />
        <input type="hidden" name="amount" value={formValues.amount} />
        <input type="hidden" name="productinfo" value={formValues.productinfo} />
        <input type="hidden" name="firstname" value={formValues.firstname} />
        <input type="hidden" name="email" value={formValues.email} />
        <input type="hidden" name="phone" value={formValues.phone} />
        <input type="hidden" name="surl" value={formValues.surl} />
        <input type="hidden" name="furl" value={formValues.furl} />
        <input type="hidden" name="service_provider" value={formValues.service_provider} />
        <input type="hidden" name="hash" value={formValues.hash} />
      </form>

    </>
  )
}

export default Modal18

