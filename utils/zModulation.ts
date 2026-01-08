
import { SpiroConfig, ZModulationType, Complex } from '../types';

export interface ZModMechanismData {
    amp: number;
    freq: number;
    phase: number;
}

// Helper to calculate height components at any time t
export const getZComponents = (t: number, config: SpiroConfig, fourierData: Complex[]) => {
    let val1 = 0;
    let val2 = 0;

    // Wave 1 (Back Wall)
    if (config.zModulationType !== ZModulationType.None) {
        const t1 = t * config.zFrequency;
        if (config.zModulationType === ZModulationType.Fourier && fourierData.length > 0) {
            let fy = 0;
            const count = Math.min(config.fourierCount, fourierData.length);
            for (let j = 0; j < count; j++) {
                const { freq, amp, phase } = fourierData[j];
                fy += amp * Math.sin(freq * t1 + phase);
            }
            val1 = fy * (config.zAmplitude / 100);
        } else {
            val1 = config.zAmplitude * Math.sin(t1);
        }
    }

    // Wave 2 (Side Wall)
    if (config.zModulationType2 !== ZModulationType.None) {
        const t2 = t * config.zFrequency2;
        if (config.zModulationType2 === ZModulationType.Fourier && fourierData.length > 0) {
            let fy = 0;
            const count = Math.min(config.fourierCount, fourierData.length);
            for (let j = 0; j < count; j++) {
                const { freq, amp, phase } = fourierData[j];
                fy += amp * Math.sin(freq * t2 + phase);
            }
            val2 = fy * (config.zAmplitude2 / 100);
        } else {
            val2 = config.zAmplitude2 * Math.sin(t2);
        }
    }

    return { val1, val2 };
};

export const buildZData = (type: ZModulationType, amplitude: number, fourierData: Complex[], fourierCount: number) => {
    const zModData: Complex[] = [];
    let zScale = 1;
    if (type === ZModulationType.None) return { zModData: [], zScale: 0 };
    if (type === ZModulationType.Fourier && fourierData.length > 0) {
        zScale = amplitude / 100;
        const count = Math.min(fourierCount, fourierData.length);
        for(let i=0; i<count; i++) zModData.push(fourierData[i]);
    } else {
        zModData.push({ freq: 1, amp: amplitude, phase: 0, re: 0, im: 0 });
        zScale = 1;
    }
    return { zModData, zScale };
};
