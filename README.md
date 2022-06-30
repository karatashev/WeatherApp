 
 <img width="1229" alt="Screenshot 2022-06-30 at 15 13 22" src="https://user-images.githubusercontent.com/95942547/176686128-bdc1dda3-6498-4a89-acd6-62b9f20e68f9.png">

 
 
 This project contains the following components:
 
   -Header
   
   -Blog( or BlogList)
   
   -BlogPost
   
   -Forecast
   
 In the "Latest News" part we show three blog posts, which contain (image(we take
   them randomly from https://picsum.photos/ ), title, and description).

 For the "Forecast" part ,we fetch data from the following URL:
     http://api.openweathermap.org/data/2.5/forecast/daily?q=Skopje&units=metric&cnt=7&appid=886705b4c1182eb1c69f28eb8c520e20 and we fill in the table with necessary data.

  To show the correct icon in the table ( sun, cloud etc. ) we  use <img src= "http://openweathermap.org/img/w/APIICON.png}.png"> where instead of APIICON we use the icon name from the API dynamically. -openweathermap.org/img/w/10d.png-

For the "Related News" part we make the same thing as The latest news

Also added a hamburger menu that opens and closes the mobile menu list
