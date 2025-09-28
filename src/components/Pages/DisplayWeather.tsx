import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { CiMenuBurger, CiCloudSun, CiSun, CiCloudMoon, CiDroplet } from "react-icons/ci";
import { FaWind, FaMoon, FaToggleOff, FaToggleOn, FaSearch } from "react-icons/fa";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiNightClear,
} from "react-icons/wi";
import { getWeatherByCity, getForecastByCity, getUVIndex } from "../services/weatherSearvice";

export const DisplayWeather = () => {
  const [city, setCity] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [uvIndex, setUvIndex] = useState<number | null>(null);
  const [uvDescription, setUvDescription] = useState("");
  const [isCelsius, setIsCelsius] = useState(true);

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
    coord: {
      lat: number;
      lon: number;
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

  // Initialize preferences from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    const savedTemperatureUnit = localStorage.getItem("temperatureUnit");
    
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      setDarkMode(false);
    }

    if (savedTemperatureUnit) {
      setIsCelsius(savedTemperatureUnit === "celsius");
    } else {
      setIsCelsius(true);
    }
  }, []);

  // Apply dark mode class to document and set background color
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.backgroundColor = "#1F2937";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor = "#F9F8FA";
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Save temperature unit preference
  useEffect(() => {
    localStorage.setItem("temperatureUnit", isCelsius ? "celsius" : "fahrenheit");
  }, [isCelsius]);

  // Temperature conversion functions
  const celsiusToFahrenheit = (celsius: number): number => {
    return (celsius * 9/5) + 32;
  };

  const formatTemperature = (celsius: number): string => {
    if (isCelsius) {
      return `${Math.round(celsius)}°C`;
    } else {
      return `${Math.round(celsiusToFahrenheit(celsius))}°F`;
    }
  };

  const formatTemperatureRange = (minCelsius: number, maxCelsius: number): string => {
    if (isCelsius) {
      return `High: ${Math.round(maxCelsius)}°C | Low: ${Math.round(minCelsius)}°C`;
    } else {
      const minFahrenheit = celsiusToFahrenheit(minCelsius);
      const maxFahrenheit = celsiusToFahrenheit(maxCelsius);
      return `High: ${Math.round(maxFahrenheit)}°F | Low: ${Math.round(minFahrenheit)}°F`;
    }
  };

  // Get UV description and color based on UV index
  const getUVInfo = (uv: number) => {
    if (uv >= 0 && uv <= 2) {
      return { description: "Low", color: "text-green-500", bgColor: "bg-green-100", darkBgColor: "bg-green-900" };
    } else if (uv >= 3 && uv <= 5) {
      return { description: "Moderate", color: "text-yellow-500", bgColor: "bg-yellow-100", darkBgColor: "bg-yellow-900" };
    } else if (uv >= 6 && uv <= 7) {
      return { description: "High", color: "text-orange-500", bgColor: "bg-orange-100", darkBgColor: "bg-orange-900" };
    } else if (uv >= 8 && uv <= 10) {
      return { description: "Very High", color: "text-red-500", bgColor: "bg-red-100", darkBgColor: "bg-red-900" };
    } else {
      return { description: "Extreme", color: "text-purple-500", bgColor: "bg-purple-100", darkBgColor: "bg-purple-900" };
    }
  };

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
      setForecast(forecastData.list.slice(0, 7));

      // Fetch UV index using coordinates from weather data
      if (data.coord) {
        const uvData = await getUVIndex(data.coord.lat, data.coord.lon);
        setUvIndex(uvData.uvi);
        const uvInfo = getUVInfo(uvData.uvi);
        setUvDescription(uvInfo.description);
      }
    } catch {
      alert("City not found!");
    }
  };

  const handleMenuBtn = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setIsMenuOpen(false);
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { 
      icon: isCelsius ? FaToggleOff : FaToggleOn, 
      label: isCelsius ? 'Switch to °F' : 'Switch to °C', 
      onClick: toggleTemperatureUnit 
    },
    { 
      icon: FaMoon, 
      label: darkMode ? 'Light Mode' : 'Dark Mode', 
      onClick: toggleDarkMode 
    },
  ];

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
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? "bg-gray-900" : "bg-[#F9F8FA]"
    }`}>
      {/* Navbar */}
      <nav className={`flex justify-between m-10 h-20 rounded-full transition-colors duration-300 ${
        darkMode ? "bg-gray-800" : "bg-lime-400"
      }`}>
        <div>
          <img src={logo} alt="Logo" className="w-10 ml-10 mt-5" />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Location"
            className={`mt-5 shadow-xl/30 w-80 h-10 pl-10 pr-5 rounded-full cursor-pointer transition-colors duration-300 ${
              darkMode ? "bg-gray-700 text-white placeholder-gray-400" : "bg-amber-50 text-black"
            }`}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
          />
          <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`} />
        </div>
        <div className="relative">
          <button aria-label="Menu" onClick={handleMenuBtn}>
            <CiMenuBurger className={`mr-10 mt-6 w-6 h-6 cursor-pointer transition-colors duration-300 ${
              darkMode ? "text-white" : "text-black"
            }`} />
          </button>
          
          {isMenuOpen && (
            <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50 border transition-colors duration-300 ${
              darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}>
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.onClick}
                  className={`flex items-center w-full text-left px-4 py-2 text-sm transition-colors duration-300 ${
                    darkMode 
                      ? "text-gray-200 hover:bg-gray-700" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="mr-2" />
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Current Temperature Unit Indicator */}
      <div className={`text-center mb-4 transition-colors duration-300 ${
        darkMode ? "text-gray-300" : "text-gray-600"
      }`}>
        <span className="text-sm">
          Currently showing temperatures in {isCelsius ? "Celsius (°C)" : "Fahrenheit (°F)"}
        </span>
      </div>

      {/* Weather Display */}
      {weather && (
        <div className={`ml-100 transition-colors duration-300 ${
          darkMode ? "text-white" : "text-black"
        }`}>
          <CiCloudSun className="text-7xl" />
          <h1 className="text-lime-400 text-3xl">{formatTemperature(weather.main.temp)}</h1>
          <p>{new Date().toLocaleDateString()}</p>
          <p>{weather.weather[0].description}</p>
          <h2 className="text-2xl">{weather.name}, {weather.sys.country}</h2>
          <hr className={`w-38 border shadow-xl/30 ${
            darkMode ? "border-lime-600" : "border-lime-400"
          }`} />
        </div>
      )}

     {/* 24-Hour Forecast Section */}
{/* 24-Hour Forecast Section */}
{forecast.length > 0 && (
  <div>
    <h1
      className={`mt-10 ml-10 transition-colors duration-300 ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      24-Hour Forecast
    </h1>
    <div className="flex mt-5 ml-12 gap-6 overflow-x-auto pb-4">
      {forecast
        .filter((_, index) => index % 1 === 0) // keep all forecast points
        .slice(0, 8) // ✅ only first 8 points (8 × 3h = 24h)
        .map((hour, index) => {
          const date = new Date(hour.dt * 1000);
          const time = date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });
          const day = date.toLocaleDateString("en-US", { weekday: "short" });
          const temp = hour.main.temp;
          const condition = hour.weather[0].main;
          const hourOfDay = date.getHours();
          const isNight = hourOfDay >= 18 || hourOfDay <= 6;

          return (
            <div
              key={index}
              className={`min-w-30 h-55 p-4 rounded-3xl border-4 flex flex-col items-center justify-center transition-colors duration-300 ${
                darkMode
                  ? "border-lime-600 bg-gray-800 text-white"
                  : "border-lime-500 bg-white text-black"
              }`}
            >
              <h3 className="text-sm text-gray-500 mb-1">{day}</h3>
              <h2 className="text-lg mb-2 ml-5 font-medium">{time}</h2>
              <div className="mb-2">
                {getWeatherIcon(condition, isNight)}
              </div>
              <span className="text-lg font-semibold">
                {formatTemperature(temp)}
              </span>
              <span className="text-xs mt-1 text-center text-gray-500 px-2">
                {hour.weather[0].description}
              </span>
            </div>
          );
        })}
    </div>
  </div>
)}

      {/* sunset and sunrise */}
      {weather && (
        <div className={`flex justify-between ml-10 w-220 rounded-3xl border-4 h-30 mt-10 transition-colors duration-300 ${
          darkMode 
            ? "border-lime-600 bg-gray-800 text-white" 
            : "border-lime-500 bg-white text-black"
        }`}>
          <div className="ml-40">
            <CiSun className="text-amber-600 text-4xl ml-2 mt-5" />
            <h3>Sunrise</h3>
            <h4 className={darkMode ? "text-gray-300" : "text-gray-700"}>{formatTime(weather.sys.sunrise)}</h4>
          </div>
          <span className={`text-4xl mb-15 mt-5 ${
            darkMode ? "text-lime-600" : "text-lime-500"
          }`}>|</span>
          <div className="mr-40">
            <CiCloudMoon className="text-lime-800 text-4xl ml-2 mt-5" />
            <h3>Sunset</h3>
            <h4 className={darkMode ? "text-gray-300" : "text-gray-700"}>{formatTime(weather.sys.sunset)}</h4>
          </div>
        </div>
      )}

      {/* speed, humidity and UV */}
      {weather && (
        <div className={`flex justify-between ml-10 w-220 rounded-3xl border-4 h-30 mt-10 transition-colors duration-300 ${
          darkMode 
            ? "border-lime-600 bg-gray-800 text-white" 
            : "border-lime-500 bg-white text-black"
        }`}>
          {/* Humidity */}
          <div className="ml-10">
            <CiDroplet className="text-amber-600 text-4xl ml-2 mt-5" />
            <h3>Humidity</h3>
            <h4 className={darkMode ? "text-gray-300" : "text-gray-700"}>{weather.main.humidity}%</h4>
          </div>

          <span className={`text-4xl mb-15 mt-5 ${
            darkMode ? "text-lime-600" : "text-lime-500"
          }`}>|</span>

          {/* Wind */}
          <div>
            <FaWind className="text-lime-800 text-4xl ml-2 mt-5" />
            <h3>Wind</h3>
            <h4 className={darkMode ? "text-gray-300" : "text-gray-700"}>{Math.round(weather.wind.speed * 3.6)} km/h</h4>
          </div>

          <span className={`text-4xl mb-15 mt-5 ${
            darkMode ? "text-lime-600" : "text-lime-500"
          }`}>|</span>

          {/* UV Index */}
          <div className="mr-10">
            <CiSun className="text-amber-600 text-4xl ml-2 mt-5" />
            <h3>UV Index</h3>
            {uvIndex !== null ? (
              <div className="flex flex-col items-center">
                <div className={`px-2 py-1 rounded-full text-sm font-bold ${
                  darkMode ? getUVInfo(uvIndex).darkBgColor : getUVInfo(uvIndex).bgColor
                } ${getUVInfo(uvIndex).color}`}>
                  {uvIndex} - {uvDescription}
                </div>
              </div>
            ) : (
              <h4 className={darkMode ? "text-gray-300" : "text-gray-700"}>Loading...</h4>
            )}
          </div>
        </div>
      )}

     
      <hr className={`mt-10 border ml-2 mr-2 transition-colors duration-300 ${
        darkMode ? "border-lime-600" : "border-lime-500"
      }`} />

      {/* 7-Day Forecast */}
      <div className="ml-10 flex gap-3 mt-5">
        <span className={`font-bold transition-colors duration-300 ${
          darkMode ? "text-lime-400" : "text-lime-500"
        }`}>7</span>
        <h1 className={darkMode ? "text-white" : "text-black"}>day Forecast</h1>
      </div>
      <hr className={`mt-5 border ml-2 mr-2 transition-colors duration-300 ${
        darkMode ? "border-gray-700" : "border-gray-300"
      }`} />

      {forecast.length > 0 &&
        forecast.map((f, index) => (
          <div key={index} className={`flex justify-between transition-colors duration-300 ${
            darkMode ? "text-white" : "text-black"
          }`}>
            <span className={`w-30 m-5 p-2 rounded-2xl ${
              darkMode ? "text-white" : "text-black"
            }`}>
              {new Date(f.dt * 1000).toLocaleDateString("en-US", { weekday: "short" })}
            </span>
            <CiSun className="text-amber-600 text-4xl ml-2 m-5" />
            <span className={`m-5 transition-colors duration-300 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              {formatTemperatureRange(f.main.temp_min, f.main.temp_max)}
            </span>
          </div>
        ))}
    </div>
  );
};