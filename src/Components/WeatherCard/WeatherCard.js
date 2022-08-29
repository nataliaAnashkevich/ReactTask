import { capitalize, toReadableDate, toReadableTime } from '../../helpers/formatHelper';
import SafeWeatherImage from '../SafeImage/SafeWeatherImage';

function WeatherCard({ time, precipProb, pressure, windSpeed, symbolPhrase, symbol }) {

  return (
    <>
      {time && <>
        <p>{toReadableDate(time)}</p>
        <p>{toReadableTime(time)}</p>
      </>}
      {precipProb && <p>Probability of precipitation: {precipProb}%</p>}
      {pressure && <p>Pressure (hPa) {pressure}%</p>}
      {windSpeed && <p>Wind speed (m/s) {windSpeed}</p>}
      {symbolPhrase && <p>{capitalize(symbolPhrase)}</p>}
      {symbol && <SafeWeatherImage symbolCode={symbol} />}
    </>
  )
}

export default WeatherCard;