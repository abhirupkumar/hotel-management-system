import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase";

const ForgotPassword = () => {

    const [role, setRole] = useState("CUSTOMER");
    const [emailAddress, setEmailAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const navigate = useNavigate();
    const user = auth.currentUser;

    if (!user) {
        navigate("/");
    }

    return (
        <div className="w-full flex sm:flex-row flex-col items-center min-h-screen justify-center">
            <div className="sm:w-1/2 mt-1 w-full">
                <img className="w-full" src="./forgot-password.gif" alt="forgot-password" loading="eager" />
            </div>
            <div className="flex-col items-center sm:w-1/2 w-full p-10 mb-5">
                <div className="flex-col space-y-10 items-center sm:w-[80%] w-full">
                    <div className="flex flex-col w-full justify-start items-start space-y-4">
                        <div className="flex space-x-2 items-center w-full">
                            <img src="./logo.png" alt="logo" className="rounded-full h-12 w-12 border-2 border-blue-200" />
                            <h1 className="font-bold text-lg font-serif">The Royal Panorama</h1>
                        </div>
                        <div className="flex flex-col items-start">
                            <h1 className="text-2xl font-bold font-mono">Sign In</h1>
                            <p className="text-sm font-light">to continue to The Royal Panorama</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <TextField label="ROLE" value={role} onChange={(e) => setRole(e.target.value)} select sx={{
                            minWidth: "200px",
                        }} >
                            {["ADMIN", "RECEIPTIONIST", "CUSTOMER"].map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <div className="flex flex-col justify-start">
                            <label className="font-semibold text-sm" htmlFor="email">Email Address</label>
                            <input className="border-[1px] border-gray-300 rounded-lg p-2" onChange={(e) => setEmailAddress(e.target.value)} id="email" name="email" type="email" />
                        </div>
                        <div className="flex flex-col justify-start">
                            <label className="font-semibold text-sm" htmlFor="password">Password</label>
                            <input className="border-[1px] border-gray-300 rounded-lg p-2" onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" />
                        </div>
                        <div className="flex flex-col justify-start">
                            <label className="font-semibold text-sm" htmlFor="phone">Phone Number</label>
                            <PhoneInput
                                inputClass="!border-[1px] !w-full !h-[2.5rem] !border-gray-300 !rounded-lg"
                                country={'in'}
                                value={phoneNumber}
                                countryCodeEditable={false}
                                onChange={setPhoneNumber} />
                        </div>
                        <button className="p-2 rounded-lg text-white font-semibold !mt-8 bg-blue-600 hover:bg-blue-500">Sign Up</button>
                        <div className="flex text-sm justify-between">
                            <div>Don't have an account, <span onClick={() => navigate('/sign-up')} className="text-blue-500 cursor-pointer">Sign Up</span></div>
                            <span onClick={() => navigate('/forgot-password')} className="text-blue-500 cursor-pointer">Forgot your password</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword
