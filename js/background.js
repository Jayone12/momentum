const wrap = document.querySelector(".wrap");
const getHour = new Date().getHours();

const bgImagesObj = {
  morning: ["bg_morning_1", "bg_morning_2", "bg_morning_3"],
  afternoon: ["bg_afternoon_1", "bg_afternoon_2", "bg_afternoon_3"],
  evening: ["bg_evening_1", "bg_evening_2", "bg_evening_3"],
};

function randomImage(time, value) {
  return time[Math.floor(Math.random() * value)];
}

const morningImage = randomImage(
  bgImagesObj.morning,
  bgImagesObj.morning.length
);

const afternoonImage = randomImage(
  bgImagesObj.afternoon,
  bgImagesObj.afternoon.length
);

const eveningImage = randomImage(
  bgImagesObj.evening,
  bgImagesObj.evening.length
);

if (0 < getHour < 12) {
  wrap.style.backgroundImage = `url(images/${morningImage}.jpg)`;
} else if (12 < getHour < 17) {
  wrap.style.backgroundImage = `url(images/${afternoonImage}.jpg)`;
} else if (17 < getHour < 24) {
  wrap.style.backgroundImage = `url(images/${eveningImage}.jpg)`;
}
