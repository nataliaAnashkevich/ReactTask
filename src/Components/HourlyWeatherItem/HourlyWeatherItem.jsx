import { toReadableTime } from '../../helpers/formatHelper';
import SafeWeatherImage from '../SafeImage/SafeWeatherImage';

function HourlyWeatherItem({ hourly }) {
  return (
    <div>
      <p>
        {toReadableTime(hourly.time)} temperature: {hourly.temperature}° precipProb:{' '}
        {hourly.precipProb} % <SafeWeatherImage symbolCode={hourly.symbol} />
      </p>
    </div>
  );
}

export default HourlyWeatherItem;
