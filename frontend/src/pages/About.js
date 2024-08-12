import React from 'react'
const About = () => {
  return (
    <div className='about mt-40'>
            <div className="mx-auto max-w-5xl  px-4 py-8">
                <section className="rounded-lg bg-gray-100 p-8">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                    <img
                        alt="Logo"
                        src='https://img.freepik.com/premium-vector/watercolor-international-day-yoga_23-2148563116.jpg?w=1380'
                        className="aspect-square w-full rounded-lg object-cover"
                    />

                    <blockquote className="sm:col-span-2">
                        <p className="text-xl font-medium sm:text-2xl">
                        Welcome to Nourish.Net, where we focus on providing you with the latest information and resources on health and wellness. We believe in the power of knowledge and education when it comes to maintaining a healthy lifestyle. 
                        Whether you're looking to improve your diet, get more exercise, or simply learn more about different health conditions, we have something for you.
                        Thank you for choosing us as your trusted source for health and wellness information.
                        </p>

                        <cite className="mt-8 inline-flex items-center not-italic">
                        <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                        <p className="text-sm uppercase text-gray-500 sm:ml-3">
                            <strong>Team NourishNet</strong>
                        </p>
                        </cite>
                    </blockquote>
                    </div>
                </section>
            </div>
    </div>
  )
}

export default About
