'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Modal8() {

  const [formValues, setFormValues] = useState({
    productinfo: 'PLANETRY SHIFTINGS HEALINGS',
    amount: '5555.00',
    firstname: '',
    name: '',
    email: '',
    phone: '',
    key: '',
    txnid: '',
    surl: 'https://cozzmobynehaa.com/success',
    furl: 'https://cozzmobynehaa.com/failed',
    service_provider: 'payU India',
    category: '',
    date: '',
    hash: '',
  });

  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  useEffect(() => {
    if (isReadyToSubmit) {
      document.getElementById('paymentForm8').submit();
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
        <dialog id="my_modal_8" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">PLANETRY SHIFTINGS HEALINGS</h3>
            <p className="py-4">Planetary shifting healings" typically refer to the influence of celestial bodies like the Sun, Moon, and planets on our lives and well-being.
              <br></br>
              Here's a brief explanation with emojis: <br />🌞 Sun: Boosts confidence and clarity. <br /> 🌛 Moon: Brings emotional balance and inner peace.<br /> ♃ Jupiter: Enhances abundance and wisdom.<br /> ♅ Uranus (Rahu): Sparks innovation and change.<br /> ☿ Mercury (Budh): Improves mental clarity and communication.<br /> ♀️ Venus (Shukra): Nurtures love and harmony.<br /> ☋ Neptune (Ketu): Facilitates spiritual awakening and release.<br /> ♄ Saturn (Shani): Builds stability and resilience.<br /> Mars (Mangal): Builds Name and Fame <br />
              1 sitting </p>
            <div>

              <form onSubmit={handleSubmit} className='space-y-4'>

                <div className="mb-4">

                  <select
                    id="category"
                    name="category"
                    value={formValues.category}
                    onChange={handleInputChange}
                    required
                    className="block appearance-none w-full bg-white border text-black border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
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

      <form id="paymentForm8" action="https://test.payu.in/_payment" method="post" style={{ display: 'none' }}>
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

export default Modal8
