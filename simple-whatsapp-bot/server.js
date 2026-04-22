const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = 3000;


app.post("/webhook", async (req, res) => {
  try {
    const message = req.body?.messages?.[0]?.text?.body;

    if (!message) return res.sendStatus(200);

    let reply = "";
    const msg = message.toLowerCase();

    // Entry message
    if (message === "AI-Academy") {
      reply = "Thank you for reaching out to the AI Academy! How can I help you today?";
    } 
    else if (msg.includes("price") || msg.includes("cost")) {
      reply = "Modules 1 and 2 are free. Modules 3 and 4 cost ₹499.";
    } 
    else if (msg.includes("enroll") || msg.includes("join")) {
      reply = "You can enroll here: https://ai-academy.example.com/pricing";
    } 
    else if (msg.includes("module")) {
      reply = "There are 4 modules. First 2 are free and last 2 are paid.";
    } 
    else if (msg.includes("certificate")) {
      reply = "You will get a certificate after completing all modules.";
    } 
    else if (msg.includes("free")) {
      reply = "Yes, Module 1 and Module 2 are free.";
    } 
    else {
      reply = "Please ask about the AI Academy course.";
    }

    // Send reply via Whapi
    await axios.post(
      "https://gate.whapi.cloud/messages/text",
      {
        to: req.body.messages[0].from,
        body: reply
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WHAPI_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.sendStatus(200);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});