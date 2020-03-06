'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItSchema extends Schema {
  up () {
    this.create('its', (table) => {
      table.increments('code')
      table.string('name').notNullable()
      table.string('ext').notNullable()
      table.string('file_name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('its')
  }
}

module.exports = ItSchema
