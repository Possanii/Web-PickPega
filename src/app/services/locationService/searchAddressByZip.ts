import cResponse from "../../interface/cResponse";

export async function searchAddressByZip(zip: number) {
  const response: cResponse = {
    status: 400,
    message: "Something went wrong when searching for address zip",
  };
  const apiUrl = `https://viacep.com.br/ws/${zip}/json/`;
  const result = await fetch(apiUrl);
  const data = await result.json();

  if (data.erro === true || data.erro === "true") {
    response.status = 404;
    response.message = "Could not find address by zip";
    return response;
  } else {
    response.status = 200;
    response.message = "Address was found";
    response.payload = {
      street: data.logradouro,
      neighborhood: data.bairro,
      city: data.localidade,
      uf: data.uf,
    };
    return response;
  }
}
