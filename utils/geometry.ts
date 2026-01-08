
import { ShapeType } from '../types';
import * as Shapes from './shapes';

export interface PathPoint {
  x: number;
  y: number;
  angle?: number; // Normal angle pointing OUT
  dist?: number; // Cumulative distance
  penUp?: boolean;
}

export const generatePath = (type: ShapeType, radius: number, resolution: number = 1): PathPoint[] => {
  let points: {x: number, y: number}[] = [];
  
  switch (type) {
    case ShapeType.Circle: points = Shapes.getCirclePoints(radius); break;
    case ShapeType.Square: points = Shapes.getSquarePoints(radius); break;
    case ShapeType.Stadium: points = Shapes.getStadiumPoints(radius); break;
    case ShapeType.Triangle: points = Shapes.getTrianglePoints(radius); break;
    case ShapeType.Star: points = Shapes.getStarPoints(radius); break;
    case ShapeType.Hexagon: points = Shapes.getHexagonPoints(radius); break;
    case ShapeType.Flower: points = Shapes.getFlowerPoints(radius); break;
    case ShapeType.Line: points = Shapes.getLinePoints(radius); break;
    case ShapeType.Figure8: points = Shapes.getFigure8Points(radius); break;
    case ShapeType.Spiral: points = Shapes.getSpiralPoints(radius); break;
    case ShapeType.Cross: points = Shapes.getCrossPoints(radius); break;
    default: points = Shapes.getCirclePoints(radius); break;
  }

  const path: PathPoint[] = [];
  let totalDist = 0;
  
  if (points.length === 0) {
      points = Shapes.getCirclePoints(radius);
  }

  for (let i = 0; i < points.length; i++) {
      const p1 = points[i];
      const p2 = points[(i + 1) % points.length];
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      
      if (dist === 0) continue; 
      
      const angle = Math.atan2(dy, dx) + Math.PI / 2;
      
      path.push({
          x: p1.x,
          y: p1.y,
          angle: angle,
          dist: totalDist
      });
      totalDist += dist;
  }
  
  path.push({
      ...path[0],
      dist: totalDist
  });

  return path;
};

export const getPointAt = (path: PathPoint[], d: number) => {
    const totalLength = path[path.length - 1].dist || 1;
    const modD = ((d % totalLength) + totalLength) % totalLength;
    
    for (let i = 0; i < path.length - 1; i++) {
        if (modD >= (path[i].dist || 0) && modD < (path[i+1].dist || 0)) {
            const p1 = path[i];
            const p2 = path[i+1];
            const d1 = p1.dist || 0;
            const d2 = p2.dist || 0;
            const t = (modD - d1) / (d2 - d1);
            
            const x = p1.x + (p2.x - p1.x) * t;
            const y = p1.y + (p2.y - p1.y) * t;
            
            let a1 = p1.angle || 0;
            let a2 = p2.angle || 0;
            if (a2 - a1 > Math.PI) a2 -= 2*Math.PI;
            if (a1 - a2 > Math.PI) a1 -= 2*Math.PI;
            const angle = a1 + (a2 - a1) * t;
            
            return { x, y, angle };
        }
    }
    return path[0];
};
