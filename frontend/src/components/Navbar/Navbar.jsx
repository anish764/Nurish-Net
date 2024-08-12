import React, { useState } from "react";
// import HR_logo from './HR_logo.jpg'
import { NavLink, Link,  useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const navName = ['Home', 'calculate', 'blogs', 'about', 'logout'];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10 ">
      <div className="md:flex bg-green-600 py-6 items-center justify-evenly ">
        <div className="font-bold text-2xl cursor-pointer flex items-center md:-mx-[10rem] mx-7">
          <span className="mr-1 pt-2  ">
            <Link to="/">
            {/* <img className="w-12" src={HR_logo} alt="logo" /> */}
            <span className="text-white text-4xl" >NourishNet</span>
            </Link>
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center lg:mr-7  sm:-mr-[9rem] md:pb-0 pb-12 absolute md:static bg-green-600 left-0 w-full md:w-auto md:z-0  font-semibold md:pl-0 pl-9 transition-all duration-300 ease-in ${
            open ? "top-[4.5rem]" : "top-[-490px]"
          } `}
        >

          {
            navName.map((element, index)=>{

              if(element == 'logout'){
              
                return <li className="md:ml-8 text-md md:my-0 my-7 " key={index}>
                <span onClick={() => {localStorage.clear(); navigate("/signin")}}
                  className="text-white hover:text-gray-200 duration-150 text-lg"
                 
                >
                  {element}
                </span>{" "}
              </li>

              }

              if(element == 'Home'){
                return <li className="md:ml-8 text-md md:my-0 my-7 " key={index}>
            
                <NavLink
                  className="text-white hover:text-gray-200 duration-150 text-lg"
                  to={`/`} 
                >
                  {element}
                </NavLink>{" "}
              </li>
              }

            return  <li className="md:ml-8 text-md md:my-0 my-7 " key={index}>
            
            <NavLink
              className="text-white hover:text-gray-200 duration-150 text-lg"
              to={`/${element}`} 
            >
              {element}
            </NavLink>{" "}
          </li>
            })
          }
        

        </ul>
      </div>
    </div>
  );
};

export default Navbar;