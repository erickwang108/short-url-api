import ResCode from '../resCode';

describe('API result code tests', () => {
  it('should equal enum values', () => {
    expect(ResCode.InvalidData).toEqual(4000);
    expect(ResCode.NotExist).toEqual(4001);
  });
});
