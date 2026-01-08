
import * as THREE from 'three';

export enum ColorMode {
  Solid = 'SOLID',
  Gradient = 'GRADIENT',
  Rainbow = 'RAINBOW',
}

export enum SpiroType {
  Hypotrochoid = 'INSIDE',
  Epitrochoid = 'OUTSIDE',
}

export enum RenderMode {
  TwoD = '2D',
  ThreeD = '3D'
}

export enum GeneratorMode {
  Spirograph = 'SPIROGRAPH',
  Fourier = 'FOURIER',
  Text = 'TEXT'
}

export enum ShapeType {
  Circle = 'CIRCLE',
  Square = 'SQUARE',
  Triangle = 'TRIANGLE',
  Stadium = 'STADIUM',
  Star = 'STAR',
  Hexagon = 'HEXAGON',
  Flower = 'FLOWER',
  Line = 'LINE',
  Cross = 'CROSS',
  Figure8 = 'FIGURE8',
  Spiral = 'SPIRAL'
}

export enum ZModulationType {
  None = 'NONE',
  Sine = 'SINE',
  Fourier = 'FOURIER'
}

export interface Complex {
  re: number;
  im: number;
  freq: number;
  amp: number;
  phase: number;
}

export interface SpiroConfig {
  renderMode: RenderMode;
  generatorMode: GeneratorMode;
  type: SpiroType;
  statorShape: ShapeType;
  rotorShape: ShapeType;
  outerRadius: number;
  innerRadius: number;
  penOffset: number;
  resolution: number;
  rotations: number;
  color: string;
  colorMode: ColorMode;
  lineWidth: number;
  opacity: number;
  drawSpeed: number;
  
  // Primary Z Modulation (Back Wall)
  zAmplitude: number;
  zFrequency: number;
  zModulationType: ZModulationType;

  // Secondary Z Modulation (Side Wall)
  zAmplitude2: number;
  zFrequency2: number;
  zModulationType2: ZModulationType;

  perspective: boolean;
  showProjection: boolean;
  showTrace: boolean; // Controls whether the main drawing line is visible
  fourierCount: number; // Number of epicycles
  
  textPhrase: string; // Text to draw
  videoFormat: string; // 'webm-vp9', 'webm-vp8', 'mp4'
}

export const DEFAULT_CONFIG: SpiroConfig = {
  renderMode: RenderMode.TwoD, // Default to 2D for easier drawing discovery
  generatorMode: GeneratorMode.Spirograph,
  type: SpiroType.Hypotrochoid,
  statorShape: ShapeType.Circle,
  rotorShape: ShapeType.Circle,
  outerRadius: 100,
  innerRadius: 35,
  penOffset: 45,
  resolution: 2,
  rotations: 15,
  color: '#00ffcc',
  colorMode: ColorMode.Rainbow,
  lineWidth: 2,
  opacity: 0.9,
  drawSpeed: 5,
  
  // Wave 1
  zAmplitude: 40,
  zFrequency: 5,
  zModulationType: ZModulationType.Sine,
  
  // Wave 2
  zAmplitude2: 0,
  zFrequency2: 1,
  zModulationType2: ZModulationType.None,

  perspective: true,
  showProjection: true,
  showTrace: true,
  fourierCount: 10,
  textPhrase: 'Spiro',
  videoFormat: 'webm-vp9'
};

export interface MechanicsRefs {
  mechanicsGroup: THREE.Group;
  penGroup: THREE.Group;
  backWallGroup: THREE.Group;
  sideWallGroup: THREE.Group;
  floorEpicyclesGroup?: THREE.Group;
  floorEpicycleMeshes: { circle: THREE.Line, radius: THREE.Line }[];
  zModMeshesBack: { circle: THREE.Line, radius: THREE.Line, amp: number, freq: number, phase: number }[];
  zModMeshesSide: { circle: THREE.Line, radius: THREE.Line, amp: number, freq: number, phase: number }[];
  backConnector: THREE.Line;
  sideConnector: THREE.Line;
  connectorLine: THREE.Line;
  statorLine?: THREE.Line;
  rotorLine?: THREE.Line;
  armLine?: THREE.Line;
  xProjector: THREE.Line;
  zProjector: THREE.Line;
  heightLine: THREE.Line;
  sideDot: THREE.Mesh;
  backDot: THREE.Mesh;
  tipLine: THREE.Line;
}
