// netlify/functions/chat.js

const { v4: uuidv4 } = require("uuid");

// This is your Netlify function handling chat messages
exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    const { message, sender } = JSON.parse(event.body);

    // Process your message here (e.g., save to a database)
    console.log("Received message:", message);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message received", id: uuidv4() }),
    };
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: "Method Not Allowed" }),
  };
};
