import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  points: Point[];

  constructor(points: Point[], color?: string, filled?: boolean);
  constructor(points: Point[], color = "green", filled = true) {
    this.color = color;
    this.filled = filled;
    this.points = points;

    if(points.length < 3) throw new Error("A shape should have atleast 3 points");
  }

  public toString(): string {
    return `A Shape with color of ${this.color} and ${
           this.filled ? "filled" : "not filled"
           }. Points: ${this.points.join(", ")}.`;
  }

  public getPerimeter(): number {
    const points: Point[] = this.points;
    let perimeter: number = 0;
    let totalNumberOfPoints = points.length;

    for (let index = 0; index < totalNumberOfPoints; index++) {
      if(index == 0) {
        perimeter += points[index].distance(points[totalNumberOfPoints - 1]);
      } else {
        perimeter += points[index - 1].distance(points[index]);
      }
    }

    return perimeter;
  }

  abstract getType(): string;
}
