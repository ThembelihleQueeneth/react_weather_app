import { CiCloudSun } from "react-icons/ci";

export const Hero = () => {
  return (
    <div className="ml-100">
        <CiCloudSun className="text-7xl"/>
        <h1 className="text-lime-400 text-3xl" >35,3°C</h1>
        <p>25-Sep-25</p>
        <p>Partly Cloudy</p>
        <h2 className="text-2xl">Polokwane, Lp</h2>
        <hr className="w-38 text-lime-400" />
    </div>
  )
}
