function CurrentLocation({ currentLocation }) {
  return (
    <h2>
      {currentLocation.city}, {currentLocation.country}
    </h2>
  );
}

export default CurrentLocation;
