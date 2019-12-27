'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class WeatherDate extends Model {
    static get createdAtColumn () {
      return null; // não é preciso criar as colunas de horario criado
    }
    
    static get updatedAtColumn () {
      return null;  // não é preciso criar as colunas de horario atualizado
    }
}

module.exports = WeatherDate
