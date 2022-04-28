const textArea = document.getElementById("meno-input");

let memo = "";
const MEMO_KEY = "memo";

function saveMemo(memo) {
  localStorage.setItem(MEMO_KEY, JSON.stringify(memo));
}

function handleMemoSubmit() {
  memo = textArea.value;
  saveMemo(memo);
}

function paintMemo(memo) {
  textArea.value = memo;
}

textArea.onblur = () => {
  handleMemoSubmit();
};

const savedMemo = localStorage.getItem(MEMO_KEY);
if (savedMemo !== "") {
  const parseMemo = JSON.parse(savedMemo);
  memo = parseMemo;
  paintMemo(memo);
}
