export class Clock {
  /**
   * Classe horloge.
   *
   * @param {object} options les options de l'horloge
   * @param {Element} options.container l'élément dans lequel sera insérée l'horloge
   * @param {string} options.format le format d'affichage de l'horloge
   */
  constructor(options = {}) {
    this.container = options.container || document.body;
    this.format = options.format || "HH:mm:ss";
  }

  start() {
    this.update();
    setInterval(() => {
      this.update();
    }, 1000);
  }

  update() {
    const now = new Date();
    this.container.innerHTML = now.toLocaleTimeString();
  }
}
