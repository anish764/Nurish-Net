import React from 'react'
import { ExternalLink } from 'react-external-link';
const blogs = () => {
  return (


<div className="w-full p-12 bg-white">
    <div className="flex items-end justify-between mb-12 header">
        <div className="title">
            <p className="mb-4 text-4xl font-bold text-green-600">
                Lastest articles
            </p>
            <p className="text-2xl font-bold text-gray-400">
            Discover insights and inspiration through our blog
            </p>
        </div>
    </div>


        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <a href="#" className="block w-full h-full">
                    <img alt="blog photo" 
                    src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" className="object-cover w-full max-h-40"/>
                    <div className="w-full p-4 bg-white dark:bg-green-600">
                    <ExternalLink href="https://www.afpafitness.com/blog/5-blogs-that-promote-healthy-food-habits">
                        <p className="font-bold text-white text-md">
                            Blog
                        </p>
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                        Healthy Food Habits
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                        The key to a healthy diet is to eat the right amount of calories....
                        </p>
                          </ExternalLink>
                        <div className="flex items-center mt-4">
                            <a href="#" className="relative block">
                                <img alt="profil" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 font-bold dark:text-white">
                                Sophia Aries
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    20 mars 2022 - 6 min read
                                </p>
                            </div> 
                        </div>
                    </div>
                </a>
            </div>
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <a href="#" className="block w-full h-full">
                    <img alt="blog photo" src="https://blog.myfitnesspal.com/wp-content/uploads/2020/06/18-Smart-Ways-to-Cut-Sugar-From-Your-Diet.jpg" 
                    className="object-cover w-full max-h-40"/>
                    <div className="w-full p-4 bg-white dark:bg-green-600">
                    <ExternalLink href="https://blog.myfitnesspal.com/7-smart-ways-to-cut-sugar-from-your-diet/">
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                        18 Smart Ways to Cut Sugar From Your Diet
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                        Naturally occurring sugars in things like fruits, vegetables and dairy...
                        </p>
                        </ExternalLink>   
                        <div className="flex items-center mt-4">
                            <a href="#" className="relative block">
                                <img alt="profil" src="https://images.unsplash.com/photo-1517462964-21fdcec3f25b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fFJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 font-bold dark:text-white">
                                Emily Evans
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    4 Nov 2021 - 8 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <a href="#" className="block w-full h-full">
                    <img alt="blog photo" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" 
                    className="object-cover w-full max-h-40"/>
                    <div className="w-full p-4 bg-white dark:bg-green-600">
                    <ExternalLink href="https://blog.myfitnesspal.com/10-make-ahead-breakfasts-under-300-calories/">
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                        15 Make-Ahead Breakfasts Under 300 Calories
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                        We’ve all heard more than once that starting the day with a healthy breakfast is great for the brain
                        </p>
                        </ExternalLink>    
                        <div className="flex items-center mt-4">
                            <a href="#" className="relative block">
                                <img alt="profil" src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 font-bold dark:text-white">
                                Nicholas Lee
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    22 mars 2022 - 7 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <a href="#" className="block w-full h-full">
                    <img alt="blog photo"
                     src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" className="object-cover w-full max-h-40"/>
                    <div className="w-full p-4 bg-white dark:bg-green-600">
                    <ExternalLink href='https://blog.myfitnesspal.com/eating-enough-protein/'>
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                        Are You Eating Enough Protein?
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                        About 60 percent of adults who did not meet the recommended amount of protein daily reported skipping at least one meal.    
                        </p>
                        </ExternalLink>   
                        <div className="flex items-center mt-4">
                            <a href="#" className="relative block">
                                <img alt="profil" src="https://images.unsplash.com/photo-1600865494468-075a33020eed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fFJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 dark:text-white">
                                Jessica Garcia
                                </p>
                                <p className="text-gray-400 font-bold dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <a href="#" className="block w-full h-full">
                    <img alt="blog photo"
                     src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60" className="object-cover w-full max-h-40"/>
                    <div className="w-full p-4 bg-white dark:bg-green-600">
                    <ExternalLink href='https://therealfooddietitians.com/healthy-crockpot-chicken-recipes/'>
                        <p className="font-bold text-white text-md">
                        Blog
                        </p>
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                        15 Healthy Crockpot Chicken Recipes
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                        If you’re looking for new family-friendly dinner options that are easy, well balanced, and nutritious ...
                        </p>
                        </ExternalLink>    
                        <div className="flex items-center mt-4">
                            <a href="#" className="relative block">
                                <img alt="profil" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8UmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 font-bold dark:text-white">
                                Samantha Williams
                                </p>
                                <p className="text-gray-400 dark:text-gray-300">
                                    11 jan 2023 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
                <a href="#" className="block w-full h-full">
                    <img alt="blog photo" 
                    src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60" className="object-cover w-full max-h-40"/>
                    <div className="w-full p-4 bg-white dark:bg-green-600">
                    <ExternalLink href='https://therealfooddietitians.com/honey-sage-roasted-root-vegetables/'>
                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                        Honey-Sage Roasted Root Vegetables
                        </p>
                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                        A variety of root vegetables are tossed with a simple sauce made of melted butter, sweet honey...
                        </p>
                        </ExternalLink>   
                        <div className="flex items-center mt-4">
                            <a href="#" className="relative block">
                                <img alt="profil" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8UmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                            </a>
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 font-bold dark:text-white">
                                Andrew Rodriguez
                                </p>
                                <p className="text-gray-400 font-bold dark:text-gray-300">
                                    20 mars 2029 - 6 min read
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>

   
)}

export default blogs

    
    
   
