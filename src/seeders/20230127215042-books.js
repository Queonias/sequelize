'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'The Shawshank Redemption',
        author: 'Frank Darabont',
        pageQuantity: '1248',
        createdAt: new Date('2022-01-28T13:23:32.514Z'),
        updatedAt: new Date('2022-01-28T13:23:32.514Z'),
      },
      {
        title: 'The Godfather',
        author: 'Francis Ford Coppola',
        pageQuantity: '1248',
        createdAt: new Date('2022-01-28T04:51:32.514Z'),
        updatedAt: new Date('2022-01-28T04:51:32.514Z'),
      },
      {
        title: 'The Dark Knight',
        author: 'Christopher Nolan',
        pageQuantity: '1248',
        createdAt: new Date('2022-01-28T19:37:32.514Z'),
        updatedAt: new Date('2022-01-28T19:37:32.514Z'),
      },
      {
        title: 'Pulp Fiction',
        author: 'Quentin Tarantino',
        pageQuantity: '1248',
        createdAt: new Date('2022-01-28T13:23:32.514Z'),
        updatedAt: new Date('2022-01-28T13:23:32.514Z'),
      },
      {
        title: 'The Lord of the Rings: The Return of the King',
        author: 'Peter Jackson',
        pageQuantity: '1248',
        createdAt: new Date('2022-01-28T04:51:32.514Z'),
        updatedAt: new Date('2022-01-28T04:51:32.514Z'),
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
