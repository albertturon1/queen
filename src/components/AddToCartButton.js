import React from 'react'
import CartIcon from '../assets/icons/cart.png'


export default function AddToCartButton({ onClick }) {
    return (
        <div className="flex flex-row px-2 py-3 justify-center items-center rounded-md text-white hover:cursor-pointer mt-2" style={{ backgroundColor: '#B92020' }} onClick={onClick}>
            <img src={CartIcon} style={{ width: 17, aspectRatio: 1 / 1, marginRight: 7, marginBottom: 2 }} alt="cart icon" />
            <p className="text-sm font-semibold">Dodaj do koszyka</p >
        </div>
    )
}
