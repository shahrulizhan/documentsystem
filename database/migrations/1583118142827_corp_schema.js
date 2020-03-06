'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CorpSchema extends Schema {
  up () {
    this.create('corps', (table) => {
      table.increments('code')
      table.string('name').notNullable()
      table.string('ext').notNullable()
      table.string('file_name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('corps')
  }
}

module.exports = CorpSchema
