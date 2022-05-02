import { saveLocalStorage, getLocalStorage } from "./localStorage.js";
import { nowDate } from "./clock.js";

const alramForm = document.getElementById("alram-form");
const alramHour = alramForm.querySelector("#hour");
const alramMinute = alramForm.querySelector("#minute");
const alramText = alramForm.querySelector("#alram-text");
const alramLists = document.querySelector(".alram-lists");

let alrams = [];
const ALRAM_KEY = "alrams";

function saveToAlram() {
  localStorage.setItem(ALRAM_KEY, JSON.stringify(alrams));
}

function deleteAlram(event) {
  const li = event.target.parentElement;
  li.remove();
  alrams = alrams.filter((alram) => alram.id !== parseInt(li.id));
  saveLocalStorage(ALRAM_KEY, alrams);
}

function paintAlram(newAlramObj) {
  const li = document.createElement("li");
  li.id = newAlramObj.id;
  const span = document.createElement("span");
  span.innerText = `${newAlramObj.hour}시 ${newAlramObj.minute}분 ${newAlramObj.text}`;
  const button = document.createElement("button");
  button.innerText = "삭제";
  button.addEventListener("click", deleteAlram);
  li.appendChild(span);
  li.appendChild(button);
  alramLists.appendChild(li);
}

function alramSubmit(event) {
  event.preventDefault();
  askNotificationPermission();
  const newAlramHour = alramHour.value;
  alramHour.value = "";
  const newAlramMinute = alramMinute.value;
  alramMinute.value = "";
  const newAlramText = alramText.value;
  alramText.value = "";
  const alramObj = {
    id: Date.now(),
    hour: newAlramHour.padStart(2, "0"),
    minute: newAlramMinute.padStart(2, "0"),
    text: newAlramText,
  };
  alrams.push(alramObj);
  paintAlram(alramObj);
  saveLocalStorage(ALRAM_KEY, alrams);
}

alramForm.addEventListener("submit", alramSubmit);

function askNotificationPermission() {
  if (Notification.permission !== "granted") {
    alert("브라우저의 알람을 설정하세요 !");
    Notification.requestPermission();
  }
}

function showNotification(data, hour, minutes, seconds) {
  data.forEach((v) => {
    const notiTitle = `${v.hour}시 ${v.minute}분 ${v.text}`;
    const notiBody = {
      body: v.text,
    };
    const arlamHour = v.hour;
    const arlamMinutes = v.minute;
    if (arlamHour === hour && arlamMinutes === minutes && seconds === "00") {
      const notification = new Notification(notiTitle, notiBody);
    }
  });
}

function alramClock() {
  const { hour, minutes, seconds } = nowDate();
  showNotification(parseArlam, hour, minutes, seconds);
}

const savedAlram = getLocalStorage(ALRAM_KEY);
const parseArlam = JSON.parse(savedAlram);

if (savedAlram !== null) {
  alrams = parseArlam;
  parseArlam.forEach(paintAlram);
  alramClock(parseArlam);
}

export { alramClock };
