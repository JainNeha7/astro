'use client';

import { useState, useEffect } from 'react';

export default function PayU() {
    const [formValues, setFormValues] = useState({ 
        key: '',
        txnid: '',
        amount: '',
        productinfo: '',
        firstname: '',
        email: '',
        phone: '',
        surl: '',
        furl: '',
        service_provider: '',
        hash: '',
    });

    const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

    useEffect(() => {
        if (isReadyToSubmit) {
            document.getElementById('paymentForm').submit();
        }
    }, [isReadyToSubmit]);

    const handleBuyNow = async () => {
        const txnid = "TXN" + Date.now();
        const amount = '500.00';
        const productinfo = 'chair';
        const firstname = 'kauslesh';
        const email = 'kauslesh.doe@example.com';
        const phone = "0123456789";
        const surl = "https://www.google.com/";
        const furl = "https://www.facebook.com/";
        const serviceProvider = "payU India";

        try {
            const response = await fetch('/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ txnid, phone, amount, productinfo, firstname, email })
            });
            const data = await response.json();

            setFormValues({
                key: data.merchantKey,
                txnid,
                amount,
                productinfo,
                firstname,
                email,
                phone,
                surl,
                furl,
                service_provider: serviceProvider,
                hash: data.hash,
            });

            setIsReadyToSubmit(true);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <button id="buyButton" onClick={handleBuyNow}>Buy Now</button>

            <form id="paymentForm" action="https://test.payu.in/_payment" method="post" style={{ display: 'none' }}>
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
                <input type="hidden" name="hash" id="hash" value={formValues.hash} />
            </form>
        </div>
    );
}
