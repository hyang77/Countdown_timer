window.addEventListener("DOMContentLoaded", () => {
  var x = setInterval(function() {
    //set an end date
    let birthday = new Date("Mar 12, 2021 00:00:00").getTime();
    //calc remaining time
    let now = new Date().getTime();
    let diff = birthday - now;
    //convert remaining time into usable format
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((diff % (1000 * 60)) / 1000);
    //output time data
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;
    //do something when the time up
    if (diff < 0) {
      clearInterval(x);
      document.getElementById("container").innerHTML = "Happy Birthday, Haoli!";
    }
  }, 1000);
});
