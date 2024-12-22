const secondHand = document.querySelector(".secondHand");
const minuteHand = document.querySelector(".minuteHand");
const hourHand = document.querySelector(".hourHand");

const setClock = () => {
  const currentTime = new Date();
  const seconds = currentTime.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = currentTime.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hour = currentTime.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setClock, 1000);
