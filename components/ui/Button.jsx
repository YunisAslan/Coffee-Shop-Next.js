import React from 'react'
import Image from 'next/image';
import { cva } from 'class-variance-authority'

const buttonVariants = cva('active:scale-95 inline-flex items-center justify-center font-[500]', {
    variants: {
        variant: {
            primary: "bg-primaryBlack text-white rounded-3xl uppercase px-5 py-3 mm:text-[10px] sm:text-xs md:text-base",
            circle: "bg-white rounded-full shadow-circleShadow p-3",
            link: "bg-transparent underline-offset-4 underline uppercase text-lg mm:text-[10px] sm:text-xs md:text-base"
        }
    }
})

const Button = ({ variant, className, btnText, icon, seoTag }) => {
    return (
        <>
            <button className={buttonVariants({ variant, className })}>
                {icon && <Image src={icon} alt={seoTag} />}
                {btnText}
            </button>
        </>

    )
}

export default Button