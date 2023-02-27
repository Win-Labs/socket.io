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
  {
    text: "The Battle of Badr was the first large-scale confrontation between Muslims and the Quraysh.",
    direction: "sent",
  },
  {
    text: "More than a thousand men engaged in the battle, which lasted hours and resulted in a decisive Muslim victory. ",
    direction: "received",
  },
  { text: "Dankes", direction: "sent" },
  {
    text: "More than a thousand men engaged in the battle, which lasted hours and resulted in a decisive Muslim victory. ",
    direction: "sent",
  },
  { text: "Dankes", direction: "received" },
  {
    text: "More than a thousand men engaged in the battle, which lasted hours and resulted in a decisive Muslim victory. ",
    direction: "received",
  },
  { text: "Dankes", direction: "sent" },
  {
    text: "More than a thousand men engaged in the battle, which lasted hours and resulted in a decisive Muslim victory. ",
    direction: "sent",
  },
  {
    text: "More than a thousand men engaged in the battle, which lasted hours and resulted in a decisive Muslim victory. ",
    direction: "received",
  },
  {
    text: "More than a thousand men engaged in the battle, which lasted hours and resulted in a decisive Muslim victory. ",
    direction: "sent",
  },
  {
    text: "More than a thousand men engaged in the battle, which lasted hours and resulted in a decisive Muslim victory. ",
    direction: "received",
  },
];

const messageRow = (message, direction) =>
  direction === "sent"
    ? `<div class="message-row"><p class="message sent">${message}</p><p class="btn-reply">Reply</p></div>`
    : `<div class="message-row received"><p class="message">${message}</p><p class="btn-reply">Reply</p></div>`;

messages.forEach((message) => {
  beforeEnd(
    select(".messages-box"),
    messageRow(message.text, message.direction)
  );
});
