const mockAxios = jest.createMockFromModule('axios');

export default {
  create: jest.fn(() => mockAxios),
};
