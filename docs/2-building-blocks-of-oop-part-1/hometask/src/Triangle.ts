import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
  constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
    super([point1, point2, point3], color, filled);
  }

  public toString(): string {
    let arrayOfVertices: string[] = [];

    for (let index = 0; index < this.points.length; index++) {
        arrayOfVertices.push(`v${index + 1}=${this.points[index]}`);
    }

    return `Triangle[${arrayOfVertices}]`;
  }

  getType(): string {
    const points: Point[] = this.points;

    const sideOne: any = points[0].distance(points[1]).toFixed(2);
    const sideTwo: any = points[1].distance(points[2]).toFixed(2);
    const sideThree: any = points[2].distance(points[0]).toFixed(2);

    if (sideOne === sideTwo && sideTwo === sideThree) {
      return "equilateral triangle";
    } else if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
      return "isosceles triangle";
    } else {
      return "scalene triangle";
    }
  }
}
