import React from 'react'

const Footer = () => {
    return (
        <footer className="p-6 bg-gray-800 text-gray-100 w-full">
            <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                <div className="flex flex-col space-y-4">
                    <h2 className="font-bold text-lg">About</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <a rel="noopener noreferrer" href="/about">How Airbnb works</a>
                        <a rel="noopener noreferrer" href="/about">Newsroom</a>
                        <a rel="noopener noreferrer" href="/about">Airbnb 2023</a>
                        <a rel="noopener noreferrer" href="/about">Investors</a>
                        <a rel="noopener noreferrer" href="/about">Airbnb Plus</a>
                        <a rel="noopener noreferrer" href="/about">Founder's Letter</a>
                        <a rel="noopener noreferrer" href="/about">Careers</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-bold text-lg">Community</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <a rel="noopener noreferrer" href="/">Diversity & Belonging</a>
                        <a rel="noopener noreferrer" href="/">Against Discrimination</a>
                        <a rel="noopener noreferrer" href="/">Accessibility</a>
                        <a rel="noopener noreferrer" href="/">Airbnb Associates</a>
                        <a rel="noopener noreferrer" href="/">Frontline Stays</a>
                        <a rel="noopener noreferrer" href="/">Guest Referrals</a>
                        <a rel="noopener noreferrer" href="/">Gift cards</a>
                        <a rel="noopener noreferrer" href="/">Airbnb.org</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-bold text-lg">Host</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <a rel="noopener noreferrer" href="/">Host your home</a>
                        <a rel="noopener noreferrer" href="/">Host an Online Experience</a>
                        <a rel="noopener noreferrer" href="/">Host an Experience</a>
                        <a rel="noopener noreferrer" href="/">Responsible hosting</a>
                        <a rel="noopener noreferrer" href="/">Resource Center</a>
                        <a rel="noopener noreferrer" href="/">Community Center</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-bold text-lg">Support</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <a rel="noopener noreferrer" href="/">Our COVID-19 Response</a>
                        <a rel="noopener noreferrer" href="/">Help Center</a>
                        <a rel="noopener noreferrer" href="/">Cancellation options</a>
                        <a rel="noopener noreferrer" href="/">Neighborhood Support</a>
                        <a rel="noopener noreferrer" href="/">Trust & Safety</a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-sm">
                <span className="dark:text-gray-400">© Copyright 2023. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer
