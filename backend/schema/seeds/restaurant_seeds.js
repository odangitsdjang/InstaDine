const axios = require('axios');

const names = [
  "Sophie's Crepes",
  "Kara's Cupcakes",
  "The Sandwich Spot",
  "Zoe's",
  "Mel's Drive In",
  "Panera Bread",
  "Burgermeister",
  "Blondie's Bar & No Grill",
  "Playland Bar",
  "Nabe",
  "Onigilly",
  "Box Kitchen",
  "Burgermeister",
  "Hemlock Tavern",
  "The Slanted Door",
  "Chowder Hut Fresh Grill",
  "McDonald's",
  "Schmidt's",
  "Chipotle Mexican Grill",
  "Bagelry"
];

const streets = [
  "1581 Webster St",
  "3249 Scott St",
  "3213 Pierce St",
  "3088 24th St",
  "1050 Van Ness Ave",
  "301 King St",
  "86 Carl St",
  "540 Valencia St",
  "1351 Polk St",
  "1325 9th Ave",
  "343 Kearny St",
  "431 Natoma St",
  "138 Church St",
  "1131 Polk St",
  "1 Ferry Building",
  "2890 Taylor St",
  "609 Market St",
  "2400 Folsom St",
  "865 Market St",
  "2139 Polk St"
];

const city = 'San Francisco';
const state = 'CA';

const phones = [
  "(415) 929-7732",
  "(415) 563-2253",
  "(415) 829-2587",
  "(415) 817-1972",
  "(415) 292-6357",
  "(415) 777-2080",
  "(415) 566-1274",
  "(415) 864-2419",
  "(415) 440-7529",
  "(415) 731-2658",
  "(415) 671-4706",
  "(415) 580-7170",
  "(415) 437-2874",
  "(415) 923-0923",
  "(415) 861-8032",
  "(415) 776-1849",
  "(415) 543-2595",
  "(415) 401-0200",
  "(415) 500-4491",
  "(415) 441-3003"
];

const zips = [
  "94115",
  "94123",
  "94123",
  "94110",
  "94109",
  "94158",
  "94117",
  "94110",
  "94109",
  "94122",
  "94108",
  "94103",
  "94114",
  "94109",
  "94111",
  "94133",
  "94105",
  "94110",
  "94103",
  "94109"
];

for (let i = 0; i < names.length; i++){
  const name = names[i];
  const address = {
    street: streets[i],
    city,
    state,
    zip: zips[i]
  };
  const phone_number = phones[i];
  const manager_id = "59dfb6061afc2ca83a97e865";
  const tables = {
    max: getRandomInt(15, 30)
  };

  const restaurant = {
    name,
    address,
    phone_number,
    manager_id,
    tables
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