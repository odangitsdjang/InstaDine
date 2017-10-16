const axios = require('axios');

// user: {
//   email,
//   password,
//   username, 
//   phoneNumber, 
//   profilePicture
// }

const seedArray = [
  [
    "demo@demo.com",
    "123456",
    'demo',
    "(123)456-7890",
    "https://res.cloudinary.com/jerryzlau/image/upload/v1507858335/account_friend_human_man_member_person_profile_user_users-256_ovxp2a.png"
  ],
  [
    "adrian@rivero.com",
    "123456",
    'Adrian Rivero',
    "(000)000-0000",
    "https://res.cloudinary.com/jerryzlau/image/upload/v1507858335/account_friend_human_man_member_person_profile_user_users-256_ovxp2a.png"
  ],
  [
    "david@Chu.com",
    "123456",
    'David Chu',
    "(111)111-1111",
    "https://res.cloudinary.com/jerryzlau/image/upload/v1507858335/account_friend_human_man_member_person_profile_user_users-256_ovxp2a.png"
  ],
  [
    "jerry@lau.com",
    "123456",
    'Jerry Lau',
    "(222)222-2222",
    "https://res.cloudinary.com/jerryzlau/image/upload/v1507858335/account_friend_human_man_member_person_profile_user_users-256_ovxp2a.png"
  ]
];

for (let i = 0; i < seedArray.length; i++) {
  let user = {
    email: seedArray[i][0],
    password: seedArray[i][1],
    username: seedArray[i][2],
    phoneNumber: seedArray[i][3],
    profilePicture: seedArray[i][4],
  };

  axios.post('https://instadine.herokuapp.com/v1/signup', user).then(res => {
    console.log(res);
  })
    .catch(error => {
      console.log(error);
    });
}