import { messaging } from "./firebase";

const TOKEN =
  "caFunPtCQjuIzq5QGknaUh:APA91bGYtDsXaUZmYrUadL3mEoNuaTsDxtUJmX8CEZG1ATB9fMNwzV6PLqwcTyMbcIfWCTmbAxfYtDYXb7AiL6xIF3yltUcyxfv5KGwL_NBhYTPkTFPRHlw";

const sendMessage = async () => {
  try {
    const res = await messaging.send({
      notification: {
        title: "Hi there!",
        body: "This is a test notification",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTfv9EOQYNexoc3uTi_jiZn4K9g0yj4rPWA&s",
      },
      data: {
        title: "title",
        body: "body",
      },
      android: {
        priority: "high",
        notification: {
          priority: "high",
          body: "This is a test notification",
          title: "Title",
          sound: "default",
          icon: "ic_launcher",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTfv9EOQYNexoc3uTi_jiZn4K9g0yj4rPWA&s",
        },
        directBootOk: true,
      },
      apns: {
        headers: {
          apns_priority: "10",
        },
        payload: {
          aps: {
            contentAvailable: true,
            sound: "default",
            mutableContent: true,
          },
        },
      },
      token: TOKEN,
    });

    console.log("res", res);
  } catch (error) {
    console.log("error while sending message", error);
  }
};

const sentMessageToTopic = async () => {
  try {
    const resp = await messaging.send({
      notification: {
        title: "Hi there!",
        body: "This is a test notification",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTfv9EOQYNexoc3uTi_jiZn4K9g0yj4rPWA&s",
      },
      data: {
        title: "title",
        body: "body",
      },
      android: {
        priority: "high",

        notification: {
          priority: "high",
          body: "This is a test notification",
          title: "Title",
          sound: "default",
          icon: "ic_launcher",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTfv9EOQYNexoc3uTi_jiZn4K9g0yj4rPWA&s",
        },
        directBootOk: true,
      },
      apns: {
        headers: {
          apns_priority: "10",
        },
        payload: {
          aps: {
            contentAvailable: true,
            sound: "default",
            mutableContent: true,
          },
        },
      },
      topic: "group_1",
    });
  } catch (error) {}
};

// =================== Calling

// sendMessage();
sentMessageToTopic();
