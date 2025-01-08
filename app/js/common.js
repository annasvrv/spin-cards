$(function () {
  const card = document.getElementById("btn");
  const card1 = document.getElementById("card");

  card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) * 5;
    let yAxis = (window.innerHeight / 2 - e.pageY) * 5;
    card.style.transform =
      "perspective(1000px) translateY(" +
      xAxis +
      "px)" +
      "translateX(" +
      yAxis +
      "px)";
  });
  card.addEventListener("click", (e) => {
    e.preventDefault();
    let xAxis = (window.innerWidth / 2 - e.pageX) / 1;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 1;
    card.style.transform =
      "perspective(1000px) translateX(" +
      xAxis +
      "px)" +
      "translateY(" +
      yAxis +
      "px)";
  });
  card.addEventListener("mouseleave", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 1;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 1;
    card.style.transform =
      "perspective(1000px) translateY(" +
      "0" +
      "px)" +
      "translateX(" +
      "0" +
      "px)";
  });
});
