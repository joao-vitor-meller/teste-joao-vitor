'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with weatherdates
 */

const Dates = use('App/Models/WeatherDate')
const Database =  use('Database')
var moment = require('moment-timezone');

class WeatherDateController {

  /**
   * Create/save a new weatherdate.
   * POST weatherdates = Insere dados meteorológicos para uma estação específica, definida em :id.
   */
  async store ({ request, response, params }) {
    try {  
        const id = params.id                                                                                                                                              // parametro passado na url
        const data = request.only(['air_temperature', 'air_humidity', 'wind_speed', 'rainfall', 'moment']) 
        const timezone_station = await Database.select('timezone').from("weather_stations").where('id', id)               // busca timezone da estação passando o ID
        const data_fuso = moment.tz(String(data.moment), String(timezone_station[0]["timezone"]))                         // converter para fuso horario passando o moment "2019-11-26T04:17:00.000Z", e timezone "America/Sao_Paulo" utilizando moment js.
        data.moment = data_fuso.utc()['_d']                                                                                                                     // acessa o dado de data e horario no Json.
        const dates = await Database.insert({ ...data, id: id}).into("weather_data_" + String(id))                                  // insere na tabela da estação
        response.status(201).send('Created')
        return dates
    } catch (err) {
        if (err) { 
            response.status(409).send('id/moment não encontrado ou já existe!')
        }
    }
  }

  /**
   * Display a single weatherdate.
   * GET weatherdates/:id = Busca os dados meteorológicos de uma estação meteorológica, definida em :id.
   */
  async show ({ params, request, response, view }) {
    try {
        const id = params.id
        const data = await Database.from("weather_data_" + String(id)).where('id', id)
        const timezone_station = await Database.select('timezone').from("weather_stations").where('id', id)               // selecionar timezone "America/Sao_Paulo" da estação, passando o ID
        for (var i = 0; i < data.length; i++) {                                                                                                                    // percorre o moment acessando e adequando ao fuso horário da estação
          var date = new Date(data[i].moment);
          data[i].moment = moment.tz(date, timezone_station[0]["timezone"]).format()
        }
        return data                                                                                                                                                             // apresenta o horario atualizado
    } catch (err) {
        if (err.code === 'ER_NO_SUCH_TABLE') { 
          response.status(404).send('Estação não encontrada, insira outro id.')
        }
    }
  }

}

module.exports = WeatherDateController
