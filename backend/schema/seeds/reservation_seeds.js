const axios = require('axios');

// reservation: {
//   seat_count, 
//   status,
//   datetime, 
//   priority, 
// };

const seedArray = [
  [
    "4",
    "Pending"
  ]
];

for (let i = 0; i < seedArray.length; i++) {
  let seat_count = Math.random() * (10 - 1) + 1; //generate random seat count

  // let reservation = {
  //   seat_count,
  //   status: 
  // };

  axios.post('https://instadine.herokuapp.com/v1/reservations', reservation).then(res => {
    console.log(res);
  })
    .catch(error => {
      console.log(error);
    });
}

//seed with app function instead 