
class Spot {
  constructor (x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;

    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.wall      = 0;
    this.parent    = undefined;
    this.neighbors = [];
  }

  draw (drawMethod, color) {
    drawMethod(this.x * this.w, this.y * this.w, this.w, this.w, color);
  }

  setNeighbors (matrix) {
    let y = this.y,
      x = this.x, neighbor;

    for (let i = -1; i <= 1; i++) {
      if (!matrix[y + i]) continue;

      for (let j = -1; j <= 1; j++) {
        neighbor = matrix[y + i][x + j];

        if (!neighbor || neighbor.wall || !i && !j || i%2 && j%2) {
          continue;
        }

        this.neighbors.push(neighbor);
      }
    }
  }
}
