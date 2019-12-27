var axios = require('axios') // Axios: requisições HTTP que funciona tanto no browser quanto em node.js. 
var moment = require('moment-timezone'); // Moment Js: Analisa e exibe datas em qualquer fuso horário.

/**
*    Get weather-stations: Buscar cada estação meteorológica cadastrada na API.
*/
axios.get('http://localhost:3333/weather-stations')  
  .then(function(response){
      req_stations(response.data) // chama função para buscar dados.
  }).catch(error => {
    console.log(error.response) // erro caso a rota não seja encontrada.
});  

/**
*    função para percorrer JSON de estações meteorológicas e buscar dados relevantes.
*/
function req_stations(data){
  for (var i = 0; i < data.length; i++) {
    req_darksky(data[i]["id"],data[i]["latitude"],data[i]["longitude"],data[i]["timezone"]) // chama função para buscas na API Dark Sky
  }
}

/**
*    função para converter temperaturas de fahrenheit para celsius
*/
function Celsius(f) {
  celsius = (5/9) * (f-32);
  return parse_number(celsius)
}

/**
*    função para converter numero para Float e fixar numeros depois da vírgula
*/
function parse_number(p){
  return Number(parseFloat(p).toFixed(2))
}

/**
*    Get darksky: Chama DarkSky API, através da lat, lng das estações, capta as informações e faz a conversão.
*/
function req_darksky(id,lat, lng, timezone){
    axios.get('  https://api.darksky.net/forecast/cc57eded744c264838f0f10fec22fca4/'+lat+','+lng+'')
    .then(function(response){
      // percorrer todas as horas siponibilizadas pela API, captando as informações
      for (var i = 0; i < response.data['hourly'].data.length; i++) {
            var date = new Date(response.data['hourly'].data[i]['time']*1000); // converter data em UNIX para time
            params = {
              "air_temperature": Celsius(response.data['hourly'].data[i]['apparentTemperature']) ,              // temperatura em celsius
              "air_humidity": parse_number((response.data['hourly'].data[i]['humidity'])*100),                  // umidade do ar em %
              "wind_speed": response.data['hourly'].data[i]['windSpeed'],                                                    // velocidade do vento em m/s
              "rainfall": parse_number(((response.data['hourly'].data[i]['precipIntensity'])*25.4)*100),      // precipitação de chuva: converter polegadas por hora para mm por hora
              "moment": date                                                                                                                          // converter data em UNIX para time
            }
            makePostRequest(params,id) // Após as conversões os parametros são enviados para a requisição POST
        }
    });  
}

/**
*    Post /weather-data:  Insere os dados meteorológicos para as estações cadastradas. 
*/
async function makePostRequest(params, id) {
    let res = await axios.post("http://localhost:3333/weather-data/"+id+'', params) // requisição para API passando o ID "http://localhost:3333/weather-data/1'".
    .then((response) => {
      // Success 🎉
      console.log(response.data)
  })
  .catch((error) => {
      // Já Existe 🎉
      console.log(error.response['data'])
  });
}
