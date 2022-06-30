const ForecastRow = ({
  icon,
  weather,
  desc,
  mtemp,
  ntemp,
  mintemp,
  maxtemp,
  pressure,
  humidity,
  windSpeed,
  windDirection,
}) => {
  return (
    <tr>
      <td>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="alt" />
      </td>
      <td>{weather}</td>
      <td>{desc}</td>
      <td> {mtemp}</td>
      <td> {ntemp}</td>
      <td> {mintemp}</td>
      <td> {maxtemp}</td>
      <td> {pressure}</td>
      <td> {humidity}</td>
      <td> {windSpeed}</td>
      <td> {windDirection}</td>
    </tr>
  );
};

export default ForecastRow;
