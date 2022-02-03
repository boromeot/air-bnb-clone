'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spots', [
      {
        userId: 1,
        title: "Dreamy Treehouse Above Park City, Utah",
        price: 208,
        address: 'Fake address',
        city: 'Park city',
        state: 'Utah',
        description: "Bring your childhood dreams to life by going on a real treehouse adventure! This beautiful, one-of-a-kind escape is situated at 8,000 feet and embraced by a 200 year old fir. Accessible only by 4x4/AWD for 3 miles of dirt or snow-packed roads, it features a lofted bedroom with skylight, kitchen, hot-water bathroom, main room with 270-degree glass windows and large deck. Be prepared for small spaces and lots of stairs with breathtaking views of the Uintas that are nothing short of spectacular!",
        place: 'Treehouse',
        type: 'House',
        space: 'An entire place',
        guests: 2,
        beds: 1,
        bedrooms: 1,
        bathrooms: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: "The Treehouse",
        price: 208,
        address: 'Fake address',
        city: 'Orderville',
        state: 'Utah',
        description: "Welcome to The Treehouse at The Escape! This is our newest and most creative addition yet. We've specialized in Tiny Homes for years but this year we decided to add one 16 feet up in a tree! Our hundred year old cottonwood tree died last year and we just couldn't cut it down. So, what did we do? We preserved the trunk and built us a treehouse to share with everyone. We are also one of the only approved \"Airbnb Experience\" hosts in all of Utah",
        place: 'Treehouse',
        type: 'House',
        space: 'An entire place',
        guests: 3,
        beds: 1,
        bedrooms: 1,
        bathrooms: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Spots', null, {});
  }
};
