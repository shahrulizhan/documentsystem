'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable()
      table.string('employee_id', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 255).notNullable()
      table.string('position', 60).notNullable()
      table.string('department', 60).notNullable()
      table.string('token', 255)

      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
