# Getir Backend Assignment

This project is created for getir backend assignment. It's a RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and returns the results in the requested format.

## API Endpoints

### Notes

- Please keep that in mind, you have to precede all APIs with '`/api/v1`'.
- There are validations for request payload, please be aware of them.

#### An Example of Response Payload

| Response Body Key | Type | Description  |
| --- | --- | --- |
| code | `Number` | `0: Successful request` `1: Failed request caused by users` `2: Failed requests caused by server` |
| msg | `String` | Custom response message depends on response status |
| records | `Array` | An array of matched records  |

### Records

| Route | HTTP Verb | Request Body | Header Body | Description |
| --- | --- | --- | --- | --- |
| /records | `POST` | `{ "startDate": "2017-11-06", "endDate": "2020-12-30", "minCount": 100, "maxCount": 2000 }` | Empty | Returns resources |

| Request Body Key | Required | Type | Constraints |
| --- | --- | --- | --- |
| startDate | `true` | `String` | ISO Date Format |
| endDate | `true` | `String` | ISO Date Format and `>= startDate` |
| minCount | `true` | `Number` | `>= 0` |
| maxCount | `true` | `Number` | `>= minCount` |


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

Run `npm run test` to test the application.