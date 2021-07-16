import Hamburger from "./app/Hamburger.js";
import ScrollerTitleManager from "./app/ScrollerTitleManager.js";
import ScrollerTitleManagerItem from "./app/ScrollerTitleManagerItem.js";
import "./index.scss";

const hamburger = new Hamburger("[data-hamburger]", "[data-navbar]");
const scrollerTitleManage = new ScrollerTitleManager([
  new ScrollerTitleManagerItem(0, 0.75, "paweł niewiarowski - portfolio"),
  new ScrollerTitleManagerItem(0.65, 1.65, "pn - projects"),
  new ScrollerTitleManagerItem(1.65, 2.65, "pn - skillset"),
  new ScrollerTitleManagerItem(2.65, 3, "pn - about"),
  new ScrollerTitleManagerItem(3.0, 5, "pn - contact")
]);

hamburger.init();
scrollerTitleManage.init();
