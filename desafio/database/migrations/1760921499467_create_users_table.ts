import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('full_name').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })

        this.schema.createTable('student', (table) => {
      table.increments('id').notNullable()
      table.string('full_name').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.timestamp('nascimento').notNullable()
      table.integer('matricula').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })

    this.schema.createTable('professor', (table) => {
      table.increments('id').notNullable()
      table.string('full_name').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.timestamp('nascimento').notNullable()
      table.integer('matricula').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })

    this.schema.createTable('class', (table) => {
      table.increments('id').notNullable()
      table.string('nome').notNullable()
      table.integer('professor_id').unsigned().references('id').inTable('professors').onDelete('CASCADE')
      
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })

    this.schema.createTable('user_classes', (table) => {
      table.increments('id').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('students').onDelete('CASCADE')
      table.integer('class_id').unsigned().references('id').inTable('classes').onDelete('CASCADE')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })

  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}