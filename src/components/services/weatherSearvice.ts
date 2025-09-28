import axios from "axios";

const API_KEY = "77a60f51032479c8f4f5798b0d55b95b";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherByCity = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
};

export const getSevenDayForecast = async (city: string) => {
  try {
    // Step 1: Get coordinates of the city
    const locationResponse = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
      },
    });

    const { lat, lon } = locationResponse.data.coord;

    // Step 2: Use One Call API with lat & lon
    const forecastResponse = await axios.get(`${BASE_URL}/onecall`, {
      params: {
        lat,
        lon,
        exclude: "current,minutely,hourly,alerts",
        units: "metric",
        appid: API_KEY,
      },
    });

    return forecastResponse.data.daily; // daily contains 7–8 days forecast
  } catch (error) {
    console.error("Error fetching 7-day forecast:", error);
    throw error;
  }
};

export const getForecastByCity = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast:", error);
    throw error;
  }
};

export const getHourlyForecast = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching hourly forecast:", error);
    throw error;
  }
};

// New function to get UV index by coordinates
export const getUVIndex = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/uvi`, {
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching UV index:", error);
    throw error;
  }
};

// Alternative: Use One Call API which includes UV index and more comprehensive data
export const getOneCallWeather = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall`, {
      params: {
        lat: lat,
        lon: lon,
        exclude: "minutely",
        units: "metric",
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching one call weather:", error);
    throw error;
  }
};