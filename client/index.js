"use strict";
import {
  select,
  selectAll,
  afterBegin,
  afterEnd,
  beforeBegin,
  beforeEnd,
} from "./utils.js";

const messages = [
  { text: "Hello", direction: "sent" },
  { text: "Hi", direction: "received" },
  { text: "How are you?", direction: "sent" },
  { text: "I am fine", direction: "sent" },
  { text: "You?", direction: "received" },
  { text: "I am okay", direction: "sent" },
  { text: "Thankos", direction: "received" },
  { text: "Dankes", direction: "sent" },
];

const messagesBox = `<div class="messages-box"></div>`;

const messageRow = (message, direction) =>
  direction === "sent"
    ? `<div class="message-row"><p class="message sent">${message}</p></div>`
    : `<div class="message-row received"><p class="message">${message}</p></div>`;

afterBegin(select("body"), messagesBox);

messages.forEach((message) => {
  beforeEnd(
    select(".messages-box"),
    messageRow(message.text, message.direction)
  );
});

document.querySelector(".form-send").addEventListener("submit", sendEmail);

function sendEmail(event) {
  event.preventDefault();
  console.log("check");
}
