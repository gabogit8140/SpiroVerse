import { Complex } from '../types';

export const gcd = (a: number, b: number): number => {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  while (b) {
    a %= b;
    [a, b] = [b, a];
  }
  return a;
};

/**
 * For standard circular spirographs, calculates the number of rotations 
 * of the inner wheel to close the pattern perfectly.
 */
export const calculateRequiredRotations = (R: number, r: number): number => {
  const g = gcd(R, r);
  // Pattern closes when the wheel has traveled the LCM of both circumferences.
  // The number of rotations of the stator required is r / gcd(R, r)
  return Math.min(Math.max(r / g, 1), 100); 
};

/**
 * Discrete Fourier Transform
 * Calculates complex coefficients for a set of 2D points.
 */
export const dft = (vals: {x: number, y: number}[]): Complex[] => {
  const X: Complex[] = [];
  const N = vals.length;

  for (let k = 0; k < N; k++) {
    let re = 0;
    let im = 0;

    for (let n = 0; n < N; n++) {
      const phi = (2 * Math.PI * k * n) / N;
      const cos = Math.cos(phi);
      const sin = Math.sin(phi);
      
      // Euler's formula: e^-ix = cos(x) - i*sin(x)
      // (a + bi) * (cos - i*sin)
      // a*cos - i*a*sin + i*b*cos - i^2*b*sin
      // (a*cos + b*sin) + i(b*cos - a*sin)
      
      re += vals[n].x * cos + vals[n].y * sin;
      im += vals[n].y * cos - vals[n].x * sin;
    }

    re = re / N;
    im = im / N;

    // Fix: Remap frequencies > N/2 to negative range to represent proper rotation direction
    // This prevents "spirograph-like" high-frequency loops in reconstruction
    let freq = k;
    if (k > N / 2) {
      freq = k - N;
    }

    const amp = Math.sqrt(re * re + im * im);
    const phase = Math.atan2(im, re);

    X.push({ re, im, freq, amp, phase });
  }

  // Sort by amplitude to process largest circles first (optimization for visuals)
  return X.sort((a, b) => b.amp - a.amp);
};