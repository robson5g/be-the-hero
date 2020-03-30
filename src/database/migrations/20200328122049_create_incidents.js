exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    //** PRIMARY key */
    table.increments();
    //**lines on the table */
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();
    //**Relations */
    table.string("ong_id").notNullable();
    //**foreign key */
    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
