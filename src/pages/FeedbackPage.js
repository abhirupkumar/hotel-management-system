import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { TextField, Typography } from '@mui/material';

const FeedbackPage = () => {
    const [submit, setSubmit] = useState(false)
    if (submit == true) return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='flex flex-col md:w-[60vw] w-[80vw] min-h-[100px] items-center justify-center space-y-4 p-6 rounded-md shadow-xl'>
                <div className="space-y-2">
                    <Typography component="legend">Thank You For Your Feedback</Typography>
                </div>
            </div>
        </div>
    )

    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='flex flex-col md:w-[60vw] w-[80vw] items-center space-y-4 p-6 rounded-md shadow-xl'>
                <div className="space-y-2 items-start w-full">
                    <Typography component="legend">Rate Your Experience</Typography>
                    <Rating name="customized-5" defaultValue={0} max={5} />
                </div>
                <TextField id="outlined-basic" label="Feedback" fullWidth variant="outlined" multiline rows={5} />
                <button onClick={() => setSubmit(true)} className='p-3 rounded-md text-lg bg-blue-700 hover:bg-blue-600 text-white font-semibold'>Submit</button>
            </div>
        </div>
    )
}

export default FeedbackPage;