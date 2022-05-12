import { saveLocalStorage, getLocalStorage } from "./localStorage.js";

const WIDGET_KEY = "widget";

// saveLocalStorage(WIDGET_KEY, widgetObj);

function widgetRander(key, parentEl) {
  const getData = JSON.parse(getLocalStorage(key));
  // 자식 노드 초기화
  while (parentEl.hasChildNodes()) {
    parentEl.removeChild(parentEl.firstChild);
  }
  // 타입에 따라 출력
  if (typeof getData === "string") {
    const li = document.createElement("li");
    li.innerText = getData;
    parentEl.appendChild(li);
  } else if (getData !== null) {
    // local storage데이터를 받아와 출력
    getData.forEach((list) => {
      const li = document.createElement("li");

      // 시간이 있으면 시간 표시, 시간이 없으면 텍스트만 표시
      if (list.hour !== undefined) {
        li.innerText = `${list.hour}시 ${list.minute}분 ${list.text}`;
      } else {
        li.innerText = list.text;
      }

      if (list.check) {
        li.style.textDecoration = "line-through";
        li.style.color = "#c8c8c8";
      } else {
        li.style.textDecoration = "none";
        li.style.color = "#000";
      }
      parentEl.appendChild(li);
    });
  }
}

const getWidget = getLocalStorage(WIDGET_KEY);

if (getWidget === null) {
  let widgetObj = [
    {
      type: "Todo-list",
      check: false,
    },
    {
      type: "Memo",
      check: false,
    },
    {
      type: "Alram",
      check: false,
    },
  ];

  saveLocalStorage(WIDGET_KEY, widgetObj);
}

export { widgetRander };
