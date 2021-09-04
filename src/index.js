import AOS from "aos";
import Hamburger from "./app/Hamburger.js";
import ScrollerTitleManager from "./app/ScrollerTitleManager.js";
import ScrollerTitleManagerItem from "./app/ScrollerTitleManagerItem.js";
import "./index.scss";
import "aos/dist/aos.css";

const hamburger = new Hamburger("[data-hamburger]", "[data-navbar]");
const scrollerTitleManager = new ScrollerTitleManager([
  new ScrollerTitleManagerItem(0, 0.75, "paweł niewiarowski - portfolio"),
  new ScrollerTitleManagerItem(0.65, 1.25, "pn - projects"),
  new ScrollerTitleManagerItem(1.25, 2.00, "pn - skillset"),
  new ScrollerTitleManagerItem(2.00, 3.00, "pn - about"),
  new ScrollerTitleManagerItem(3.00, 5.00, "pn - contact")
]);

window.addEventListener("load", () => {
  hamburger.init();
  scrollerTitleManager.init();
  AOS.init({
    once: false,
    duration: 500,
    disable: "mobile"
  });
  AOS.refresh();
});