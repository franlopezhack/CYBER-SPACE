class Healthbar {
  constructor(ctx, x, y, w, h, color) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.heart = new Heart(this.ctx)
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
    this.ctx.strokeRect(this.x, this.y, 200, this.h);
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = "#333";
    this.heart.draw();
  }

  increase() {
    this.w = Math.min(200, this.w + 20);
  }

  decrease() {
    this.w = Math.max(0, this.w - 20);
  }

  isEmpty() {
    return this.w === 0;
  }
}
