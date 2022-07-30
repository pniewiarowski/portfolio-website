import AOS from "aos";
import Hamburger from "./app/Hamburger.js";
import ScrollerTitleManager from "./app/ScrollerTitleManager.js";
import ScrollerTitleManagerItem from "./app/ScrollerTitleManagerItem.js";
import GitRepository from "./app/GitRepository";
import "./index.scss";
import "aos/dist/aos.css";

const hamburger = new Hamburger("[data-hamburger]", "[data-navbar]");
const scrollerTitleManager = new ScrollerTitleManager([
  new ScrollerTitleManagerItem(0, 0.75, "paweł niewiarowski - portfolio"),
  new ScrollerTitleManagerItem(0.65, 1.65, "pn - projects"),
  new ScrollerTitleManagerItem(1.65, 2.55, "pn - skillset"),
  new ScrollerTitleManagerItem(2.55, 3.55, "pn - about"),
  new ScrollerTitleManagerItem(3.35, 5.00, "pn - contact")
]);
const gitRepository = new GitRepository("[data-git-repository]", "pniewiarowski",
  [
    "aurora-recruitment-task",
    "orange-black-theme",
    "leetcode-go",
  ]
);

window.addEventListener("load", () => {
  document.body.classList.remove("preload");

  hamburger.init();
  scrollerTitleManager.init();
  gitRepository.init();
  AOS.init({
    once: false,
    duration: 500,
    disable: "mobile"
  });
  AOS.refresh();
});
