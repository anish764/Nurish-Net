import React, {useState, useEffect} from 'react'
import axios from 'axios'
import FoodCard from '../../../components/Cards/FoodCard';

const Snacks = () => {
    const api_key = `a32145da152bdecc6054fe9f165cfe83`;
    const api_id = `fd61871a`;
    const [output, setOutput] = useState([])
    const [input, setInput] = useState('snacks');

    
    function fetchFood() {
        let base_url = `https://api.edamam.com/search?q=${input}&app_id=${api_id}&app_key=${api_key}&to=12`;
        axios.get(base_url)
            .then(res => {
                setOutput(res.data.hits);
                setInput("")
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() =>  fetchFood(), [])

    function handleSubmit(e) {
        e.preventDefault();
        fetchFood();
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>

            <div className="w-full md:w-1/3 mx-auto p-5 rounded-lg bg-white">
                <div className="relative">
                    <div className="absolute flex items-center ml-2 h-full">
                        <svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
                        </svg>
                    </div>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Enter the food name" className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" />
                    <button type="submit" className="text-white absolute -right-0 bottom-0 bg-green-700 hover:bg-green-800  font-medium rounded-md text-sm px-4 py-3 text-center dark:bg-green-600 dark:hover:bg-green-700 ">Search</button>

                </div>


            </div>
            </form>
            <div>

            <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4 mx-3 mb-2 " >

                {
                    output.map((item, index) => {
                        return <FoodCard type="Snacks" name={item.recipe.label} img={item.recipe.image} calories={item.recipe.calories} fat={item.recipe.digest[0].total} carb={item.recipe.digest[1].total} protein={item.recipe.digest[2].total} url={item.recipe.url} key={index}/>
                    })
                }



            </div>
            </div>
        </div>

    )
}

export default Snacks