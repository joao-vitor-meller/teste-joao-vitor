'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class WeatherDate extends Model {

    /**
     *  Não é preciso criar a coluna de horario criado
     */
    static get createdAtColumn () {
      return null; // 
    }
    
    /**
     *  Não é preciso criar a coluna de horario atualizado
     */
    static get updatedAtColumn () {
      return null; 
    }
}

module.exports = WeatherDate
