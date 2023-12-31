interface IAddressResponse {
  status: number;
  message: string;
  payload: {
    street: string;
    neighborhood: string;
    city: string;
    uf:
      | "AC"
      | "AL"
      | "AP"
      | "AM"
      | "BA"
      | "CE"
      | "DF"
      | "ES"
      | "GO"
      | "MA"
      | "MT"
      | "MS"
      | "MG"
      | "PA"
      | "PB"
      | "PR"
      | "PE"
      | "PI"
      | "RJ"
      | "RN"
      | "RS"
      | "RO"
      | "RR"
      | "SC"
      | "SE"
      | "SP"
      | "TO";
  };
}

export async function searchAddressByZip(zip: number) {
  const response = {} as IAddressResponse;
  const apiUrl = `https://viacep.com.br/ws/${zip}/json/`;
  const result = await fetch(apiUrl);
  const data = await result.json();

  if (data.erro === true || data.erro === "true") {
    response.status = 404;
    response.message = "Cep não encontrado ou inválido";
    return response;
  } else {
    response.status = 200;
    response.message = "Cep encontrado com sucesso";
    response.payload = {
      street: data.logradouro,
      neighborhood: data.bairro,
      city: data.localidade,
      uf: data.uf,
    };
    return response;
  }
}
