import axios from "axios";
import cResponse from "../../interface/cResponse";

export async function getGeoPosition(zip: number) {
  const response: cResponse = { status: 400 };
  try {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${
        import.meta.env.VITE_APP_FIREBASE_APIKEY
      }`
    );
    const result = res.data.results[0].geometry.location;

    if (result.lat !== null && result.lng !== null) {
      response.status = 200;
      response.message = "Successfully position got";
      response.payload = { lat: result.lat, lng: result.lng };
      return response;
    } else {
      response.status = 404;
      response.message = "Failed no position found";
      return response;
    }
  } catch (error) {
    response.status = 500;
    response.message = "Failed to get position";
    return response;
  }
}
