"use client"

import Image from 'next/image'
import React from 'react'

import StarImg from '../public/images/star.svg'

const RateBox = () => {
    return (
        <>
            <div className='absolute top-[55%] right-[55%] rounded-3xl mm:w-34 mm:h-24 md:w-72 md:h-36 mm:p-4 md:px-6 md:py-5 bg-white'>
                {/*stars */}
                <div className='flex gap-1 mm:w-3 md:w-auto'>
                    <Image src={StarImg} alt='' />
                    <Image src={StarImg} alt='' />
                    <Image src={StarImg} alt='' />
                    <Image src={StarImg} alt='' />
                    <Image src={StarImg} alt='' />
                </div>
 
                <p className='text-primaryGray mm:px-0 md:px-2 mm:text-[10px] md:text-lg mm:pt-2 md:pt-4'>
                    4.9 out of 5 Overall Star  Rating for All Local Business.
                </p>
            </div>
        </>
    )
}

export default RateBox