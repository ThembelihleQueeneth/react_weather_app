
# Weather App ☀️🌙
<img width="1920" height="1080" alt="Screenshot (14)" src="https://github.com/user-attachments/assets/66607ecc-a7a6-497f-a4b6-04231b04c2ba" />


A modern, responsive weather application built with React and TypeScript that provides real-time weather information and forecasts.

## Features 🌟

- **Current Weather Data**: Real-time temperature, humidity, wind speed, and conditions
- **24-Hour Forecast**: Detailed hourly weather predictions
- **7-Day Forecast**: Weekly weather outlook with min/max temperatures
- **UV Index**: Current UV levels with safety recommendations
- **Sunrise & Sunset Times**: Daily sun cycle information
- **Dark/Light Mode**: Toggle between dark and light themes
- **Temperature Units**: Switch between Celsius and Fahrenheit
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Local Storage**: Remembers your theme and unit preferences

## Technologies Used 🛠️

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Icons**: React Icons (Ci, Fa, Wi libraries)
- **API**: OpenWeatherMap API
- **State Management**: React Hooks (useState, useEffect)
- **Storage**: Local Storage for user preferences

## Installation & Setup 🚀

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- OpenWeatherMap API key

### Steps

1. **Clone the repository**
   ```bash
   git clone [(https://github.com/ThembelihleQueeneth/react_weather_app.git)]
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the application**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173/`

## Usage 📱

### Searching for Weather
1. Type a city name in the search bar
2. Press Enter or click the search icon
3. View current weather and forecasts

### Theme & Settings
- Click the menu icon (☰) in the top-right corner
- Toggle between Dark/Light mode
- Switch temperature units (°C/°F)

### Weather Information Displayed
- **Current**: Temperature, conditions, location, date
- **24-Hour Forecast**: Temperature trends throughout the day
- **7-Day Forecast**: Weekly temperature ranges and conditions
- **Details**: Humidity, wind speed, UV index, sunrise/sunset times

## Project Structure 📁

```
src/
├── components/
│   └──Pages
        └──DisplayWeather.tsx    # Main weather component
├── services/
│   └── weatherService.ts     # API service functions
├── assets/
│   └── logo.png             # Application logo
└── ...
```

## API Services 🌐

The app uses OpenWeatherMap API endpoints:
- Current weather data
- 5-day forecast (3-hour intervals)
- UV index data
- Geocoding for city coordinates

## Customization 🎨

### Styling
- Built with Tailwind CSS for responsive design
- Custom color scheme with lime accent colors
- Dark mode support with smooth transitions

### Adding Features
The component is structured to easily add:
- New weather metrics
- Additional forecast periods
- Different map integrations
- Weather alerts and notifications

## Browser Support 🌍

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance ⚡

- Optimized API calls with error handling
- Responsive images and icons
- Efficient state management
- Local storage caching for preferences

## Contributing 🤝

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments 🙏

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Built with [Create React App](https://create-react-app.dev/)
##Author
Thembelihle Maluka
