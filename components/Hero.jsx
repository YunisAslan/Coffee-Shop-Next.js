
import Image from 'next/image'
import React from 'react'
import HeroImg from '../public/images/hero.svg'
import cafeStoryImg from '../public/images/cafe-story.svg'
import Button from './ui/Button'
import RateBox from './RateBox'

const Hero = () => {
    return (
        <>
            <section className='hero-section grid grid-cols-12 bg-headerBg py-32 mm:px-16 xl:px-[100px]'>

                <div className='hero-left mm:col-span-12 xl:col-span-6 inset-0 mm:grid mm:justify-items-center xl:inline'>

                    <div className='relative'>
                        <h1 className='font-[800] text-primaryBlack xl:text-[116px] md:text-8xl sm:text-6xl mm:text-4xl 
                        leading-[1.1] mm:text-center xl:text-left'>
                            Alowishus <br /> Delicious <br /> Coffee
                        </h1>
                        <p className='text-primaryGray text-2xl pt-7 mm:text-center xl:text-left mm:text-sm sm:text-lg xl:text-2xl mm:px-10 xl:px-0'>
                            A drink from the ‘My Alowishus’ bottled brews <br /> range OR grab one of our delicious coffee’s.
                        </p>

                        <Image className='absolute top-[58%] right-24 mm:hidden xl:inline'
                            src={cafeStoryImg}
                            alt='cafestory'
                            width={75}
                        />
                    </div>

                    <div className='hero-btn-group flex gap-6 mm:pt-6 xl:pt-14'>
                        <Button btnText="Download app" variant="primary"/>
                        <Button btnText="Shop Coffee" variant="link" />
                    </div>


                </div>

                <div className="hero-right mm:col-span-12 xl:col-span-6 mm:mt-14 xl:mt-0 mm:grid mm:justify-items-center xl:inline relative">

                    {/* RATE BOX */}
                    <RateBox />

                    <Image className='absolute top-6 mm:right-0 lg:right-12 xl:right-0 mm:w-16 md:w-auto'
                        src={cafeStoryImg}
                        alt='cafestory'
                    />

                    <Image
                        src={HeroImg}
                        alt='coffee'
                        priority
                    />

                </div>

            </section>
        </>
    )
}

export default Hero