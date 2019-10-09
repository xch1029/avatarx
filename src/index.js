const blockSize = 50;
const avatarMargin = 20;
const avatarCanvasSize = blockSize * 5 + avatarMargin * 2;

const fillStyle = "#f0f0f0";


class Avatarx {
  constructor(canvas, options) {
    this.canvas = canvas;
    this.options = options;
    this.render();
  }
  render() {
    const { color, num } = this.options;
    this.canvas.width = avatarCanvasSize;
    this.canvas.height = avatarCanvasSize;
    const ctx = this.canvas.getContext('2d');
    ctx.fillStyle = fillStyle;
    ctx.fillRect(0, 0, avatarCanvasSize, avatarCanvasSize);
    for (var x = 0; x < 3; x++) {
      for (var y = 0; y < 5; y++) {
        if (Math.random() < num / 100) {
          ctx.fillStyle = color;
          ctx.fillRect(x * blockSize + avatarMargin, y * blockSize + avatarMargin, blockSize, blockSize);
          ctx.fillRect((5 - 1 - x) * blockSize + avatarMargin, y * blockSize + avatarMargin, blockSize, blockSize);
        }
      }
    }
  }
}

module.exports = Avatarx;
export default Avatarx;
// window.Avatarx = Avatarx;