'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Station extends Model {
      static get table () {
          return 'weather_stations' // retorna todas as estações metereológicas inseridas
      }

    static get createdAtColumn () {
        return null; // não é preciso criar as colunas de horario criado
      }
      
      static get updatedAtColumn () {
        return null;  // não é preciso criar as colunas de horario atualizado
      }

      static scopeAlias(query){
          return query.select(['id', 'name'])  // retorna um json mais simples apenas com alguns itens
      }
}

module.exports = Station
