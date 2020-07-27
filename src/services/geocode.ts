import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyBcrKLkUoPcn6q_yfVd5mugcUrfUAiFOzc");

export async function getCoordFromAddress(address: string) {
  try {
    const response = await Geocode.fromAddress(address);
    return response.results[0].geometry.location;
  } catch (err) {
    console.log(err);
  }
}

export async function getAddressFromCoord(latitude: string, longitude: string) {
  try {
    const response = await Geocode.fromLatLng(latitude, longitude);
    return response.results[0].formatted_address;
  } catch (err) {
    console.log(err);
  }
}
