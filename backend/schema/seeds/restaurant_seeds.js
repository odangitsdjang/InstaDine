const axios = require('axios');

// ==================================================
// Function for pulling from factual.com
//
// const factualPull = () => {
//   const groupedData = [];
//   const names = $('.slick-cell.l1.r1');
//   const streets = $('.slick-cell.l2.r2');
//   const city = 'San Francisco';
//   const state = 'CA';
//   const zips = $('.slick-cell.l5.r5');
//   const phones = $('.slick-cell.l8.r8');
//   for (let i = 0; i < 20; i++) {
//     groupedData.push([
//       names[i].innerHTML,
//       streets[i].innerHTML,
//       zips[i].innerHTML,
//       phones[i].innerHTML
//     ]);
//   }
//   return groupedData;
// };
// ==================================================

const seedArray = [
  [
    "Badlands",
    "4121 18th St",
    "94114",
    "(415) 626-9320"
  ],
  [
    "Zeitgeist",
    "199 Valencia St",
    "94103",
    "(415) 255-7505"
  ],
  [
    "Tommy's Joynt",
    "1101 Geary Blvd",
    "94109",
    "(415) 775-4216"
  ],
  [
    "Hollywood Cafe",
    "530 N Point St",
    "94133",
    "(415) 563-3779"
  ],
  [
    "Dandelion Chocolate",
    "740 Valencia St",
    "94110",
    "(415) 349-0942"
  ],
  [
    "Toad Hall",
    "4146 18th St",
    "94114",
    "(415) 621-2811"
  ],
  [
    "The Starlight Room",
    "450 Powell St",
    "94102",
    "(415) 395-8595"
  ],
  [
    "Umami Burger",
    "2184 Union St",
    "94123",
    "(415) 440-8626"
  ],
  [
    "Punch Line Comedy Club",
    "444 Battery St",
    "94111",
    "(415) 397-7573"
  ],
  [
    "The Armory Club",
    "1799 Mission St",
    "94103",
    "(415) 431-5300"
  ],
  [
    "Harris Restaurant",
    "2100 Van Ness Ave",
    "94109",
    "(415) 673-1888"
  ],
  [
    "Honey Honey Cafe &amp; Crepery",
    "599 Post St",
    "94102",
    "(415) 351-2423"
  ],
  [
    "Temple Nightclub",
    "540 Howard St",
    "94105",
    "(415) 978-9942"
  ],
  [
    "Double Dutch",
    "3192 16th St",
    "94103",
    "(415) 503-1670"
  ],
  [
    "The Cheesecake Factory",
    "251 Geary St",
    "94102",
    "(415) 391-4444"
  ],
  [
    "Sophie's Crepes",
    "1581 Webster St",
    "94115",
    "(415) 929-7732"
  ],
  [
    "83 Proof",
    "83 1st St",
    "94105",
    "(415) 296-8383"
  ],
  [
    "The Wreck Room",
    "1390 California St",
    "94109",
    "(415) 932-6715"
  ],
  [
    "Duboce Park Cafe",
    "2 Sanchez St",
    "94114",
    "(415) 621-1108"
  ],
  [
    "Anchor &amp; Hope",
    "83 Minna St",
    "94105",
    "(415) 501-9100"
  ]
];

const city = 'San Francisco';
const state = 'CA';

for (let i = 0; i < seedArray.length; i++){
  const name = seedArray[i][0];
  const address = {
    street: seedArray[i][1],
    city,
    state,
    zip: seedArray[i][2]
  };
  const phone_number = seedArray[i][3];
  const manager_id = "59dfb6061afc2ca83a97e865";
  const tables = {
    max: getRandomInt(15, 30)
  };
  const available = getRandomInt(0,1);

  const wait_time = available ? getRandomInt(15, 35) : 0;

  const restaurant = {
    name,
    address,
    phone_number,
    manager_id,
    tables,
    wait_time
  };

  // console.log(restaurant);
  axios.post('http://localhost:3000/v1/restaurants', restaurant).then(res =>{
    console.log(res);
  })
    .catch(error => {
      console.log(error);
    });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}