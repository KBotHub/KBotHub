var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://editor-280309.firebaseio.com"
});

let uid = 'some-uid';

admin.auth().createCustomToken(uid)
  .then(function(customToken) {
    // Send token back to client
  })
  .catch(function(error) {
    console.log('Error creating custom token:', error);
  });
