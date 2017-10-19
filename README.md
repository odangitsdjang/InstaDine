# <img src="https://github.com/odangitsdjang/InstaDine/blob/master/assets/images/logo_black.png" width="100px"> InstaDine

Live Demo: [Instadine](http://www.instadine.club/)

## Background and Overview

InstaDine is a mobile application that connects diners with restaurants to cut down wait times and give users freedom by eliminating the need to stand in line. 

Everyone has experienced going out to a restaurant only to find long wait times before even getting to order, and even longer to get their first bite of dinner. With InstaDine diners have access to live data, giving them the ability to find restaurants with available seats or queue up to be seated.

<p align="center">
  <img src="https://github.com/odangitsdjang/InstaDine/blob/master/docs/demo_page/assets/mp4/gifs/all.gif" height="400px"/>
</p>

## Technologies
* React Native
* Redux
* Node.js | Express
* MongoDB

## Functionality

* **User Authentication**
  * InstaDine uses BCrypt to ensure users can sign up and create secure accounts

<p align="center">
  <img src="https://github.com/odangitsdjang/InstaDine/blob/master/docs/demo_page/assets/mp4/gifs/login.gif" height="300px"/>
</p>

* **Browsing and Restaurant Detail**
  * Upon opening the app, diners are taken to a map of the area at their location. From there, they are able to select markers of partner restaurants.
  * Pressing on restaurant markers takes users to the restaurant detail page which contains which contains information such as seat availability and also allows users to Queue Up.

<p align="center">
  <img height="300px" src="https://github.com/odangitsdjang/InstaDine/blob/master/docs/demo_page/assets/mp4/gifs/map.gif"/>
</p>

* **Restaurants Filter and RESTful Search**
  * To further help narrow down choices, the map screen also has a filter that users can toggle to display only restaurants with a selected numbers of seats available, or filter them out by current wait times. 
  * Users can search for specific restaurants and be redirected to the detail page while using the search bar.

<p align="center">
  <img src="https://github.com/odangitsdjang/InstaDine/blob/master/docs/demo_page/assets/mp4/gifs/filter.gif" height="300px"/><img src="https://github.com/odangitsdjang/InstaDine/blob/master/docs/demo_page/assets/mp4/gifs/search.gif" height="300px"/>
</p>

* **User Profile**
  * Users can view their profile and queue history

<p align="center">
  <img src="https://github.com/odangitsdjang/InstaDine/blob/master/docs/demo_page/assets/mp4/gifs/profile.gif" height="300px"/>
</p>

## Future Development

**Push Notifications:**
Give the users options to enable push notifications for events such as when their tables are ready.

**Restaurant Application Side:**
The client side for restaurant owners to be able to integrate the application into their business. This will contain features such as reservation and queue handling, menu creation and editing, text notifications to non-app users for their tables.

