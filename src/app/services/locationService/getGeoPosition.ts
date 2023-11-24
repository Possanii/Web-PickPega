import axios from "axios";
import cResponse from "../../interface/cResponse";

export async function getGeoPosition(zip: number) {
  const response: cResponse = { status: 400, message: "Algo deu errado" };
  try {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${
        import.meta.env.VITE_APP_FIREBASE_APIKEY
      }`
    );
    const result = res.data.results[0].geometry.location;

    if (result.lat !== null && result.lng !== null) {
      response.status = 200;
      response.message = "Latitude e longitude capturadas";
      response.payload = { lat: result.lat, lng: result.lng };
      return response;
    } else {
      response.status = 404;
      response.message = "Coordenadas não encontrada";
      response.payload = { lat: null, lng: null };
      return response;
    }
  } catch (error) {
    response.status = 500;
    response.message = "Algo deu errado ao capturar as coordenadas";
    response.payload = { lat: null, lng: null };
    return response;
  }
}
