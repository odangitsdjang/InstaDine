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

const seedArray = [
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
    "Pandora Karaoke &amp; Bar",
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
    "Blue &amp; Gold Fleet",
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
  const phone_number = seedArray[i][3];
  const manager_id = "59dfb6061afc2ca83a97e865";
  const tables = {
    max: getRandomInt(15, 30)
  };
  const available = getRandomInt(0,2);

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
//   "wait": "wait_time"
// }