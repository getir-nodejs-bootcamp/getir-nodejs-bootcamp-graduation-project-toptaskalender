# Getir Backend Assignment

This project is created for getir backend assignment. It's a RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and returns the results in the requested format.

## API Endpoints

### Notes

- Please keep that in mind, you have to precede all APIs with '`/api/v1`'.
- There are validations for request payload, please be aware for them.

### Records

| Route | HTTP Verb | Request Body | Header Body | Description |
| --- | --- | --- | --- | --- |
| /records | `POST` | `{ "startDate": "YYYY-MM-DD", "endDate": "YYYY-MM-DD", "minCount": 100, "maxCount": 500 }` | Empty | Returns resources |

| Payload key | Required | Type | Constrains |
| --- | --- | --- | --- |
| startDate | `true` | `Date` | ISO Date Format |  |
| endDate | `true` | `Date` | ISO Date Format |
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