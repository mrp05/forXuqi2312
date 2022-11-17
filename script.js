"use strict";
const laThu = document.querySelector("#laThu");
const thongDiep = document.querySelector("#hide");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btnClose");

laThu.addEventListener("click", function () {
  thongDiep.classList.remove("hide");
});

overlay.addEventListener("click", function () {
  thongDiep.classList.add("hide");
});

btnClose.addEventListener("click", function () {
  thongDiep.classList.add("hide");
  console.log("adas");
  overlay.classList.add("hide");
});
