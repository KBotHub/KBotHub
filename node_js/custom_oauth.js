var admin = require("firebase-admin");

var serviceAccount = require("${{secrets.OAUTH_NAVER}}");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  serviceAccountId: 'firebase-adminsdk-f7jde@editor-280309.iam.gserviceaccount.com',
  databaseURL: "https://editor-280309.firebaseio.com"
});
