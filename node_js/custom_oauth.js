var admin = require("firebase-admin");

var refreshToken; // Get refresh token from OAuth2 flow

admin.initializeApp({
  credential: admin.credential.refreshToken(refreshToken),
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
