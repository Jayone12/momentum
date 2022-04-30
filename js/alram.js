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
  console.log(li.id);
  li.remove();
  alrams = alrams.filter((alram) => alram.id !== parseInt(li.id));
  saveToAlram();
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
  const newAlramHour = alramHour.value;
  const newAlramMinute = alramMinute.value;
  const newAlramText = alramText.value;
  const alramObj = {
    id: Date.now(),
    hour: newAlramHour.padStart(2, "0"),
    minute: newAlramMinute.padStart(2, "0"),
    text: newAlramText,
  };
  alrams.push(alramObj);
  paintAlram(alramObj);
  saveToAlram();
}

alramForm.addEventListener("submit", alramSubmit);

const savedAlram = localStorage.getItem(ALRAM_KEY);

if (savedAlram !== null) {
  const parseArlam = JSON.parse(savedAlram);
  alrams = parseArlam;
  parseArlam.forEach(paintAlram);
  alramClock(parseArlam);
}

function showNotification(data, hour, minutes) {
  data.forEach((v) => {
    const arlamHour = v.hour;
    const arlamMinute = v.minute;
    if (arlamHour === hour && arlamMinute === minutes) {
      const notification = new Notification(
        `${v.hour}시 ${v.minute}분 ${v.text}`,
        {
          body: v.text,
        }
      );
    }
  });
}

function alramClock(parseArlam) {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  showNotification(parseArlam, hour, minutes);
}
