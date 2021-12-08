exports.up = function (knex) {
  return knex.schema.createTable("cart", (table) => {
    table.increments();
    table.string("product");
    table.string("product_id");
    table.string("category");
    table.string("quantity");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cart");
};
