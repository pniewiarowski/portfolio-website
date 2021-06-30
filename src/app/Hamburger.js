class Hamburger {
  constructor(hamburgerSelector = "", navbarSelector = "") {
    this.hamburgerSelector = hamburgerSelector;
    this.navbarSelector = navbarSelector;
    this.status = false;
    this.hamburger = null;
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
    this.hamburger = document.querySelector(this.hamburgerSelector);
    this.navbar = document.querySelector(this.navbarSelector);

    this.hamburger.addEventListener("click", () => {
      this.showNavbar();
    });

    document.addEventListener("click", (event) => {
      if (!this.hamburger.contains(event.target) && this.status) {
        this.hideNavbar();
      }
    });

    window.addEventListener("scroll", () => {
      this.hideNavbar();
    });
  }
}

export default Hamburger;