const timerElement = document.getElementById("timer");

const getProperTime = (number) => {
  if (number < 10) return `0${number}`;
  return number.toString();
};

const getTime = () => {
  const existingTime = timerElement.textContent;

  const content = existingTime.split(":");

  const [hours, minutes, seconds] = content;

  if (+seconds >= 59) {
    if (+minutes >= 59) {
      content[0] = getProperTime(+hours + 1);
      content[1] = getProperTime(0);
      content[2] = getProperTime(0);
    } else {
      content[1] = getProperTime(+minutes + 1);
      content[2] = getProperTime(0);
    }
  } else {
    content[2] = getProperTime(+seconds + 1);
  }

  return content.join(":");
};

setInterval(() => {
  const time = getTime();
  timerElement.innerText = time;
}, 100);
