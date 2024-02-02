"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const apiKey = "addc9943c77cd345eed8896aa3a4f441";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=yogyakarta";

  const [weatherData, setWeatherData] = useState(null);
  const [theme, setTheme] = useState("light"); // Add this line

  useEffect(() => {
    async function checkWeather() {
      const response = await fetch(apiUrl + `&appid=${apiKey}`);
      let data = await response.json();
      setWeatherData(data);
    }
    checkWeather();
  }, []);
  // Add this useEffect hook
  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme]);

  if (!weatherData) {
    return (
      <div className="flex items-center justif-center w-screen h-screen">
        Loading...
      </div>
    );
  } else {
    return (
      <div className="">
        <div className="">
          <button
            className="theme p-10 "
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.9 4.9 1.4 1.4" />
              <path d="m17.7 17.7 1.4 1.4" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.3 17.7-1.4 1.4" />
              <path d="m19.1 4.9-1.4 1.4" />
            </svg>
          </button>
          {/* Rest of your code... */}
        </div>
        <div className="flex gap-4 justify-center my-12">
          <input
            className="border-2 py-2 px-4 rounded-3xl "
            placeholder="Rusak gan inputnya"
            type="text"
          />
          <button title="button">
            <svg
              className="text-slate-400"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </div>
        {/* ... */}
        <h1 id="kota" className="flex justify-center font-bold text-2xl p-4">
          <div className="justify-center flex w-screen">
            <div className="">
              <div className="flex justify-center">{weatherData['name']}</div>
              <svg
                className="flex justify-center w-screen  my-12"
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="74"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a7 7 0 1 0 10 10" />
              </svg>
            </div>
          </div>
        </h1>
        <h1 id="klasifikasi" className="flex justify-center p-4 font-semibold">
          {weatherData['weather'][0]['main']}
        </h1>
        {/* ... */}

        <div className="flex justify-evenly my-24">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
              <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
              <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
            </svg>
            <div>
              <h1>Kecepatan Angin.</h1>
              <h1 id="wind">{weatherData['wind']['speed']}kmh/j</h1>
            </div>
          </div>
          {/* ... */}

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 9a4 4 0 0 0-2 7.5" />
              <path d="M12 3v2" />
              <path d="m6.6 18.4-1.4 1.4" />
              <path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
              <path d="M4 13H2" />
              <path d="M6.34 7.34 4.93 5.93" />
            </svg>
            <div>
              <h1>Temperatur</h1>
              <h1 id="suhu">{weatherData['main']['temp']}°C</h1>
            </div>
          </div>
        </div>
        {/* ... */}
      </div>
    );
  }
}
