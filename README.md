# Getir Backend Assignment

This project is coded for getir backend assignment. The rest of the document is about API

## API Endpoint

### Notes

- Please keep that in mind, you have to precede all APIs with '`/api/v1`'.

### Records

| Route | HTTP Verb | Request Body | Header Body | Description |
| --- | --- | --- | --- | --- |
| /records | `POST` | `{ "startDate": "YYYY-MM-DD", "endDate": "YYYY-MM-DD", "minCount": 100, "maxCount": 500 }` | Empty | Returns resources |

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