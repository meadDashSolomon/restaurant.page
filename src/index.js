import { homePage } from "./pages/homePage";
import { menu } from "./pages/menu";
import { contact } from "./pages/contact";
import { clearPage } from "./functions/clearPage";

homePage();

//event listeners for each tab that wipe out the current content
//then runs the correct ‘tab module’ to populate it again.
const homeTab = document.querySelector(".homeTab");
const menuTab = document.querySelector(".menuTab");
const contactTab = document.querySelector(".contactTab");

homeTab.addEventListener("click", () => {
  clearPage();
  homePage();
});
menuTab.addEventListener("click", () => {
  clearPage();
  menu();
});
contactTab.addEventListener("click", () => {
  clearPage();
  contact();
});
