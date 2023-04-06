"use client"

import React, { useRef, useState } from 'react'
import LogoImg from '../public/images/logo.svg'
import BasketSvg from '../public/images/basket.svg'
import Image from 'next/image'
import Link from 'next/link'
import Button from './ui/Button'
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";

const Navbar = () => {

    const overlayRef = useRef();

    const handleOverlay = (e) => {
        if (e.target.classList.contains('bars-btn')) {
            overlayRef.current.classList.add("open-overlay")
        }

        if (e.target.classList.contains('cross-btn')) {
            overlayRef.current.classList.remove("open-overlay")
        }
    }

    return (
        <>
            <div ref={overlayRef}
                className='overlay opacity-0 invisible h-full transition-all ease-in-out duration-300 fixed inset-0 bg-gray-300 z-10 mm:block xl:hidden overflow-x-hidden px-6'>

                <div className="flex items-center pt-5">
                    <Image
                        src={LogoImg}
                        alt='Picture Alowishus'
                    />

                    <button onClick={handleOverlay} className='cross-btn text-4xl absolute right-5'>
                        <HiXMark className='pointer-events-none' />
                    </button>
                </div>

                <nav className='flex flex-col font-[500] pt-10 mb-8 space-y-5'>
                    <Link href="" className='text-xl hover:translate-x-5 transition-all duration-700'>Cafe Menu</Link>
                    <Link href="" className='text-xl hover:translate-x-5 transition-all duration-700'>About Us</Link>
                    <Link href="" className='text-xl hover:translate-x-5 transition-all duration-700'>Find Us</Link>
                    <Link href="" className='text-xl hover:translate-x-5 transition-all duration-700'>Alowishus Catering</Link>
                </nav>

                <Button btnText="buy gift vouchers" variant="primary" seoTag="buygift" />
            </div>

            <section className='navbar flex items-center justify-between'>

                <div className="logo">
                    <Image
                        src={LogoImg}
                        alt='Picture Alowishus'
                    />
                </div>

                <nav className='flex gap-8 font-[500] ml-auto pr-8 mm:hidden xl:flex'>
                    <Link href="" className='text-primaryBlack hover:text-primaryGray'>Cafe Menu</Link>
                    <Link href="" className='text-primaryBlack hover:text-primaryGray'>About Us</Link>
                    <Link href="" className='text-primaryBlack hover:text-primaryGray'>Find Us</Link>
                    <Link href="" className='text-primaryBlack hover:text-primaryGray'>Alowishus Catering</Link>
                </nav>

                <div className="btn-group flex items-center space-x-6">
                    <Button icon={BasketSvg} variant="circle" seoTag="addcart" />
                    <Button btnText="buy gift vouchers" variant="primary" seoTag="buygift" className="mm:hidden xl:inline-flex" />

                    <button onClick={handleOverlay} className='bars-btn text-4xl mm:inline-flex xl:hidden'>
                        <HiBars3BottomRight className='pointer-events-none' />
                    </button>
                </div>

            </section>

        </>
    )
}

export default Navbar