export class Point {
  x: number;
  y: number;
  
  constructor(x?: number, y?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }
  
  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }
  
  public distance(other?: number, y?: number): number;
  public distance(other: Point): number;
  public distance(other?: Point | number, y?: number): number {
    // Case :: no args: distance from this point to (0, 0);
    if (!other) {
      let diffX = 0 - this.x;
      let diffY = 0 - this.y;
      
      return Math.hypot(diffX, diffY);
    }
    // Case :: distance(other: Point) - distance from this point to a given instance of Point
    if (typeof other === "object") {
      let diffX = other.x - this.x;
      let diffY = other.y - this.y;
      
      return Math.hypot(diffX, diffY);
    }
    // Case :: distance(x, y) - distance from this point to a given point (x, y)
    else if (typeof other === "number" && y) {
      let diffX = other - this.x;
      let diffY = y - this.y;
        
      return Math.hypot(diffX, diffY);
    }
    // Case :: If not a point
    else {
      throw new Error("Not a point");
    }
  }
}
