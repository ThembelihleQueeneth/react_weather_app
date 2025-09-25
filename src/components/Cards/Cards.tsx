import { CiSun } from "react-icons/ci";

export const Cards = () => {
  return (
    <div>
        <h1 className="mt-10 ml-10">Hourly Temperature</h1>
            <div className="flex mt-5 ml-12 gap-8">  {/* Houly cards */}
            <div className="bg-lime-100 w-30 h-40 p-8 rounded-3xl border-4 border-lime-500" >
                <h2 className="text-2xl mb-2">07:00</h2>
                <CiSun className="text-amber-600 text-4xl ml-2" />
                <span className="ml-2">30°C</span>
            </div>
             <div className="bg-lime-100 w-30 h-40 p-8 rounded-3xl border-4 border-lime-500" >
                <h2 className="text-2xl mb-2">08:00</h2>
                <CiSun className="text-amber-600 text-4xl ml-2" />
                <span className="ml-2">30°C</span>
            </div>
            <div className="bg-lime-100 w-30 h-40 p-8 rounded-3xl border-4 border-lime-500" >
                <h2 className="text-2xl mb-2">08:00</h2>
                <CiSun className="text-amber-600 text-4xl ml-2" />
                <span className="ml-2">30°C</span>
            </div>
            <div className="bg-lime-100 w-30 h-40 p-8 rounded-3xl border-4 border-lime-500" >
                <h2 className="text-2xl mb-2">08:00</h2>
                <CiSun className="text-amber-600 text-4xl ml-2" />
                <span className="ml-2">30°C</span>
            </div>
            <div className="bg-lime-100 w-30 h-40 p-8 rounded-3xl border-4 border-lime-500" >
                <h2 className="text-2xl mb-2">08:00</h2>
                <CiSun className="text-amber-600 text-4xl ml-2" />
                <span className="ml-2">30°C</span>
            </div>
            <div className="bg-lime-100 w-30 h-40 p-8 rounded-3xl border-4 border-lime-500" >
                <h2 className="text-2xl mb-2">08:00</h2>
                <CiSun className="text-amber-600 text-4xl ml-2" />
                <span className="ml-2">30°C</span>
            </div>
            

        </div>
    </div>
  )
}
