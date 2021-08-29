# React Weather Website

![screenshot](src\img\Screenshot.png)

## React Component Tree

![screenshot](src\img\weather-components.png)

## how does it work?

- ### React states :
city, data, matches, tempUnit

- ### On load:
  if Geolocation is available, *fetchDataByPostion( )* will fetch the weather data from API and keep it in the state *data*, also the city name will be extracted from data and saved in the state *city*.

  if Geolocation isn't available, *noPosition( )* will fetch data for the default city of 'Tehran'. 

- ### Search :
    *handleChange( )* will fetch 10 city names after typing 4 letters or more in the search input, they'll be saved in state *matches*.the user can then choose a city.

## Challenges:
   - finding a good and free API
   - creating a curved image for the background.   
     solution : photoshop
   - Date object displayed the wrong date from API data.   
     solution: moment.js library
   - displaying Air Quality index on a donut chart   
    solution: chart.js library