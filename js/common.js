import { backgroundRender } from "./background.js";
import { getClock } from "./clock.js";

function init() {
  getClock();
  backgroundRender();
}

setInterval(init, 1000);
