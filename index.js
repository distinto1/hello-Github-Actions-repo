function main() {
  console.log("Hello, GitHub Actions!");
  console.log("This is a simple Node.js application.");
  // Combine into a single string
  console.log(`Current date: ${new Date().toISOString()}`);
}



// // index.js
// function main() {
//   console.log("Hello, GitHub Actions!");
//   console.log("This is a simple Node.js application.");
//   console.log("Current date:", new Date().toISOString());
// }

// // Only run if executed directly
// if (require.main === module) {
//   main();
// }

// // Export for testing
// module.exports = { main };