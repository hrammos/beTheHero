import generateUniqueId from '../../src/utils/generateUniqueId';

describe('Generate Unique id', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});
