class Hamburger {
  constructor(selector = "", navbarSelector = "") {
    this.selector = selector;
    this.navbarSelector = navbarSelector;
    this.status = false;
    this.HTMLIcon = null;
    this.navbar = null;
  }

  showNavbar() {
    this.navbar.classList.add("navbar--active");
    this.status = true;
  }

  hideNavbar() {
    this.navbar.classList.remove("navbar--active");
    this.status = false;
  }

  init() {
    this.HTMLIcon = document.querySelector(this.selector);
    this.navbar = document.querySelector(this.navbarSelector);

    this.HTMLIcon.addEventListener("click", () => {
      this.showNavbar();
    });

    document.addEventListener("click", (event) => {
      if (!this.HTMLIcon.contains(event.target) && this.status) {
        this.hideNavbar();
      }
    });

    window.addEventListener("scroll", () => {
      this.hideNavbar();
    });
  }
}

export default Hamburger;