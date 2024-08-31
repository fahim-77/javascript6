const timer = document.querySelector("#timer");
const start = document.querySelector("#start");

const clickHandler = () => {
  timer.classList.add("timer");
  timer.style.display = "block";
  console.log(timer.classList);
  start.disabled = "disable";
  start.innerHTML = "لطفا کمی صبر کنید";
  let time2 = new Date(["08/31/2024-00:02:00"]);
  let minute = time2.getMinutes();
  let seconde = time2.getSeconds();
  const counter = setInterval(() => {
    let minute2 = ("0" + minute.toString()).slice(-2);
    let seconde2 = ("0" + seconde.toString()).slice(-2);
    const result2 = `${minute2} : ${seconde2}`;
    timer.innerHTML = result2;
    if (seconde === 0o0 && minute === 0o0) {
      clearInterval(counter);
    }
    if (seconde === 0o0) {
      minute--;
      seconde = 60;
    }
    seconde--;
  }, 1000);
  setTimeout(() => {
    start.disabled = "";
    start.innerHTML = "شروع مجدد";
  }, 121000);
};
start.addEventListener("click", clickHandler);
