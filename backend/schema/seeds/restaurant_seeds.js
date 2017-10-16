const axios = require('axios');

// ==================================================
// Function for pulling from factual.com

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

const images = [
  "https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/92090/pexels-photo-92090.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/5317/food-salad-restaurant-person.jpg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/3498/italian-pizza-restaurant-italy.jpg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/240223/pexels-photo-240223.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/225448/pexels-photo-225448.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/62097/pexels-photo-62097.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/5249/bread-food-restaurant-people.jpg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/225228/pexels-photo-225228.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/104884/pexels-photo-104884.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/407293/pexels-photo-407293.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/265903/pexels-photo-265903.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/105066/pexels-photo-105066.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/324030/pexels-photo-324030.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/348517/pexels-photo-348517.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/66640/pexels-photo-66640.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/305972/pexels-photo-305972.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/374073/pexels-photo-374073.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/305832/pexels-photo-305832.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/388240/pexels-photo-388240.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/529923/pexels-photo-529923.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/169391/pexels-photo-169391.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/296888/pexels-photo-296888.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/286283/pexels-photo-286283.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/34112/pexels-photo.jpg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/51115/restaurant-wine-glasses-served-51115.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/437645/pexels-photo-437645.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/221143/pexels-photo-221143.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/9708/food-pizza-restaurant-eating.jpg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/3540/restaurant-alcohol-bar-drinks.jpg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/110813/pexels-photo-110813.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/78086/restaurant-building-urban-architecture-78086.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/262982/pexels-photo-262982.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/9532/food-plate-restaurant-eating.jpg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/332090/pexels-photo-332090.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/280009/pexels-photo-280009.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/321598/pexels-photo-321598.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/390658/pexels-photo-390658.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/4309/city-restaurant-table-pavement.jpg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/1475/food-vegetables-italian-restaurant.jpg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/461326/pexels-photo-461326.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/3044/restaurant-love-romantic-dinner.jpg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/296882/pexels-photo-296882.jpeg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/8844/red-lunch-green-knolling.jpg?h=350&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?h=350&auto=compress&cs=tinysrgb"
];

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
    "Honey Honey Cafe & Crepery",
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
    "Anchor & Hope",
    "83 Minna St",
    "94105",
    "(415) 501-9100"
  ],
  [
    "Yancy's Saloon",
    "734 Irving St",
    "94122",
    "(415) 665-6551"
  ],
  [
    "Stacks",
    "501 Hayes St",
    "94102",
    "(415) 241-9011"
  ],
  [
    "The Blue Light",
    "1979 Union St",
    "94123",
    "(415) 922-5510"
  ],
  [
    "Elixir",
    "3200 16th St",
    "94103",
    "(415) 552-1633"
  ],
  [
    "Tartine Bakery",
    "600 Guerrero St",
    "94110",
    "(415) 487-2600"
  ],
  [
    "Hunan Home's Restaurant",
    "622 Jackson St",
    "94133",
    "(415) 982-2844"
  ],
  [
    "Puerto Alegre",
    "546 Valencia St",
    "94110",
    "(415) 255-8201"
  ],
  [
    "Local Kitchen & Wine Merchant",
    "330 1st St",
    "94105",
    "(415) 777-4200"
  ],
  [
    "Skylark",
    "3089 16th St",
    "94103",
    "(415) 621-9294"
  ],
  [
    "Anthony's Cookies",
    "1417 Valencia St",
    "94110",
    "(415) 655-9834"
  ],
  [
    "Kara's Cupcakes",
    "3249 Scott St",
    "94123",
    "(415) 563-2253"
  ],
  [
    "Squat & Gobble Cafe",
    "2263 Chestnut St",
    "94123",
    "(415) 441-2200"
  ],
  [
    "Mr. Smith's",
    "34 7th St",
    "94103",
    "(415) 355-9991"
  ],
  [
    "Asha Tea House",
    "17 Kearny St",
    "94108",
    "(415) 549-3688"
  ],
  [
    "Regalito Rosticeria",
    "3481 18th St",
    "94110",
    "(415) 503-0650"
  ],
  [
    "Pizza Orgasmica",
    "3157 Fillmore St",
    "94123",
    "(415) 931-5300"
  ],
  [
    "The Plant Cafe Organic",
    "3352 Steiner St",
    "94123",
    "(415) 931-2777"
  ],
  [
    "Hogwash",
    "582 Sutter St",
    "94102",
    "(415) 361-5500"
  ],
  [
    "Town's End Restaurant & Bakery",
    "2 Townsend St",
    "94107",
    "(415) 512-0749"
  ],
  [
    "Velvet Cantina",
    "3349 23rd St",
    "94110",
    "(415) 648-4142"
  ],
  [
    "Taylor Street Coffee Shop",
    "375 Taylor St",
    "94102",
    "(415) 567-4031"
  ],
  [
    "Le P'tit Laurent",
    "699 Chenery St",
    "94131",
    "(415) 334-3235"
  ],
  [
    "Farolito Taqueria",
    "2950 24th St",
    "94110",
    "(415) 641-0758"
  ],
  [
    "Pandora Karaoke & Bar",
    "177 Eddy St",
    "94102",
    "(415) 359-1888"
  ],
  [
    "Han Il Kwan Korean Restaurant",
    "1802 Balboa St",
    "94121",
    "(415) 752-4447"
  ],
  [
    "Crepes On Cole",
    "100 Carl St",
    "94117",
    "(415) 664-1800"
  ],
  [
    "Barney's Gourmet Hamburgers",
    "4138 24th St",
    "94114",
    "(415) 282-7770"
  ],
  [
    "Truly Mediterranean",
    "3109 16th St",
    "94103",
    "(415) 252-7482"
  ],
  [
    "Olive Garden",
    "3251 20th Ave",
    "94132",
    "(415) 661-6770"
  ],
  [
    "Savoy Tivoli",
    "1434 Grant Ave",
    "94133",
    "(415) 362-7023"
  ],
  [
    "Rocco's Cafe",
    "1131 Folsom St",
    "94103",
    "(415) 554-0522"
  ],
  [
    "Za Pizza",
    "1919 Hyde St",
    "94109",
    "(415) 771-3100"
  ],
  [
    "Golden Star Vietnamese Restaurant",
    "11 Walter U Lum Pl",
    "94108",
    "(415) 398-1215"
  ],
  [
    "Cafe de Casa",
    "2701 Leavenworth St",
    "94133",
    "(415) 345-1055"
  ],
  [
    "54 Mint",
    "16 Mint Plz",
    "94103",
    "(415) 543-5100"
  ],
  [
    "Uva Enoteca",
    "568 Haight St",
    "94117",
    "(415) 829-2024"
  ],
  [
    "Plutos Fresh Food for A Hungry Universe",
    "3258 Scott St",
    "94123",
    "(415) 775-8867"
  ],
  [
    "Schubert's Bakery",
    "521 Clement St",
    "94118",
    "(415) 752-1580"
  ],
  [
    "Blue & Gold Fleet",
    "39 Pier",
    "94133",
    "(415) 705-8200"
  ],
  [
    "Mel's Drive In",
    "2165 Lombard St",
    "94123",
    "(415) 921-2867"
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
  const picture_url = images[i];
  const phone_number = seedArray[i][3];
  const manager_id = "59dfb6061afc2ca83a97e865";
  const tables = {
    max: getRandomInt(15, 30)
  };
  const available = getRandomInt(0,3);

  let wait_time, seats_available;
  if (available <= 1) {
    wait_time = 0;
    seats_available = getRandomInt(1,5) * 2;
  }
  else { 
    wait_time = getRandomInt(5, 35);
    seats_available = 0;
  }

  const restaurant = {
    name,
    address,
    phone_number,
    manager_id,
    tables,
    wait_time,
    seats_available,
    picture_url
  };

  // console.log(restaurant);
  axios.post('https://instadine.herokuapp.com/v1/restaurants', restaurant).then(res =>{
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


// MLab Table View
// {
//   "_id": "id",
//   "name": "name",
//   "addres": "full_address",
//   "phone": "phone_number",
//   "lat": "geo.latitude",
//   "long": "geo.longitude",
//   "wait": "wait_time",
//   "seats": "seats_available"
// }