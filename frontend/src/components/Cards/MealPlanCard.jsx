import React, {useContext} from 'react'
import { mealContext } from '../../App'

const MealPlanCard = ({name, protein, fat, carb, img, calories, url, type, _id}) => {

    const {removeMeal} = useContext(mealContext);


  return (
    // <a href={url} target="_blank" >

    <div  className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-100 bg-gray-50">
        <div className="flex items-center w-full h-[250px] overflow-hidden">
            <img className='max-h-fit w-full' src={img} alt={name}/>
        </div>

        <div className="p-6">
            <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                <div>
                <p className="text-gray-400">{type}</p>
                    <h2 className="mt-2 text-lg font-semibold text-gray-800">{name}</h2>
                </div>
                <button onClick={() => removeMeal(name)} className="mt-2 inline-block rounded-sm hover:bg-red-600 hover:cursor-pointer transition-colors duration-75 bg-red-500 px-5 py-2 text-sm font-medium text-white"> Remove </button>
            </div>

            <hr className="mt-4 mb-4" />

            <div className="flex flex-wrap justify-between">
                <p className="inline-flex items-center">
                    <span className="ml-2 text-gray-600">Protein: {Math.floor(protein)} g
                    </span>
                    <span className="ml-2 text-gray-600">Fat: {Math.floor(fat)} g</span>
                    <span className="ml-2 text-gray-600">Carb: {Math.floor(carb)}g</span>
                </p>

                <p className="inline-flex items-center text-gray-600">
                    
                              
                    <span className="ml-2 mt-3"> Overall Calories: {Math.floor(calories)} </span>
                </p>
            </div>
        </div>
    </div>
//    </a>
  )
}

export default MealPlanCard