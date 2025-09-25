import { CiSun } from "react-icons/ci";
import { CiCloudMoon } from "react-icons/ci";
import { CiDroplet } from "react-icons/ci";
import { FaWind } from "react-icons/fa6";


export const Cards = () => {
  return (
    <>
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
    </>
  )
}
