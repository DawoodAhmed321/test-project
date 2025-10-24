import * as admin from "firebase-admin";
var serviceAccount = require("./keys/nm.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const messaging = admin.messaging();
