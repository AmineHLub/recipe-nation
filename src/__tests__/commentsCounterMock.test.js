const commentsCounterMock = require('../__mocks__/commentsCounterMock.js');

require('jest-fetch-mock').enableMocks();

const realObjectMock = [
  {
    username: 'Sirine',
    creation_date: '2021-10-13',
    comment: 'Nice',
  },
  {
    comment: 'Nice',
    username: 'Sirine',
    creation_date: '2021-10-13',
  },
  {
    username: 'Sirine',
    comment: 'Nice',
    creation_date: '2021-10-13',
  },
  {
    comment: 'Nice',
    username: 'Sirine',
    creation_date: '2021-10-13',
  },
  {
    username: 'Sirine',
    comment: 'Nice',
    creation_date: '2021-10-13',
  },
];

test('should return 5', async () => {
  fetch.mockResponseOnce(JSON.stringify(realObjectMock));
  const counter = await commentsCounterMock();
  expect(counter).toEqual(5);
});