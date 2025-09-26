import { useState } from "react";
import logo from "../../assets/logo.png";
import { CiMenuBurger, CiCloudSun, CiSun, CiCloudMoon, CiDroplet } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiNightClear,
} from "react-icons/wi";
import { getWeatherByCity, getForecastByCity } from "../services/weatherSearvice";

export const DisplayWeather = () => {
  const [city, setCity] = useState("");
  type WeatherType = {
    main: {
      temp: number;
      humidity: number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
    name: string;
    sys: {
      country: string;
      sunrise: number;
      sunset: number;
    };
    wind: {
      speed: number;
    };
    
  };

  const [weather, setWeather] = useState<WeatherType | null>(null);
  type ForecastItem = {
    dt: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
    
  };

  const [forecast, setForecast] = useState<ForecastItem[]>([]);

  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const fetchWeather = async () => {
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);

      const forecastData = await getForecastByCity(city);
      setForecast(forecastData.list.slice(0, 7)); // take 7 entries for daily
    } catch {
      alert("City not found!");
    }
  };

  // Helper to pick icon based on weather condition
  const getWeatherIcon = (main: string, isNight: boolean = false) => {
    switch (main) {
      case "Clear":
        return isNight ? <WiNightClear className="text-4xl" /> : <WiDaySunny className="text-4xl text-amber-500" />;
      case "Clouds":
        return <WiCloudy className="text-4xl text-gray-500" />;
      case "Rain":
        return <WiRain className="text-4xl text-blue-500" />;
      case "Snow":
        return <WiSnow className="text-4xl text-blue-300" />;
      default:
        return <WiCloudy className="text-4xl text-gray-500" />;
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between bg-lime-400 m-10 h-20 rounded-full">
        <div>
          <img src={logo} alt="Logo" className="w-10 ml-10 mt-5" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Location"
            className="mt-5 bg-amber-50 w-80 h-10 pl-5 rounded-full"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
          />
        </div>
        <div>
          <CiMenuBurger className="mr-10 mt-6 w-6 h-6" />
        </div>
      </nav>

      {/* Weather Display */}
      {weather && (
        <div className="ml-100">
          <CiCloudSun className="text-7xl" />
          <h1 className="text-lime-400 text-3xl">{weather.main.temp}°C</h1>
          <p>{new Date().toLocaleDateString()}</p>
          <p>{weather.weather[0].description}</p>
          <h2 className="text-2xl">{weather.name}, {weather.sys.country}</h2>
          <hr className="w-38 text-lime-400 border" />
        </div>
      )}

      {/* Hourly Forecast Section */}
      {forecast.length > 0 && (
        <div>
          <h1 className="mt-10 ml-10">Hourly Temperature</h1>
          <div className="flex mt-5 ml-12 gap-8 overflow-x-auto">
            {forecast.map((hour, index) => {
              const time = new Date(hour.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
              const temp = Math.round(hour.main.temp);
              const condition = hour.weather[0].main;
              const isNight = time.includes("PM") && condition === "Clear";

              return (
                <div
                  key={index}
                  className="w-30 h-40 p-6 rounded-3xl border-4 border-lime-500 flex flex-col items-center justify-center"
                >
                  <h2 className="text-xl mb-2">{time}</h2>
                  {getWeatherIcon(condition, isNight)}
                  <span className="mt-2">{temp}°C</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* sunset and sunrise */}
      {weather && (
        <div className="flex justify-between ml-10 w-220 rounded-3xl border-4 border-lime-500 h-30 mt-10">
          <div className="ml-40">
            <CiSun className="text-amber-600 text-4xl ml-2 mt-5" />
            <h3>Sunrise</h3>
            <h4>{formatTime(weather.sys.sunrise)}</h4>
          </div>
          <span className="text-4xl mb-15 text-lime-500 mt-5">|</span>
          <div className="mr-40">
            <CiCloudMoon className="text-lime-800 text-4xl ml-2 mt-5" />
            <h3>Sunset</h3>
            <h4>{formatTime(weather.sys.sunset)}</h4>
          </div>
        </div>
      )}

      {/* speed, humidity and UV */}
      {weather && (
        <div className="flex justify-between ml-10 w-220 rounded-3xl border-4 border-lime-500 h-30 mt-10">
          {/* Humidity */}
          <div className="ml-10">
            <CiDroplet className="text-amber-600 text-4xl ml-2 mt-5" />
            <h3>Humidity</h3>
            <h4>{weather.main.humidity}%</h4>
          </div>

          <span className="text-4xl mb-15 text-lime-500 mt-5">|</span>

          {/* Wind */}
          <div>
            <FaWind className="text-lime-800 text-4xl ml-2 mt-5" />
            <h3>Wind</h3>
            <h4>{Math.round(weather.wind.speed * 3.6)} km/h</h4>
          </div>

          <span className="text-4xl mb-15 text-lime-500 mt-5">|</span>

          {/* UV Index (placeholder for now) */}
          <div className="mr-10">
            <CiSun className="text-amber-600 text-4xl ml-2 mt-5" />
            <h3>UV Index</h3>
            <h4>—</h4> {/* We'll hook this up using One Call API later */}
          </div>
        </div>
      )}

      <hr className="mt-10 border text-lime-500 ml-2 mr-2" />

      {/* 7-Day Forecast */}
      <div className="ml-10 flex gap-3 mt-5">
        <span className="text-lime-500 font-bold">7</span>
        <h1>day Forecast</h1>
      </div>
      <hr className="mt-5 border ml-2 mr-2" />

      {forecast.length > 0 &&
        forecast.map((f, index) => (
          <div key={index} className="flex justify-between">
            <span className="w-30 m-5 p-2 rounded-2xl ">
              {new Date(f.dt * 1000).toLocaleDateString("en-US", { weekday: "short" })}
            </span>
            <CiSun className="text-amber-600 text-4xl ml-2 m-5" />
            <span className="m-5">
              High: {f.main.temp_max}°C | Low: {f.main.temp_min}°C
            </span>
          </div>
          
        ))}
    </>
  );
};