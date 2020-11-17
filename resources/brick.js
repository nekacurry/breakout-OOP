import Sprite from './sprite';

class Brick extends Sprite {
  constructor(x = 0, y = 0, width = 10, height = 10, color = 'red') {
    super(x, y, width, height, color);
    this.status = 1;
  }
}

export default Brick