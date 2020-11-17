
class Paddle {
  constructor(canvas, width, height, color = 'blue') {
      this.canvas = canvas
      this.width = 75
      this.height = 10
      this.x = (this.canvas.width - this.width) / 2
      this.y = this.canvas.height - this.height
      this.color = color
  }

  render(ctx) {
      ctx.beginPath();
      ctx.rect(this.x, this.canvas.height - this.height, this.width, this.height);
      ctx.fillStyle = 'blue';
      ctx.fill();
      ctx.closePath();
  }

  resetPaddle() {
      this.x = (this.canvas.width - this.paddleWidth) / 2;
  }
}

export default Paddle