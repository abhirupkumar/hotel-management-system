import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const BookingsPage = () => {
    const { id } = useParams();
    const [bookingData, setBookingData] = useState(null);

    useEffect(() => {
        setBookingData(localStorage.getItem('bookings'));
    }, [id]);

    return (
        <Container className="mx-auto mt-8 p-4 border rounded-lg bg-white">
            {bookingData ? (
                <div>
                    <Typography variant="h4" className="mb-4">Booking Confirmed!</Typography>
                    <div>
                        <p className="mb-2">Order ID: {bookingData.orderId}</p>
                        <p className="mb-2">Transaction ID: {bookingData.transactionId}</p>
                        <p className="mb-2">Hotel: {bookingData.hotel}</p>
                        <p className="mb-2">Rooms: {bookingData.rooms}</p>
                        <p className="mb-2">Start Date: {bookingData.startDate}</p>
                        <p className="mb-2">End Date: {bookingData.endDate}</p>
                        <p className="mb-2">Price: {bookingData.price}</p>
                        <p>Paid: {bookingData.paid ? 'Yes' : 'No'}</p>
                    </div>
                </div>
            ) : (
                <Typography variant="h4">Loading...</Typography>
            )}
        </Container>
    );
};

export default BookingsPage;
