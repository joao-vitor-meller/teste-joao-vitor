'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with weather_stations
 */
 const Station = use('App/Models/Station')
 const Database = use('Database')

class StationController {

  /**
   * Show a list of all stations.
   * GET stations = Lista todas as estações meteorológicas disponíveis.
   */
  async index ({ request, response, view }) {
      const stations = await Station.all()
      return stations // lista todas as estações meterológicas
  }

  /**
   * Create/save a new station.
   * POST stations = Criação de uma nova estação meteorológica.
   */

  async store ({ request, response }) {
      try {
          const data = request.only(['id','name', 'timezone', 'latitude', 'longitude', 'altitude'])
          const station = await Station.create(data)
          /** após criar nova estação, utilizando database.row, é criada uma tabela para ela contendo seu <id> no nome weather_data_<id>. */
          await Database.raw("CREATE TABLE weather_data_"+station.id+" ( id int(11) NOT NULL, air_temperature float NOT NULL, air_humidity int(11) DEFAULT NULL, wind_speed float NOT NULL, rainfall float NOT NULL DEFAULT '0', moment datetime NOT NULL, PRIMARY KEY (`id`,`moment`), CONSTRAINT `weather_data_"+station.id+"_FK` FOREIGN KEY (`id`) REFERENCES `weather_stations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE  ) ENGINE=InnoDB DEFAULT CHARSET=utf8; ")
          response.status(201).send(station)  // retorno 201 = estação criada.
       } catch (err) {
          if (err.code === 'ER_DUP_ENTRY') { //  id já existe, não é possivel inserir outro igual.
              response.status(400).send('ID já existe, insira outro.') 
          }
      }
  }

  /**
   * Display a single station.
   * GET stations/:id = Lista as informações de uma estação meteorológica, através de seu identificador definido por :id.
   */
  async show ({ params, request, response, view }) {
      try {
        const station = await Station.findOrFail(params.id) 
        return station // retorna estação com base no id passado na requisição
      } catch (err) {
        if (err.code === 'E_MISSING_DATABASE_ROW') { //  id não existe, não é possivel buscar.
          response.status(404).send('ID não encontrado, insira outro.') 
      }
    }
  }
}

module.exports = StationController
