import React, { useState } from "react";
import {

  
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Calculate from "./pages/Calculate/Calculate";
import Blogs from "./pages/Blogs/Blogs";
import "./App.css"
import Breakfast from "./pages/Calculate/Breakfast/Breakfast";
import Error from "./pages/Error/Error";
import Lunch from "./pages/Calculate/Lunch/Lunch";
import Snacks from "./pages/Calculate/Snacks/Snacks";
import Dinner from "./pages/Calculate/Dinner/Dinner";
import SignUp from "./SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import SharedLayout from "./pages/SharedLayout";
import RouteGuard from "./components/RouteGuard";
import Yoga from "./pages/yoga";
import axios from "axios";
import About from "./pages/About";

export const mealContext = React.createContext()

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)



function App() {

  const [mealPlan, setMealPlan] = useState([])

  async function addMeal(name, img, calories, protein, fat, carb, url, type) {
    await axios.post("https://nourishnet-backend.onrender.com/diet/add-diet", { name, img, calories, protein, carb, fat, url, type }).then(res => {
      setMealPlan([...mealPlan, { name, img, calories, protein, carb, fat, url, type, _id: res.data.data.dietDetails._id }]);
    })
  }

  async function removeMeal(name) {
    const userId = JSON.parse(localStorage.getItem('userDetails'))._id
    await axios.delete(`https://nourishnet-backend.onrender.com/diet/delete-diet`, {data: {name}} ).then(res => {
    if(!res.data.error) 
      setMealPlan(mealPlan.filter(meal => meal.name !== name))
    }).catch(err => alert(err))
  }

  return (
    <mealContext.Provider value={{ addMeal, mealPlan, removeMeal }} >
      <BrowserRouter>
        <Routes>

    <Route path="/"  element={<SharedLayout />}>
        <Route index element={<RouteGuard Component={Homepage} />} />
        <Route path="/calculate" element={<RouteGuard Component={Calculate} />} />

      <Route path="/blogs" element={<RouteGuard Component={Blogs} />}  />
      
      
      <Route path="/calculate/breakfast" element={<RouteGuard Component={Breakfast} />} />
      <Route path="/yoga" element={<RouteGuard Component={Yoga} />} />
      <Route path="/about" element={<RouteGuard Component={About} />} />

      <Route path="/calculate/lunch" element={<RouteGuard Component={Lunch} />} />
      
      <Route path="/calculate/snacks" element={<RouteGuard Component={Snacks} />} />

      <Route path="/calculate/dinner" element={<RouteGuard Component={Dinner} />} />

    </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Error />} />


        </Routes>
      </BrowserRouter>
    </mealContext.Provider>
  )
}

export default App

