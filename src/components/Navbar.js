import React from "react";
import CartIcon from '../assets/icons/cart.png'

export default function Navbar({ setContactVisible }) {

  return (
    <nav className="flex flex-wrap items-center justify-between px-4 md:px-10  bg-black fixed top-0 z-10 w-full h-16">
      <div className="container xl:px-4 mx-auto flex flex-wrap items-center justify-between">
        <div>
          <div className="relative flex justify-between sl:w-auto md:static md:block md:justify-start">
            <a href="/" className="text-4xl font-bold leading-relaxed inline-block mr-4 whitespace-nowrap  text-white queenFont">
              Queen
            </a>
          </div>
        </div>
        <div className="lg:flex flex-row flex-grow flex justify-end" id="example-navbar-danger">
          <ul className="flex xs:flex-row list-none lg:ml-auto">
            <li className="nav-item hover:cursor-pointer">
              <p className="px-3 py-2 flex flex-row items-center text-xl leading-snug text-white hover:opacity-75"  style={{ fontFamily: 'EB Garamond' }}>
                <img src={CartIcon} style={{ width: 17, aspectRatio: 1 / 1 }} alt="cart icon" />
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Koszyk</span>
              </p>
              {/* <li className="nav-item">
              <a href="" className="px-3 py-2 flex flex-row items-center text-xl leading-snug text-white hover:opacity-75">
                <img src={CartIcon} style={{ width: 17, aspectRatio: 1 / 1 }} alt="cart icon" />
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Koszyk</span>
              </a> */}
            </li>
            <li className="nav-item">
              <a href={"about"} className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">O zespole</span>
              </a>
            </li>
            <div onClick={setContactVisible} className="hover:cursor-pointer">
              <p className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2" style={{ fontFamily: 'EB Garamond' }}>Kontakt</span>
              </p>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
