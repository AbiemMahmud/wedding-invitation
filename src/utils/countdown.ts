var countDownDate = new Date("Sep 29, 2024 09:00:00").getTime();

// Update the count down every 1 second
export function countDownHandler() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  if (daysElement && hoursElement && minutesElement && secondsElement) {
    daysElement.innerHTML = days.toString();
    hoursElement.innerHTML = hours.toString();
    minutesElement.innerHTML = minutes.toString();
    secondsElement.innerHTML = seconds.toString();
  } else {
    console.log("Element no found");
  }

  if (distance < 0) {
    console.log("Expired!!!");
  }
}
