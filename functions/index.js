const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log('voir si possible ');
  functions.logger.info("Bonjour lllog!  lajoie", {structuredData: true});
  response.send("Hello from Firebase ok 12 !");
});
