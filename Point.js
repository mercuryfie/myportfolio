export class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.fixed = y;
        this.speed = 0.1;
        this.cur = 0;
        this.max = Math.random() * 100 + 150;
    }

    update () {
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sun(this.cur) * this.max);
    }
}