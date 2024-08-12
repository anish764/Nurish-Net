import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return ( <>
    
    <section className="bg-white mt-20">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-xl font-bold text-green-600 sm:text-4xl">
        Welcome to NourishNet
      </h2>

      <p className="mt-4 text-gray-500 sm:text-xl ">
      We focus on providing you with the latest information and resources on health and wellness.
      We believe in the power of knowledge and education when it comes to maintaining a healthy lifestyle. 
      </p>
    </div>

    <div className="mt-8 sm:mt-18">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
       <Link to='/blogs'>
        <div
          className="flex flex-col h-96 rounded-lg border border-gray-200 px-4 py-8 text-center"
        >
          <dt className="order-last text-lg font-medium text-gray-500">
          <img className='h-30 w-30 ml-5 px-20 ' src='https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-244.jpg?size=338&ext=jpg&ga=GA1.2.53141830.1657365930&semt=sph' />
          Discover new perspectives,insights and expand your knowledge through our blog
          </dt>

          <dd className="text-4xl font-extrabold text-green-600 lg:text-xl md:text-2xl">
          
          Healthline Nutrition
          </dd>
        </div>
        </Link> 

        <Link to='/calculate'>
        <div
          className="flex flex-col h-96 rounded-lg border border-gray-200 px-4 py-8 text-center"
        >
          <dt className="order-last text-lg font-medium text-gray-500">
          <img className='h-30 w-30 ml-5 px-20 ' src='https://img.freepik.com/free-vector/healthy-habit-concept-illustration_114360-1132.jpg?w=1380&t=st=1674367732~exp=1674368332~hmac=4221590ef3569eaf964b5ca2f7116400f7a1571562170378428777b29d345bb9' />
          Calculate Your Intake
          </dt>

          <dd className="text-4xl font-extrabold text-green-600 lg:text-xl md:text-2xl">
          Your Daily Summary
          </dd>
        </div>
        </Link>

        <Link to="/yoga">
      <div
          className="flex flex-col h-96 rounded-lg border border-gray-200 px-4 py-8 text-center"
        >
          <dt className="order-last text-lg font-medium text-gray-500">
          <img className='h-30 w-30  ml-5 px-24 ' src='https://img.freepik.com/premium-vector/watercolor-international-day-yoga_23-2148563116.jpg?w=1380' />
          Strengthen your body and mind.
          
          </dt>

          <dd className="text-4xl font-extrabold text-green-600 lg:text-xl md:text-2xl">
          Yoga: Mind, Body, Harmony
          </dd>
          
       </div>
        </Link>
      </dl>
    </div>
  </div>
</section>


   <div className='section mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
   <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Party"
          src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Are You Eating Enough Protien?</h2>

        <p className="mt-4 text-gray-600">
        Protein is essential for our bodies to work properly from head to toe. 
        Getting the right amount of protein is important and depends on each individual.
        You can think of protein as the worker bees of your body
        </p>

        <Link
          to="/blogs"
          className="mt-8 inline-flex items-center rounded border border-green-600 bg-green-600 px-8 py-3 text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          <span className="text-sm font-medium" > Read More </span>

          <svg
            className="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
   </div>

  </>

  )
}

export default Homepage
