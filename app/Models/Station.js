'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Station extends Model {

      /**
     *  Retorna todas as estações metereológicas inseridas
     */
      static get table () {
          return 'weather_stations' 
      }

      /**
     *  Não é preciso criar a coluna de horario criado
     */
    static get createdAtColumn () {
        return null; 
      }
      
      /**
     *  Não é  preciso criar a coluna de horario atualizado
     */
      static get updatedAtColumn () {
        return null; 
      }

       /**
     *  Retorna um json mais simples apenas com alguns itens
     */
      static scopeAlias(query){
          return query.select(['id', 'name'])  
      }
}

module.exports = Station
