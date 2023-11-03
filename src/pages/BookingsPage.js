import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const BookingsPage = () => {
    const { id } = useParams();
    const [bookingData, setBookingData] = useState(null);
    const [roomNumber, setRoomNumber] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('bookings'));
        setBookingData(data);
        var roomNum = []
        for (let i = 0; i < data.rooms.length; i++) {
            roomNum.push(132 + i);
        }
        setRoomNumber(roomNum);
    }, [id]);

    return (
        <Container className="mx-auto min-h-screen my-8 p-4 border rounded-lg bg-white">
            {bookingData ? (
                <div>
                    <Typography variant="h4" className="mb-4">Booking Confirmed!</Typography>
                    <div>
                        <p className="mb-2"><b>Order ID:</b> {bookingData.orderId}</p>
                        <p className="mb-2"><b>Transaction ID:</b> {bookingData.transactionId}</p>
                        <p className="mb-2"><b>Hotel:</b> {bookingData.hotel.title + ", " + bookingData.hotel.place}</p>
                        <p className="mb-2"><b>Room(s) Booked:</b> {bookingData.rooms.length}</p>
                        <p className="mb-2"><b>Room Number(s):</b> {roomNumber.join(', ')}</p>
                        <p className="mb-2"><b>Arrival Date:</b> {(new Date(bookingData.startDate)).toDateString()}</p>
                        <p className="mb-2"><b>Departure Date:</b> {(new Date(bookingData.endDate)).toDateString()}</p>
                        <p className="mb-2"><b>Price:</b> Rs. {bookingData.price}</p>
                    </div>
                </div>
            ) : (
                <Typography variant="h4">Loading...</Typography>
            )}
        </Container>
    );
};

export default BookingsPage;
