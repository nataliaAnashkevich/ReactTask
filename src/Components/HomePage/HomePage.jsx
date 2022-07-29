import { getUserCurrentPosition } from '../../locationHelper';

function HomePage() {
  getUserCurrentPosition();
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default HomePage;
