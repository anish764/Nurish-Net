import React, { useState, useContext, useEffect } from 'react'
import MealPlanCard from '../../components/Cards/MealPlanCard'
import { mealContext } from '../../App'
import axios from 'axios';
const MealPlan = () => {

const {mealPlan} = useContext(mealContext);

const [diets, setDiets] = useState([]);

useEffect(() => {
    axios.post("https://nourishnet-backend.onrender.com/diet/get-diets", {}).then((res) => {
        setDiets(res.data.data.dietDetails)
    });
}, [diets])

useEffect(() => {
    axios.post("https://nourishnet-backend.onrender.com/diet/get-diets", {}).then((res) => {
        setDiets(res.data.data.dietDetails)
    });
}, [])

const meals = [];

    if (mealPlan.length === 0) {
        return (<div className='w-full text-center py-10' ><h1 className='text-2xl' >Please make a meal plan...</h1></div>)
    }

    return (
        <div>
            <section className=" text-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Your Meal Plan</h2>

                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {
                            diets.map((meal, index) => {
                                const {name, calories, protein, fat, carb, img, url, type} = meal
                                return <MealPlanCard type={type} name={name} calories={calories} protein={protein} fat={fat} carb={carb} img={img} url={url} key={index} />
                            })
                        }
                    </div>

                </div>
            </section>

        </div>
    )
}
export default MealPlan