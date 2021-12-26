const mongoose  = require('mongoose');
const supertest = require('supertest');
// const server    = require('../../server');
const app       = require('../../app');

const url =
  'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true';

beforeAll( async () => {
  await mongoose.connect(url);
});

afterAll( async () => {
  await mongoose.connection.close();
})

/* 
  describe('As of starting,', () => {
  let server;

  beforeAll( async () => {
    console.log("Test Starting...");

    server = app.listen();
    // await connectDB();
  });

  afterAll( async () => {
    console.log("... Test Ended");

    await mongoose.connection.close();
    server.close();
  });

  test('the server should be listening on the given port', done => {
    const mockCallback = jest.fn(() => {});

    server = app.listen(() => {
      mockCallback();
      expect(mockCallback.mock.calls.length).toBe(1);
      done();
    });

  });

  test('the database should be connected', async () => {
    try {
      await mongoose.connect(url);
    } catch (e) {
      expect(e).toBeFalsy();
    }
  });

});
*/

describe('POST /records', () => {
  const requestPayload = {
    startDate: "2017-01-27",
    endDate: "2021-07-12",
    minCount: 300,
    maxCount: 2000
  }

  test('it should respond with a 200 status code', async () => {
    const response = await supertest(app)
      .post('/records')
      .send(requestPayload)

    expect(response.statusCode).toBe(200);
  });

  test('it should specify in the content type header', async () => {
    const response = await supertest(app)
      .post('/records')
      .send(requestPayload)

    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
  });

  test('it should has code, msg, and records in the response payload', async () => {
    const response = await supertest(app)
      .post('/records')
      .send(requestPayload)

    expect(response.body.code).toEqual(0);
    expect(response.body.msg).toEqual('success');
    expect(response.body.records).toEqual(
      expect.arrayContaining(
        [     
          expect.objectContaining({   
            key: "TAKwGc6Jr4i8Z487",
            createdAt: "2017-01-28T01:22:14.398Z",
            totalCount: 310             
          })
        ]
      )
    );
  });
});