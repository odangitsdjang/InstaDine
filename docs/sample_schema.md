
# Sample Schema
```js
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: 'Password is required',
  },
  username: {
    type: String,
    required: 'Username is required',
    unique: true
  },
  phoneNumber: {
    type: Number,
    required: "Phone number is required",
    unique: true
  }, 
  // customer: { type: Boolean, default: true },
  property: [restaurant_id]
  
});

const restaurantSchema = new Schema({
  name: String,
  address:  String,
  manager: {
    required: 'Manager is required',
    user: Object
  },
  queue:[
    { reservation: Object  
    }
  ],
  tables: {
    max: Number,
    current: [
      {
        table_number: Number,
        user_id: Number,
        reservation: Object,
        timeIn: Number,
        Order: []
      }
    ],
    history: [
      {
        table_number: Number,
        reservation_id: Number, 
        timeIn: Number,
        timeOut: Number
      }
    ]
  }
});

const reservationSchema = new Schema({
  restaurant_id: Number,
  user_id: Number,
  count: Number,
  timestamp: Date,
  status: String
});
```