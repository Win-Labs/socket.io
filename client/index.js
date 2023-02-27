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

const messageRow = (message, direction) =>
  direction === "sent"
    ? `<div class="message-row"><p class="message sent">${message}</p></div>`
    : `<div class="message-row received"><p class="message">${message}</p></div>`;

messages.forEach((message) => {
  beforeEnd(
    select(".messages-box"),
    messageRow(message.text, message.direction)
  );
});
