import { backgroundRender } from "./background.js";
import { getClock } from "./clock.js";
import { alramClock } from "./alram.js";

function init() {
  getClock();
  backgroundRender();
  alramClock();
}

init();
setInterval(init, 1000);
