import React from 'react'
import hero from '../assets/hero.png'

function Hero() {
  return (
    <div className='pt-36 text-center md:text-left' id='Hero'>
        <div className='max-w-[1240px] font-open mx-auto bg-white rounded-3xl text-2xl sm:text-3xl lg:text-4xl'>
        <div className='grid md:grid-cols-2 py-20 sm:px-5 md:px-20 items-center'>
            <div className='md:pl-10'>
                <h1 className='font-bold text-6xl md:text-7xl text-red-600'>Music Jam</h1>
                <div className='py-10 md:py-16'>
                    <p>7-8.11.2024</p>
                    <p>Instytut Kultury Miejskiej</p>
                    <p>Gdańsk</p>
                </div>
                <a href="https://app.evenea.pl/event/musicjam2024/" target='_blank'>
                <button className='text-white font-semibold mt-2 sm:mt-0 font-normal bg-red-600 rounded-md px-4 py-1 md:py-2 hover:scale-105 duration-500 text-xl md:text-2xl lg:text-4xl'>Weź udział</button>
                </a>

                <br />

                <a href="https://hackathons.ikm.gda.pl/" target='_blank'>
                <button className='text-white font-semibold mt-2 sm:mt-0 font-normal bg-red-600 rounded-md px-4 py-1 md:py-2 hover:scale-105 duration-500 text-xl md:text-2xl lg:text-4xl'>Dowiedz się więcej</button>
                </a>
            </div> 
            <div className='w-3/4 md:w-full mx-auto'>
                <video autoplay="true" controls="true" loop="true" muted="true" src="https://hackathons.ikm.gda.pl/wp-content/uploads/2024/08/music-jam-cover-photo-fb.mp4" playsinline=""></video>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
