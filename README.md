# Assignment 2

Name: Robert O' Brien

## Overview
Cryptocurrency Tracker is a cryptocurrency tracking application which allows a user to create a custom list of cryptocurrencies - each cryptocurrency can then be displayed along with its price, market cap and many other cryptocurrency attributes. The Coin Market Cap API is used to display live cryptocurrency prices.

To run the application, simply clone or download the project and then run npm install + npm start in both the projects root and client folder.

## Live Demo

The application is hosted on Heroku: https://crytocurrency-tracker.herokuapp.com

## Installation requirements

+ Clone or download the project
+ Navigate to both the projects root folder and in another terminal window navigate to the client folder
+ Run npm install + npm start in the client folder first, then the root folder
+ The root folder utilises port 3000, the client 8080
+ The application can then be accessed at http://localhost:3000/

## Rest Api Design

| HTTP Method |  Description |
| -- | -- |
| GET: /api/crytos | return all crypto |
| GET: /api/crytos/:id | returns the specified crypto by Id |
| POST: /api/crytos | add a new crypto |
| PUT: /api/crytos | update a crypto |
| DELETE: /api/crytps/:id | delete an crypto |

## UI Design

##### Coin List Screen #####
![coin list](/coin_list.png)

##### Portfolio Screen #####
![portfolio](/portfolio.png)

##### Additional Coin Information Screen #####
![additional info](/additional_info.png)

## Testing

Testing is carried out on both the crypto currency API and a user API (which was not incorporated in the final design), with a visual representation of the tests being displayed using Mochawesome.

##### Mochawesome HTML test output #####
![additional_info](/additional_info.png)

## Extra features

1. The main coin list route has been configured to update the various crypto attributes every 10 seconds

## Independent learning

1. The application makes use of the following Cyptocompare API (https://coinmarketcap.com/api/) to retrieve list prices from and display then in the react tables on both the coin list and portfolio screens.

2. A chart for each crytocurrency is supplied by the npm module cryptowatch-embed.