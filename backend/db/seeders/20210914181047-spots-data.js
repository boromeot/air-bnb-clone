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
        price: 214,
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
      {
        userId: 1,
        title: "Redwood TreeHouse in Aptos Mountain Retreat & Spa",
        price: 262,
        address: 'Fake address',
        city: 'Aptos',
        state: 'California',
        description: "Om Oasis is a beautiful and lush retreat center on several acres of a remote and peaceful 15 acre mountain top property. We host guests who wish to connect with the beauty of nature and experience peace. We are 10-15 minutes up the mountain and partially off-grid with little to no cell reception but with a great WiFi connection. There are a total of 7 guest accommodations (including this one) spread out over our developed 3 acres, making it always a very private experience.",
        place: 'Treehouse',
        type: 'House',
        space: 'An entire place',
        guests: 4,
        beds: 1,
        bedrooms: 1,
        bathrooms: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: "The TokinTree a Cannabis Friendly Rental",
        price: 260,
        address: 'Fake address',
        city: 'Cave Junction',
        state: 'Oregon',
        description: "This is a cannabis friendly treehouse rental. All guests must be at least 21 years of age or older to stay. The treehouse accommodates up to 4 people, the rental comes with some complimentary cannabis and a garden tour(when available-please note tours are NOT guaranteed). This is a treehouse built among the canopy and branches of a tree, during certain times, especially early spring and summer there is the potential for bugs to be in the treehouse.",
        place: 'Treehouse',
        type: 'House',
        space: 'An entire place',
        guests: 4,
        beds: 1,
        bedrooms: 1,
        bathrooms: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: "Ocean View Malibu Getaway",
        price: 828,
        address: 'Fake address',
        city: 'Malibu',
        state: 'California',
        description: "Enjoy this Malibu Beach House. This 3 Bedroom/2 Bath House is perfect for a romantic getaway or for those looking to relax for the weekend. Enjoy the panoramic views of the Santa Monica Bay and the sunsets are not to be missed. A short drive or bike ride to all the shopping and dining Malibu has to offer. In addition to the beach, there are lots of trails and wine tasting nearby",
        place: 'House',
        type: 'Residential home',
        space: 'An entire place',
        guests: 6,
        beds: 3,
        bedrooms: 3,
        bathrooms: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: "Fantastic Oceanfront Condo Featuring Free WiFi, Patio",
        price: 194,
        address: 'Fake address',
        city: 'Carlsbad',
        state: 'California',
        description: "This comfy studio is located right on the beach in Carlsbad. It is within walking distance of all the great shops, restaurants, pubs, bars, and entertainment Carlsbad has to offer. This condo has a Murphy bed that can be tucked away during the daytime and brought down for sleeping and relaxing. The sliding glass door opens to a beautiful view of the pacific ocean. Enjoy the sound of the waves breaking on the shore, beautiful sunsets, and playing in the ocean.",
        place: 'House',
        type: 'Condominium',
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
        title: "Premium Sunset Penthouse Ocean Front in Malibu",
        price: 1027,
        address: 'Fake address',
        city: 'Malibu',
        state: 'California',
        description: "Watch the waves lapping against the shore from the relaxing deck of this exquisite penthouse that is directly on the sand. The home has been remodeled with upgraded appliances and technology. It has a nautical theme with ocean views from every room.",
        place: 'House',
        type: 'Condominium',
        space: 'An entire place',
        guests: 6,
        beds: 2,
        bedrooms: 2,
        bathrooms: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: "Seamist Beach Cottage, Private Beach & Ocean views",
        price: 657,
        address: 'Fake address',
        city: 'Bodega Bay',
        state: 'California',
        description: "Welcome to our beach cottage for the 'Ultimate Pacific Coast Surf Experience'. Perched atop a cliff overlooking the Pacific approximately 4 miles north of Bodega Bay. The photo's will depict views from the actual property and the beautiful coastal inspired interior. You will have your own private stairs down to a sheltered, secluded and private beach.",
        place: 'House',
        type: 'Cottage',
        space: 'An entire place',
        guests: 4,
        beds: 3,
        bedrooms: 2,
        bathrooms: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: "Wild West #2 - Death Valley Getaway Cabin",
        price: 134,
        address: 'Fake address',
        city: 'Beatty',
        state: 'Nevada',
        description: "Wild West Death Valley Getaway Cabins were featured as one of the top Ultimate Desert Winter Getaways in the Oct. 2020 issue. Located in Beatty, just 7 mi from the entrance to Death Valley National Park, 4 mi to Rhyolite Ghost Town and 5 mi to Titus Canyon Entrance. This cabin will win you over with rustic charm and hospitality. Enjoy the mountain views and beautiful sunrises and sunsets from your personal covered porch.",
        place: 'House',
        type: 'Cabin',
        space: 'An entire place',
        guests: 6,
        beds: 4,
        bedrooms: 2,
        bathrooms: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        title: "Cozy and Private Riverfront Cabin on 50 Acres",
        price: 246,
        address: 'Fake address',
        city: 'Appomattox',
        state: 'Virginia',
        description: "Voted “Coolest AirBnb in Virginia” by Condé Nast www.cntraveler.com/gallery/best-airbnbs-in-the-us; Nestled amongst a stand of mature hardwood trees, atop a bluff overlooking the scenic Appomattox River, this cozy cabin is a great place to let your stress melt away. Originally built in the 1800's and moved to its current location in the 1970's, it offers old-school charm and modern comfort.",
        place: 'House',
        type: 'Cabin',
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
        title: "Cozy Rustic Cabin near the Lake",
        price: 93,
        address: 'Fake address',
        city: 'Locust Grove',
        state: 'Virginia',
        description: "Rustic and charming beach cabin in beautiful Lake of the Woods! The downstairs has the kitchen, living area, full bath, and queen bedroom. The upstairs has the two full beds and a half bath (to save you walking downstairs at night!) We love our cabin and getting to share it with others. Please make yourself at home for your stay and enjoy everything Lake of the Woods has to offer!",
        place: 'House',
        type: 'Cabin',
        space: 'An entire place',
        guests: 6,
        beds: 3,
        bedrooms: 2,
        bathrooms: 1.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Spots', null, {});
  }
};
