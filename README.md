# <img src="https://github.com/odangitsdjang/InstaDine/blob/master/assets/images/logo_black.png" width="100px"> InstaDine

Live Demo: [Instadine](http://www.instadine.club/)

## Background and Overview

InstaDine is a mobile application that connects diners with restaurants to cut down wait times and give users freedom by eliminating the need to stand in line. 

Everyone has experienced going out to a restaurant only to find long wait times before even getting to order, and even longer to get their first bite of dinner. With InstaDine diners have access to live data, giving them the ability to find restaurants with available seats or queue up to be seated.

## Technologies
* React Native
* Redux
* Node.js | Express
* MongoDB

## Functionality

* User Authentication 
  * Instadine uses BCrypt to ensure users can sign up and create secure accounts

---------------------- USER AUTH GIF HERE------------------------------

* Navigation
  * Instadine was designed for smooth user navigation by using various nested navigators including a drawer that contains user information and links to other pages such as the user's Queue History page.

--------------- GIF OF NAVIGATION FROM SPLASH TO ALL PAGES -------------

* Map and Browsing
  * Upon opening the app, diners are taken to a map of the area at their location. From there, they are able to select markers of partner restaurants.

---------------------- MAP AND MARKERS GIF HERE -----------------------

* Restaurants Filter and RESTful Search
  * To further help narrow down choices, the map screen also has a filter that users can toggle to display only restaurants with a selected numbers of seats available, or filter them out by current wait times. 
  * Users can search for specific restaurants and be redirected to the detail page while using the search bar.

---------------------- FILTER AND SEARCH GIF HERE ----------------------

* Restaurant Detail And Queuing 
  * Pressing on restaurant markers takes users to the restaurant detail page which contains which contains information such as seat availability and also allows users to Queue Up.

---------------------- RESTAURANT SHOW AND QUEUING GIF HERE -----------

* User Profile
  * Users can view their profile and queue history

---------------------- USER PROFILE AND HISTORY GIF HERE --------------

## Future Development

**Push Notifications:**
Give the users options to enable push notifications for events such as when their tables are ready.

**Restaurant Application Side:**
The client side for restaurant owners to be able to integrate the application into their business. This will contain features such as reservation and queue handling, menu creation and editing, text notifications to non-app users for their tables.

