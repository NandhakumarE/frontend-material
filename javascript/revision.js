const fn = (id = 0, sumfn) => {
  return null;
};

console.log("one");

for (let i = 0; i < 1e9; i++) {
  console.log("hgdhcgvh");
}

console.log("two");
const timerEle = document.getElementById("timer");
const formatNumber = (number) => {
  return number.toString().padStart(2, 0);
};
const t = () => {
  const timerValue = timerEle.textContent;
  const [hours, minutes, seconds] = timerValue.split(":");

  let content = [hours, minutes, seconds];
  if (+seconds >= 59) {
    if (+minutes >= 59) {
      content[0] = formatNumber(+content[0] + 1);
      content[1] = formatNumber(0);
      content[2] = formatNumber(0);
    } else {
      content[1] = formatNumber(+content[1] + 1);
      content[2] = formatNumber(0);
    }
  } else {
    content[2] = formatNumber(+content[2] + 1);
  }
  console.log(content);
  timerEle.innerText = content.join(":");
};
setInterval(() => {
  t();
}, 1000);