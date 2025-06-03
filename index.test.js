const { main } = require('./index');

global.console = {
  log: jest.fn()
};

describe('Application output', () => {
  it('should log the correct messages', () => {
    main();
    
    // Verify the first log
    expect(console.log).toHaveBeenNthCalledWith(1, 'Hello, GitHub Actions!');
    
    // Verify the second log
    expect(console.log).toHaveBeenNthCalledWith(2, 'This is a simple Node.js application.');
    
    // Verify the third log - now matches the two-argument format
    expect(console.log).toHaveBeenNthCalledWith(3, 'Current date:', expect.stringMatching(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/));
  });
});


// index.test.js
// const { main } = require('./index');

// // Mock console.log to verify output
// global.console = {
//   log: jest.fn()
// };

// describe('Application output', () => {
//   it('should log the correct messages', () => {
//     main();
//     expect(console.log).toHaveBeenCalledWith('Hello, GitHub Actions!');
//     expect(console.log).toHaveBeenCalledWith('This is a simple Node.js application.');
//     expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Current date:'));
//   });
// });