// import React from 'react'
import logo from "../../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { CiCloudSun } from "react-icons/ci";
import { CiSun } from "react-icons/ci";
import { CiCloudMoon } from "react-icons/ci";
import { CiDroplet } from "react-icons/ci";
import { FaWind } from "react-icons/fa6";



export const DisplayWeather = () => {
  return (
    <>
     <nav className='flex justify-between bg-lime-400 m-10 h-20 rounded-full' >
        <div>
            <img src={logo} alt="Logo" className='w-10 ml-10 mt-5' />
        </div>
        <div>
            <input type="text" placeholder='Enter Location' className="mt-5 bg-amber-50 w-120 h-10 pl-10 rounded-full"/>
        </div>
        <div>
            <CiMenuBurger className='mr-10 mt-6 w-15'/>

        </div>
    </nav>
    <div className="ml-100">
            <CiCloudSun className="text-7xl"/>
            <h1 className="text-lime-400 text-3xl" >35,3°C</h1>
            <p>25-Sep-25</p>
            <p>Partly Cloudy</p>
            <h2 className="text-2xl">Polokwane, Lp</h2>
            <hr className="w-38 text-lime-400 border" />
        </div>
         <div>
                <h1 className="mt-10 ml-10">Hourly Temperature</h1>
                    <div className="flex mt-5 ml-12 gap-8">  {/* Houly cards */}
                    <div className=" w-30 h-40 p-8 rounded-3xl border-4 border-lime-500" >
                        <h2 className="text-2xl mb-2">07:00</h2>
                        <CiSun className="text-amber-600 text-4xl ml-2" />
                        <span className="ml-2">30°C</span>
                    </div>
                     <div className=" w-30 h-40 p-8 rounded-3xl border-4 border-lime-500" >
                        <h2 className="text-2xl mb-2">08:00</h2>
                        <CiSun className="text-amber-600 text-4xl ml-2" />
                        <span className="ml-2">30°C</span>
                    </div>
                    <div className="w-30 h-40 p-8 rounded-3xl border-4 border-lime-500" >
                        <h2 className="text-2xl mb-2">08:00</h2>
                        <CiSun className="text-amber-600 text-4xl ml-2" />
                        <span className="ml-2">30°C</span>
                    </div>
                    <div className=" w-30 h-40 p-8 rounded-3xl border-4 border-lime-500" >
                        <h2 className="text-2xl mb-2">08:00</h2>
                        <CiSun className="text-amber-600 text-4xl ml-2" />
                        <span className="ml-2">30°C</span>
                    </div>
                    <div className=" w-30 h-40 p-8 rounded-3xl border-4 border-lime-500" >
                        <h2 className="text-2xl mb-2">08:00</h2>
                        <CiSun className="text-amber-600 text-4xl ml-2" />
                        <span className="ml-2">30°C</span>
                    </div>
                    <div className=" w-30 h-40 p-8 rounded-3xl border-4 border-lime-500" >
                        <h2 className="text-2xl mb-2">08:00</h2>
                        <CiSun className="text-amber-600 text-4xl ml-2" />
                        <span className="ml-2">30°C</span>
                    </div>
                    
        
                </div>
            </div>
            <div className="flex justify-between ml-10 w-220 rounded-3xl border-4 border-lime-500 h-30 mt-10">
                <div className="ml-40">
                <CiSun className="text-amber-600 text-4xl ml-2 mt-5" />
                    <h3>Sunrise</h3>
                    <h4>05:46</h4>
                </div>
                <span className="text-4xl mb-15 text-lime-500 mt-5">|</span>
                <div className="mr-40">
                    <CiCloudMoon className="text-lime-800 text-4xl ml-2 mt-5" />
                    <h3>Sunset</h3>
                    <h4>17:45</h4>
                </div>
        
            </div>
             <div className="flex justify-between ml-10 w-220 rounded-3xl border-4 border-lime-500 h-30 mt-10">
                <div className="ml-10">
                <CiDroplet className="text-amber-600 text-4xl ml-2 mt-5" />
                    <h3>Humidity</h3>
                    <h4>71%</h4>
                </div>
                <span className="text-4xl mb-15 text-lime-500 mt-5">|</span>
                <div >
                    <FaWind className="text-lime-800 text-4xl ml-2 mt-5" />
                    <h3>Wind</h3>
                    <h4>26km/h</h4>
                </div>
                <span className="text-4xl mb-15 text-lime-500 mt-5">|</span>
                <div className="mr-10">
                    <CiSun className="text-amber-600 text-4xl ml-2 mt-5" />
                    <h3>UV index</h3>
                    <h4>High</h4>
                </div>
        
            </div>
            <hr className="mt-10 border text-lime-500 ml-2 mr-2"  />

            <div className="ml-10 flex gap-3 mt-5">
        <span className="text-lime-500 font-bold">7</span><h1>day Forecast</h1>
    </div>
     <hr className="mt-10 border ml-2 mr-2"  />
    <div className="flex justify-between">
        <span className="bg-lime-500 w-30 m-5 p-2 text-amber-50 rounded-2xl ">Today</span>
        <CiSun className="text-amber-600 text-4xl ml-2 m-5" />
        <span className="m-5">High:30 °C | Low: 20 °C</span>


    </div>
     <hr className="mt-3 border ml-2 mr-2"  />
     <div className="flex justify-between">
        <span className=" w-30 m-5 p-2 rounded-2xl ">Fri</span>
        <CiSun className="text-amber-600 text-4xl ml-2 m-5" />
        <span className="m-5">High:30 °C | Low: 20 °C</span>


    </div>
     <hr className="mt-3 border ml-2 mr-2"  />
     <div className="flex justify-between">
        <span className=" w-30 m-5 p-2  rounded-2xl ">Sat</span>
        <CiSun className="text-amber-600 text-4xl ml-2 m-5" />
        <span className="m-5">High:30 °C | Low: 20 °C</span>


    </div>
     <hr className="mt-3 border ml-2 mr-2"  />
     <div className="flex justify-between">
        <span className=" w-30 m-5 p-2  rounded-2xl ">Sun</span>
        <CiSun className="text-amber-600 text-4xl ml-2 m-5" />
        <span className="m-5">High:30 °C | Low: 20 °C</span>


    </div>
     <hr className="mt-3 border ml-2 mr-2"  />
     <div className="flex justify-between">
        <span className=" w-30 m-5 p-2  rounded-2xl ">Mon</span>
        <CiSun className="text-amber-600 text-4xl ml-2 m-5" />
        <span className="m-5">High:30 °C | Low: 20 °C</span>


    </div>
     <hr className="mt-3 border ml-2 mr-2"  />
     <div className="flex justify-between">
        <span className=" w-30 m-5 p-2  rounded-2xl ">Tue</span>
        <CiSun className="text-amber-600 text-4xl ml-2 m-5" />
        <span className="m-5">High:30 °C | Low: 20 °C</span>


    </div>
     <hr className="mt-3 border ml-2 mr-2"  />
     <div className="flex justify-between">
        <span className=" w-30 m-5 p-2  rounded-2xl ">Wed</span>
        <CiSun className="text-amber-600 text-4xl ml-2 m-5" />
        <span className="m-5">High:30 °C | Low: 20 °C</span>


    </div>
     <hr className="mt-3 border ml-2 mr-2"  />
     
        
            
    </>
  )
}
