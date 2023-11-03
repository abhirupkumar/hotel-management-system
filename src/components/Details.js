import React from "react";
import Table from "./Table";
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import bookingsData from '../bookings.json';
import hotelsdata from "../hotels.json";
import { loadStripe } from "@stripe/stripe-js";
function Details({ rooms, setRooms, onClose, startDate, endDate, hotelSlug }) {

    const { isSignedIn, user } = useUser();
    const navigate = useNavigate();
    const [availability, setAvailability] = useState(null);
    const [loading, setLoading] = useState(false);
    const [totalAdults, setTotalAdults] = useState(0);
    const [totalChildren, setTotalChildren] = useState(0);
    const [paid, setPaid] = useState(false);
    const [bookings, setBookings] = useState(bookingsData);
    useEffect(() => {
        if (rooms.length > 0) {
            setTotalAdults(rooms.reduce((acc, room) => acc + room.adults, 0));
            setTotalChildren(rooms.reduce((acc, room) => acc + room.children, 0));
        }
    }, [rooms]);

    const loadPayment = async () => {
        const diffInTime = endDate.getTime() - startDate.getTime();
        const diffInDays2 = diffInTime / (1000 * 3600 * 24);
        var diffInDays = diffInDays2 % 1 > 0 ? Math.floor(diffInDays2 + 1) : diffInDays2;
        if (diffInDays < 0) diffInDays = 0;
        const price = (17000 * totalAdults + 10000 * totalChildren) * (diffInDays + 1);
        const oid = Math.floor(Math.random() * Date.now());
        const rdata = { price: price, oid: oid };
        const data = await fetch(`https://pixelwear.vercel.app/api/razorpay`, {
            method: "POST",
            body: JSON.stringify(rdata),
        }).then((t) => t.json());
        const hotel = hotelsdata.filter((hotel) => hotel.slug == hotelSlug)[0];

        const paymentObject = new window.Razorpay({
            key: process.env.RAZORPAY_KEY,
            name: "Royal Panorama Hotel",
            currency: "INR",
            amount: data.amount,
            order_id: data.id,
            description: "Thank You for booking our suite.",
            image: "./logo.png",
            handler: function (response) {
                const newBooking = {
                    orderId: oid,
                    transactionId: response.razorpay_payment_id,
                    hotel: hotel,
                    rooms: rooms,
                    startDate: startDate,
                    endDate: endDate,
                    price: price,
                    paid: true,
                };
                localStorage.setItem("bookings", JSON.stringify(newBooking));
                setPaid(true);
                navigate(`/bookings/${oid}`);
                onClose();
                setLoading(false);
            },
            prefill: {
                name: user.fullName,
                email: user.primaryEmailAddress.emailAddress,
                contact: user.phoneNumbers[0].phoneNumber,
            },
        });

        paymentObject.open();
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
    const handleBooking = async () => {
        setLoading(true);
        loadPayment();
    }

    const handleStripeBooking = async () => {

        setLoading(true);
        const hotel = hotelsdata.filter((hotel) => hotel.slug == hotelSlug)[0];
        const stripeLoad = await loadStripe("pk_test_51O8GgXSC5RDUV7ZLE5JZCaZh9vcXppyfuy3YMZE6eXaiYchDB4e2T7g8ERc9A1HfxgZFWyzDlWqSRtLL1zyywLWp00iPLDaLYi");
        const stripe = require("stripe")("sk_test_51O8GgXSC5RDUV7ZLt0C6msqzShpqfRWPLVUJlK42ZEnW92W8XyhgCHOKN8svrGZ5eJjQ1NAZeoLgc8A66BbwO0IF00yWsO2Bqc")
        const diffInTime = endDate.getTime() - startDate.getTime();
        const diffInDays2 = diffInTime / (1000 * 3600 * 24);
        var diffInDays = diffInDays2 % 1 > 0 ? Math.floor(diffInDays2 + 1) : diffInDays2;
        if (diffInDays < 0) diffInDays = 0;
        const price = (17000 * totalAdults + 10000 * totalChildren) * (diffInDays + 1);
        const oid = Math.floor(Math.random() * Date.now());
        const newBooking = {
            orderId: oid,
            transactionId: Math.floor(Math.random() * Date.now()),
            hotel: hotel,
            rooms: rooms,
            startDate: startDate,
            endDate: endDate,
            price: price,
            paid: true,
        };
        localStorage.setItem("bookings", JSON.stringify(newBooking));
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: "Payble Amount",
                        },
                        unit_amount: price * 100,
                    },

                    quantity: 1
                },
            ],
            mode: "payment",
            success_url: `${process.env.REACT_APP_HOST}/bookings/${oid}`,
            cancel_url: `${process.env.REACT_APP_HOST}`,
        })
        onClose();
        const result = stripeLoad.redirectToCheckout({
            sessionId: session.id,
        });
        setPaid(true);
    }

    return (
        <>
            <div className="flex flex-col gap-[1px] w-auto mx-[12px] mt-[6px]">
                <Table rooms={rooms} setRooms={setRooms} />
                <div className="flex justify-around items-center">
                    {availability == true && <p className="mx-2 text-lg text-green-600">Available!</p>}
                    {availability == false && <p className="mx-2 text-lg text-red-600">Not Availble!</p>}
                    {availability == true && !isSignedIn && <button onClick={() => {
                        navigate('/sign-in');
                        onClose();
                    }} className="flex items-center p-[4px] place-self-end mt-[12px] w-[12em] h-[3em] bg-[rgb(239, 219, 138)] rounded-md text-sm text-white bg-black justify-center hover:shadow-xl" type="submit">
                        Log In to Book
                    </button>}
                    {availability == true && isSignedIn && !paid && (!loading ? <button onClick={handleStripeBooking} className="flex items-center p-[4px] place-self-end mt-[12px] w-[12em] h-[3em] bg-[rgb(239, 219, 138)] rounded-md text-sm text-white bg-black justify-center hover:shadow-xl" type="submit">
                        Book Now
                    </button> : <CircularProgress />)}
                    <button onClick={async () => {
                        setLoading(false);
                        // await initializeRazorpay();
                        setAvailability(true)
                    }} className="flex items-center p-[4px] place-self-end mt-[12px] w-[12em] h-[3em] bg-[rgb(239, 219, 138)] rounded-md text-sm text-white bg-black justify-center hover:shadow-xl" type="submit">
                        Check Availability
                    </button>
                </div>
            </div>
        </>
    );
}

export default Details;