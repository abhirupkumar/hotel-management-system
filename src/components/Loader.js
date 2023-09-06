import React from 'react'

const Loader = () => {
    return (
        <div className="w-full flex items-center min-h-screen justify-center">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader
