# Getir Backend Assignment

This project is created for getir backend assignment. It's a RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and returns the results in the requested format.

## API Endpoints

### Records

| Route | HTTP Verb | Request Body | Header Body | Description |
| --- | --- | --- | --- | --- |
| /api/v1/records | `POST` | `{ "startDate": "2017-11-06", "endDate": "2020-12-30", "minCount": 100, "maxCount": 2000 }` | Empty | Returns resources |

| Request Body Key | Required | Type | Constraints |
| --- | --- | --- | --- |
| startDate | `true` | `String` | ISO Date Format |
| endDate | `true` | `String` | ISO Date Format and `>= startDate` |
| minCount | `true` | `Number` | `>= 0` |
| maxCount | `true` | `Number` | `>= minCount` |

### An Example of Response Payload

| Response Body Key | Type | Description  |
| --- | --- | --- |
| code | `Number` | `0: Successful` `1: Failed caused by a user` `2: Failed caused by a server` |
| msg | `String` | Description of the code |
| records | `Array` | An array of matched records  |

## .env

An .env file should consist of:

    APP_PORT

    DB_URI

## Installation

Clone the source code:

    git clone git@github.com:getir-nodejs-bootcamp/getir-nodejs-bootcamp-graduation-project-toptaskalender.git

Install dependencies:

    npm install

## Starting the app

Run `npm start` to start the application.

## Testing the app

- Run `npm run test` to start all tests.
- Run `npm run test:integ` to start integration tests.
- Run `npm run test:unit` to start unit tests.

## Demo

Here is the public endpoint URL of the deployed API:

    http://3.12.83.55:8080/api/v1/records
