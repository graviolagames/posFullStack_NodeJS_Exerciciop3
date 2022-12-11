exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('comments').del()
      .then(function () {
        // Inserts seed entries
        return knex('comments').insert([
          { id: 1, productId:1, userName: 'Morpheus', comment: 'Very nice gadget!'},
          { id: 2, productId:2, userName: 'Neo', comment: 'Time for a new clock !'}
        ]);
      });
  };