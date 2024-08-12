import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
     <div className='bg-gray-100 dark:bg-green-600 h-64'>
        <div className='relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24'>
            <div className='absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8'>
            <Link
                      className="inline-block rounded-full bg-green p-2 text-white shadow transition hover:bg-green-800 sm:p-3 lg:p-4"
                      to="/"
                    >
                      

            </Link>
        </div>

        <div className='lg:flex lg:items-end lg:justify-between'>
           <div className='flex justify-center text-teal-600 lg:justify-start'>
                <div className='text-3xl font-black text-gray-800 uppercase dark:text-white'> 
                 <Link to='/'>NOURISH.NET</Link> 
                </div>
           </div>
           <p
            className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white lg:text-left font-semibold"
            >
           Empowering you to achieve optimal health and wealth
        </p>
        <div className="mt-12 lg:mt-0">
        <ul
          className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
        >
          <li>
            <a className="text-white transition hover:text-green-800 font-bold" href="/about">
              About
            </a>
          </li>

          <li>
            <a className="text-white transition hover:text-green-800 font-bold" href="/blogs">
              Blogs
            </a>
          </li>

          <li>
            <a className="text-white transition hover:text-green-800 font-bold" href="/yoga">
              Mindfulness Practice
            </a>
          </li>
        </ul>
      </div>
    </div>
        <p className="mt-12 text-center text-sm text-white lg:text-right font-semibold">
        Copyright &copy; 2022. All rights reserved.
    </p>
     </div>
    </div> 
  )
}

export default Footer





