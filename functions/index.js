const functions = require("firebase-functions");

// Firebase Admin SDK
const admin = require("firebase-admin");
admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.getTeam = functions.https.onRequest(async (request, response) => {
  functions.logger.info("Getting Teams", {structuredData: true});

  const teamDb = admin.firestore().collection("team");
  const snap = await teamDb.get();
  const team = [];
  snap.forEach((doc) => {
    team.push(doc.data());
    functions.logger.info(doc.data(), {structuredData: true});
  });
  response.send(team);
});
