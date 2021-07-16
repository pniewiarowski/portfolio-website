import Hamburger from "./app/Hamburger.js";
import ScrollerTitleManager from "./app/ScrollerTitleManager.js";
import ScrollerTitleManagerItem from "./app/ScrollerTitleManagerItem.js";
import "./index.scss";

const hamburger = new Hamburger("[data-hamburger]", "[data-navbar]");
const scrollerTitleManage = new ScrollerTitleManager([
  new ScrollerTitleManagerItem(0, 0.75, "paweł niewiarowski - portfolio"),
  new ScrollerTitleManagerItem(0.65, 1.25, "pn - projects"),
  new ScrollerTitleManagerItem(1.25, 2.00, "pn - skillset"),
  new ScrollerTitleManagerItem(2.00, 2.60, "pn - about"),
  new ScrollerTitleManagerItem(2.60, 5.00, "pn - contact")
]);

hamburger.init();
scrollerTitleManage.init();
