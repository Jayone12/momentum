import { saveLocalStorage, getLocalStorage } from "./localStorage.js";
import { widgetRander } from "./widget.js";

const textArea = document.getElementById("meno-input");
const widetLists = document.querySelector(".memo-widget > ul");
const memoWidget = document.querySelector(".memo-widget");
const widgetBtn = document.querySelector(".menu-memo > .widget-btn");

let memo = "";
const WIDGET_KEY = "widget";
const MEMO_KEY = "memo";

function handleMemoSubmit() {
  memo = textArea.value;
  saveLocalStorage(MEMO_KEY, memo);
  widgetRander(MEMO_KEY, widetLists);
}

function paintMemo(memo) {
  textArea.value = memo;
}

textArea.onblur = () => {
  handleMemoSubmit();
};

const savedMemo = JSON.parse(getLocalStorage(MEMO_KEY));
if (savedMemo !== "") {
  memo = savedMemo;
  paintMemo(memo);
  widgetRander(MEMO_KEY, widetLists);
}

widgetBtn.addEventListener("click", () => {
  const getWidget = JSON.parse(getLocalStorage(WIDGET_KEY));
  getWidget[1].check = !getWidget[1].check;
  if (getWidget[1].check) {
    memoWidget.classList.remove("hidden");
  } else {
    memoWidget.classList.add("hidden");
  }
  saveLocalStorage(WIDGET_KEY, getWidget);
});

const getWidget = JSON.parse(getLocalStorage(WIDGET_KEY));

if (getWidget[1].check) {
  memoWidget.classList.remove("hidden");
} else {
  memoWidget.classList.add("hidden");
}
