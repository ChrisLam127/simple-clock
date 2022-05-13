const fullyear = document.querySelector(".year");
const hours = document.querySelector(".hours");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Tursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "Jun",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// function to get the time at current time
function currentTime12() {
  let date = new Date();

  // get current hour, min and seconds
  let hours = date.getHours();
  let mins = date.getMinutes();
  let seconds = date.getSeconds();

  // 12hours session
  if (hours === 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  let session = hours > 12 ? " AM" : "PM";

  hours = hours < 10 ? "0" + hours : hours;
  mins = mins < 10 ? "0" + mins : mins;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hours + ":" + mins + ":" + seconds + " " + session;

  // Display time to the dom
  document.querySelector(".hours").innerText = time;

  let t = setTimeout(currentTime12, 1000);
}

currentTime12();

// Function fo the 24 hours session
function currentTime24() {
  let date = new Date();

  let hours = date.getHours();
  let mins = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours === 0) {
    hours = 24;
  }

  hours = hours < 10 ? "0" + hours : hours;
  mins = mins < 10 ? "0" + mins : mins;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hours + ":" + mins + ":" + seconds;

  document.querySelector(".hours24").innerText = time;

  let t = setTimeout(currentTime24, 1000);
}

currentTime24();

// Swtitching between the two sessions
const btns = document.querySelectorAll(".btn");
const time12 = document.querySelector(".time12");
const time24 = document.querySelector(".time24");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

const weekDays = document.querySelector(".days");
let activeDay = new Date().getDay();

console.log(activeDay);

// Display the days of the week to the dom
window.addEventListener("DOMContentLoaded", (e) => {
  let result = "";
  days.forEach((day) => {
    result += `
      <div class="weeks">${day}</div>
    `;
  });
  weekDays.innerHTML = result;

  const weeks = document.querySelectorAll(".weeks");
  // adding the active class
  weeks.forEach((week) => {
    if (week.innerText === days[activeDay]) {
      week.classList.add("active");
      console.log(days[activeDay]);
    }
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
  });
});

btn1.addEventListener("click", () => {
  if (time24.classList.contains("active")) {
    time24.classList.remove("active");
    time12.classList.add("active");
  }
});

btn2.addEventListener("click", () => {
  if (time12.classList.contains("active")) {
    time12.classList.remove("active");
    time24.classList.add("active");
  }
});
