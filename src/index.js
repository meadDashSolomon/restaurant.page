import { homePage } from "./homePage";
import { menu } from "./menu";
import { contact } from "./contact";
import { clearPage } from "./clearPage";

homePage();
console.log(clearPage);

//tab-switching logic
//event listeners for each tab that wipes out the current content
//then runs the correct ‘tab module’ to populate it again.
const homeTab = document.querySelector(".homeTab");
const menuTab = document.querySelector(".menuTab");
const contactTab = document.querySelector(".contactTab");

homeTab.addEventListener("click", () => {
  console.log("Home tab clicked");
  clearPage();
  homePage();
});
menuTab.addEventListener("click", () => {
  console.log("Menu tab clicked");
  clearPage();
  menu();
});
contactTab.addEventListener("click", () => {
  console.log("Contact tab clicked");
  clearPage();
  contact();
});
