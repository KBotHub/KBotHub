var admin = require("firebase-admin");

var serviceAccount = require("https://firebasestorage.googleapis.com/v0/b/editor-280309.appspot.com/o/editor-280309-firebase-adminsdk-f7jde-e813e696fb.json?alt=media&token=be3f835f-6e88-43ca-b3d7-38df3927d1c1");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  serviceAccountId: 'firebase-adminsdk-f7jde@editor-280309.iam.gserviceaccount.com',
  databaseURL: "https://editor-280309.firebaseio.com"
});
