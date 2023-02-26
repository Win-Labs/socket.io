export const select = (str) => document.querySelector(str);
export const selectAll = (str) => document.querySelectorAll(str);
export const afterBegin = (target, src) =>
  target.insertAdjacentHTML("afterbegin", src);
export const beforeEnd = (target, src) =>
  target.insertAdjacentHTML("beforeend", src);
export const beforeBegin = (target, src) =>
  target.insertAdjacentHTML("beforebegin", src);
export const afterEnd = (target, src) =>
  target.insertAdjacentHTML("afterend", src);
