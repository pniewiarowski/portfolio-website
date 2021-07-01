class ScrollerTitleManager {
  constructor(points) {
    this.points = points;
    this.currentY = 0;
  }

  changeWindowTitle() {
    this.points.forEach((point) => {
      if (this.currentY > point.from && this.currentY <= point.to) {
        document.title = point.name;
      }
    });
  }

  calculateRatio() {
    return window.scrollY / window.innerHeight;
  }

  init() {
    document.addEventListener("scroll", () => {
      this.currentY = this.calculateRatio();
      this.changeWindowTitle();
    });
  }
}

export default ScrollerTitleManager;