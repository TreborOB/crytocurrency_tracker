# Assignment 2

Name: Robert O' Brien

## Overview
Crytocurrency Tracker is a crytocurrency tracking application which allows a user to create a custom list of crytocurrencies - each crytocurrency can then displayed along with it's price, market cap and many other cryrocurrency attributes.
The Coin Market Cap API is used to display live crytocurrency prices.

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
| GET: /api/crytos | return all crytos |
| GET: /api/crytos/:id | returns the specified cryto by Id |
| POST: /api/crytos | add a new cryto |
| PUT: /api/crytos | update a cryto |
| DELETE: /api/crytps/:id | delete an cryto |

## UI Design

## Testing

## Extra features

## Independent learning.





