import Hamburger from "./app/Hamburger.js";
import "./index.scss";

const hamburger = new Hamburger("[data-hamburger]", "[data-navbar]");

hamburger.init();