[logo] (https://github.com/odangitsdjang/Instadine/blob/master/assets/images/logo.png) # Instadine

## Background and Overview

InstaDine is a mobile application that connects diners with restaurants to cut down wait times and give users freedom by eliminating the need to stand in line. 

Everyone has experienced going out to a restaurant only to find long wait times before even getting to order, and even longer to get their first bite of dinner. With InstaDine diners have access to live data, giving them the ability to find restaurants with available seats or queue up to be seated.

InstaDine is built with React Native and Redux front end and Express and MongoDB in back end. 

## Minimum Viable Product
With the above functionality in mind, the following is the minimum viable product that we plan on achieving:

1. User Auth - Customer
   * Sign up
   * Sign out
   * Login
2. Demo website that displays the functionality of our application
3. Map navigation
   * GPS location on user location
   * Browse for restaurants at map location
4. User Profile
   * Display user info
   * Display reservations
5. Reservations
   * Create
   * Update
   * Delete
6. Restaurants
   * Show page
7. Production README

BONUS: 
1. Restaurant views
   * Sign up
   * Reservations
2. Push Notifications


## Wireframes

### Splash
![splash](https://github.com/odangitsdjang/Instadine/blob/master/docs/splash.png)

### Log in 
![splash](https://github.com/odangitsdjang/Instadine/blob/master/docs/login.png)

### Sign Up
![splash](https://github.com/odangitsdjang/Instadine/blob/master/docs/signup.png)

### On Login
![splash](https://github.com/odangitsdjang/Instadine/blob/master/docs/onlogin.png)


### Filter
![splash](https://github.com/odangitsdjang/Instadine/blob/master/docs/filter.png)

### Restaurant Selected
![splash](https://github.com/odangitsdjang/Instadine/blob/master/docs/restaurant-pin.png)

### Reserving a Restaurant
![splash](https://github.com/odangitsdjang/Instadine/blob/master/docs/restaurant-reserve.png)

### Reserved Restaurant
![splash](https://github.com/odangitsdjang/Instadine/blob/master/docs/restaurant-reserved.png)

### User Profile
![splash](https://github.com/odangitsdjang/Instadine/blob/master/docs/user-show.png)

### Implementation Timeline 
- DAY 1:
  - Jerry: Implement user auth backend and start login/signup frontend forms.
  - Adrian: Finish splash page, and add nav bar
  - David: Implement Google Maps API  
    - Button to go to main page with googlemaps
- DAY 2: 
  - All: Seed restaurants.
  - Jerry: Finish user auth frontend.
  - Adrian: Implement restaurants backend, start user profile page
  - David: Continue google maps API.
- DAY 3:
  - Jerry: Do restaurants show page
  - Adrian: Add filter functionality, start desktop site 
  - David: Finish google maps API, including pins for restaurants.
- DAY 4:
  - Jerry:   Search function on the map, help others 
  - Adrian: Finish desktop site with styling
  - David: Begin reservation backend
- DAY 5: 
  - Jerry: Try to break app, list all bugs, assign bugs to whoever wrote them
  - Adrian: Add reservation portion of user profile
  - David:  Finish reservation backend
- DAY 6: 
  - Everyone: polish their own components and refactor
  - BONUS: Look into Sockets.io, and other bonus features
- DAY 7:
  - Jerry/David: Add emulator to the website
  - Adrian: Do Production README


[Sample State,](https://github.com/odangitsdjang/Instadine/blob/master/docs/sample_state.md)
[Sample Schema](https://github.com/odangitsdjang/Instadine/blob/master/docs/sample_schema.md)
