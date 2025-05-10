import { dataAccessDb } from './data-access-db.js';

describe('dataAccessDb', () => {
  it('should work', () => {
    expect(dataAccessDb()).toEqual('data-access-db');
  });
});
