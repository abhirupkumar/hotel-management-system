import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'

const PaymentPage = () => {

    const [showLoad, setShowLoad] = useState(true)

    useEffect(() => {
        loadPayment();
    }, []);

    const loadPayment = async (e) => {
        const res = await initializeRazorpay();
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        else {
            const rdata = { price: 17000, oid: Math.floor(Math.random() * Date.now()) };
            const data = await fetch(`https://pixelwear.vercel.app/api/razorpay`, {
                method: "POST",
                body: JSON.stringify(rdata),
            }).then((t) => t.json());

            console.log(data)

            var options = {
                key: process.env.RAZORPAY_KEY,
                name: "Royal Panorama Hotel",
                currency: "INR",
                amount: data.amount,
                order_id: data.id,
                description: "Thank You for booking our suite.",
                image: "./logo.png",
                handler: function (response) {
                    setShowLoad(false);
                },
                prefill: {
                    name: "Dipesh Khan",
                    email: "d@gmail.com",
                    contact: "8929939237",
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        }
    }
    const initializeRazorpay = async (e) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    }

    return (
        <>
            {showLoad ? <Loader />
                : <div className='flex w-full text-2xl min-h-screen'>
                    Done
                </div>}
        </>
    )
}

export default PaymentPage
