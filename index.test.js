// index.test.js
const { main } = require('./index');

// Mock console.log to verify output
global.console = {
  log: jest.fn()
};

describe('Application output', () => {
  it('should log the correct messages', () => {
    main();
    expect(console.log).toHaveBeenCalledWith('Hello, GitHub Actions!');
    expect(console.log).toHaveBeenCalledWith('This is a simple Node.js application.');
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Current date:'));
  });
});