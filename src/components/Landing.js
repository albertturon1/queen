import React from 'react'
import LandingPhoto from '../assets/images/landing.jpg';


export default function Landing() {
    return (
        <div style={{ height: '70vh' }} className="w-full h- bg-red-700 relative">
            <img src={LandingPhoto} className="w-full h-full object-cover" alt="landing" />
            <div className="absolute bottom-0 w-full justify-center items-center bg-gradient-to-t from-black to-transparent pt-3">
                <p className="text-white text-3xl py-5 text-center">Oficjalna strona zespołu Queen</p>
            </div>
        </div>
    )
}
