import { enableFetchMocks } from 'jest-fetch-mock';
import getLikesMock from '../__mocks__/getLikesMock.js';

enableFetchMocks();

const realApiDatabase = [{ item_id: '27', likes: 11 }, { item_id: 159, likes: 16 }, { item_id: '52891', likes: 1 }, { likes: 3, item_id: '52987' }, { item_id: '52803', likes: 1 }, { item_id: '52785', likes: 1 }, { item_id: '52851', likes: 1 }, { likes: 1, item_id: '52764' }, { item_id: '52823', likes: 1 }, { likes: 2, item_id: '52854' }, { item_id: '52836', likes: 3 }, { likes: 1, item_id: '52791' }, { likes: 1, item_id: '52908' }, { item_id: '52841', likes: 1 }, { item_id: '52899', likes: 1 }, { item_id: '53046', likes: 2 }, { likes: 2, item_id: '52949' }, { item_id: '52958', likes: 1 }, { likes: 3, item_id: '52793' }, { likes: 1, item_id: '52971' }, { likes: 1, item_id: '52795' }, { item_id: '53015', likes: 2 }, { likes: 1, item_id: '53047' }, { likes: 1, item_id: '52863' }, { likes: 1, item_id: '52955' }, { item_id: '52926', likes: 2 }, { likes: 1, item_id: '52871' }, { likes: 2, item_id: '52967' }, { likes: 1, item_id: '52844' }, { likes: 3, item_id: '52832' }, { item_id: '52919', likes: 3 }, { item_id: '52927', likes: 12 }, { likes: 4, item_id: '52769' }, { item_id: '52948', likes: 6 }, { likes: 3, item_id: '52814' }, { likes: 8, item_id: '52939' }, { likes: 8, item_id: '52970' }, { likes: 3, item_id: '52865' }, { item_id: '53052', likes: 6 }, { likes: 6, item_id: '52868' }, { item_id: '53048', likes: 3 }, { likes: 3, item_id: '52829' }, { item_id: '52777', likes: 1 }, { likes: 7, item_id: '52932' }, { likes: 1, item_id: '52835' }, { item_id: '52895', likes: 1 }, { item_id: '53014', likes: 2 }, { likes: 1, item_id: '52776' }, { likes: 2, item_id: '53000' }, { likes: 1, item_id: '52921' }, { item_id: '52843', likes: 1 }, { likes: 1, item_id: '53029' }, { likes: 1, item_id: '52965' }, { likes: 1, item_id: '53039' }, { item_id: '52890', likes: 1 }, { item_id: '53045', likes: 1 }, { likes: 1, item_id: '52896' }, { likes: 1, item_id: '53017' }, { likes: 1, item_id: '53040' }, { likes: 1, item_id: '52858' }, { item_id: '52828', likes: 2 }, { likes: 1, item_id: '53016' }, { item_id: '52813', likes: 1 }, { likes: 1, item_id: '52881' }, { likes: 2, item_id: '53035' }];
describe('Test items counter', () => {
  test('should return 16', async () => {
    fetch.mockResponseOnce(JSON.stringify(realApiDatabase));
    const counter = await getLikesMock(159);
    expect(counter).toEqual(16);
  });
  test('should 0 as the given value is not there', async () => {
    fetch.mockResponseOnce(JSON.stringify(realApiDatabase));
    const randomWrongValue = 6451313132467;
    const counter = await getLikesMock(randomWrongValue);
    expect(counter).toBe(`0 there is no data at ${randomWrongValue}`);
  });
});