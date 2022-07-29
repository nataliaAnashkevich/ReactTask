function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(latitude, longitude);
}
function error(e) {
  console.log(e);
}

export function getUserCurrentPosition() {
  return window.navigator.geolocation.getCurrentPosition(success, error);
}
