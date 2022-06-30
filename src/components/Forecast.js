import { useState, useEffect } from "react";
import ForecastRow from "./ForecastRow";

const Forecast = () => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        " http://api.openweathermap.org/data/2.5/forecast/daily?q=Skopje&units=metric&cnt=7&appid=886705b4c1182eb1c69f28eb8c520e20"
      );
      const data = await res.json();
      setForecastData(data.list);
    };
    getData();
  }, []);

  return (
    <div className="Forecast">
      <h2 className="title"> Forecast </h2>

      <table className="table table-bordered text-white">
        <thead>
          <tr>
            <th>Icon</th>
            <th>Weather</th>
            <th>Description</th>
            <th>Morning Temperature</th>
            <th> Night Temperature</th>
            <th> Min. Temperature</th>
            <th> Max. Temperature</th>
            <th> Preasure</th>
            <th> Humidity</th>
            <th>Wind Speed</th>
            <th>Wind Direction</th>
          </tr>
        </thead>
        <tbody>
          {forecastData &&
            forecastData.map((item, idx) => (
              <ForecastRow
                key={idx}
                icon={item.weather[0].icon}
                weather={item.weather[0].main}
                desc={item.weather[0].description}
                mtemp={item.temp.morn}
                ntemp={item.temp.night}
                mintemp={item.temp.min}
                maxtemp={item.temp.max}
                pressure={item.pressure}
                humidity={item.humidity}
                windSpeed={item.speed}
                windDirection={item.deg}
              />
              //   <tr key={idx}>
              //     <td>
              //       <img
              //         src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
              //         alt="alt"
              //       />
              //     </td>
              //     <td>{item.weather[0].main}</td>
              //     <td>{item.weather[0].description}</td>
              //     <td> {item.temp.morn}</td>
              //     <td> {item.temp.night}</td>
              //     <td> {item.temp.min}</td>
              //     <td> {item.temp.max}</td>
              //     <td> {item.pressure}</td>
              //     <td> {item.humidity}</td>
              //     <td> {item.speed}</td>
              //     <td> {item.deg}</td>
              //   </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Forecast;
