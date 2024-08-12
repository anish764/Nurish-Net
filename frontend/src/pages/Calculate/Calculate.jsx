import React, {useContext, useEffect} from 'react'
import MealPlan from '../MealPlan/MealPlan'
import { Link } from 'react-router-dom'
import { mealContext } from '../../App'
const Calculate = () => {
  
  const {mealPlan} = useContext(mealContext);

  let totalCalories = 0;
  let totalProtein = 0;
  let totalCarb = 0;
  let totalFat = 0;
  
  for (let i = 0; i < mealPlan.length; i++) {
    const {calories, protein, fat, carb} = mealPlan[i];
    totalCalories += Math.floor(calories);
    totalProtein += Math.floor(protein);
    totalCarb += Math.floor(carb);
    totalFat += Math.floor(fat);
    
  }


  const bmr = Math.floor(JSON.parse(localStorage.getItem('userDetails')).bmr) ;
  const weight = Math.floor(JSON.parse(localStorage.getItem('userDetails')).weight) ;
 const intake = Math.floor(bmr * 1.55);
  return (
    
    <div>
      <section className="bg-gray-50 mt-10">
        <div
          className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center"
        >
          <div className="mx-auto max-w-xl text-center">
            <div>
              <div>

                <h1 className="text-3xl font-extrabold sm:text-5xl">
                  {totalCalories} / <span className='' >{intake}<small className='text-xs' >gm</small></span>
                  <br />
                  <strong className="font-extrabold text-green-500 sm:block">
                    Calories
                  </strong>
                </h1>
              </div>
            </div>

            <p className="mt-4 sm:text-xl sm:leading-relaxed">
              You should eat {intake} calories a day to remain fit.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <h4 className="text-3xl font-semibold sm:text-2xl mx-4 ">
                {totalProtein} / {Math.floor(weight * 2)}<small className='text-xs' >gm</small>
                <br />
                <strong className="font-bold text-base text-green-500 sm:block">
                  Proteins
                </strong>
              </h4>

              <h1 className="text-3xl font-semibold sm:text-2xl mx-4 ">
              {totalFat}  / {Math.floor(intake/4)}<small className='text-xs' >gm</small>
                <br />
                <strong className="font-bold text-base text-green-500 sm:block">
                  Fats
                </strong>
              </h1>

              <h1 className="text-3xl font-semibold sm:text-2xl mx-4 ">
                {totalCarb} / {Math.floor(0.6 * intake)}<small className='text-xs' >gm</small>
                <br />
                <strong className="font-bold text-base text-green-500 sm:block">
                  Carbohydrates
                </strong>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h1 className="text-xl font-bold text-center text-gray-900 sm:text-5xl">
              Make your own meal plan
            </h1>

            <p className="w-[100%] mt-4 text-center text-gray-500">
              Calculate your daily calorie intake and make your own meal plan to achieve your fitness goals.
            </p>
          </header>

          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">

            {/* Breakfast Plan */}
            <div>

            <Link className="block overflow-hidden group" to="/calculate/breakfast">
                <img
                  src="https://images.unsplash.com/photo-1513021644609-692e9ecb6b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJyZWFrZmFzdCUyMHRlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                <div className="relative pt-3 bg-white">


                  <p className="mt-2">

                    <span className="tracking-wider text-gray-900 group-hover:underline group-hover:underline-offset-4"> Breakfast </span>
                  </p>
                </div>
            </Link>
                  </div>

            {/* Lunch Plan */}
            <li>
              <Link to="/calculate/lunch" className="block overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1548940740-204726a19be3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fEluZGlhbiUyMGx1bmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-3 bg-white">


                  <p className="mt-2">

                    <span className="tracking-wider text-gray-900 group-hover:underline group-hover:underline-offset-4"> Lunch </span>
                  </p>
                </div>
              </Link>
            </li>

            {/* Snacks Plan */}

            <li>
              <Link to="/calculate/snacks" className="block overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1589301773859-bb024d3ad558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8SW5kaWFuJTIwc25hY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-3 bg-white">


                  <p className="mt-2">

                    <span className="tracking-wider text-gray-900 group-hover:underline group-hover:underline-offset-4"> Snacks </span>
                  </p>
                </div>
              </Link>
            </li>

            {/* Dinner Plan */}

            <li>
              <Link to="/calculate/dinner" className="block overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1536305030588-45dc07a2a372?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8SW5kaWFuJTIwZGlubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative pt-3 bg-white">


                  <p className="mt-2">

                    <span className="tracking-wider group-hover:underline group-hover:underline-offset-4 text-gray-900"> Dinner </span>
                  </p>
                </div>
              </Link>

            </li>
          </ul>
        </div>
      </section>

      <MealPlan/>
    </div>
  )
}

export default Calculate