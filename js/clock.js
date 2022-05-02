const clock = document.querySelector("h2#clock");

function nowDate() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  const seconds = String(date.getSeconds()).padStart(2, 0);

  return { hour, minutes, seconds };
}

function getClock() {
  const { hour, minutes, seconds } = nowDate();
  clock.innerText = `${hour}:${minutes}:${seconds}`;
}

export { nowDate, getClock };
