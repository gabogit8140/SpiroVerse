
export const getCirclePoints = (radius: number) => {
    const points = [];
    for (let i = 0; i <= 360; i += 2) {
        const rad = i * Math.PI / 180;
        points.push({ x: Math.cos(rad) * radius, y: Math.sin(rad) * radius });
    }
    return points;
};

export const getSquarePoints = (radius: number) => {
    const points = [];
    const r = radius;
    const c = radius * 0.3;
    const w = r - c;
    for (let i = 0; i <= 90; i += 5) points.push({ x: w + c * Math.cos(i * Math.PI / 180), y: w + c * Math.sin(i * Math.PI / 180) });
    for (let i = 90; i <= 180; i += 5) points.push({ x: -w + c * Math.cos(i * Math.PI / 180), y: w + c * Math.sin(i * Math.PI / 180) });
    for (let i = 180; i <= 270; i += 5) points.push({ x: -w + c * Math.cos(i * Math.PI / 180), y: -w + c * Math.sin(i * Math.PI / 180) });
    for (let i = 270; i <= 360; i += 5) points.push({ x: w + c * Math.cos(i * Math.PI / 180), y: -w + c * Math.sin(i * Math.PI / 180) });
    return points;
};

export const getStadiumPoints = (radius: number) => {
    const points = [];
    const sw = radius;
    const sh = radius * 0.5;
    for (let i = -90; i <= 90; i += 5) points.push({ x: sw * 0.5 + sh * Math.cos(i * Math.PI / 180), y: sh * Math.sin(i * Math.PI / 180) });
    for (let i = 90; i <= 270; i += 5) points.push({ x: -sw * 0.5 + sh * Math.cos(i * Math.PI / 180), y: sh * Math.sin(i * Math.PI / 180) });
    points.push(points[0]);
    return points;
};

export const getTrianglePoints = (radius: number) => {
    const points = [];
    for (let i = 0; i <= 360; i += 2) {
        const t = i * Math.PI / 180;
        const r_tri = radius * (1 + 0.3 * Math.sin(3 * t - Math.PI / 2));
        points.push({ x: r_tri * Math.cos(t), y: r_tri * Math.sin(t) });
    }
    return points;
};

export const getStarPoints = (radius: number) => {
    const points = [];
    for (let i = 0; i <= 360; i += 2) {
        const t = i * Math.PI / 180;
        const r_star = radius * (1 + 0.4 * Math.sin(5 * t - Math.PI / 2));
        points.push({ x: r_star * Math.cos(t), y: r_star * Math.sin(t) });
    }
    return points;
};

export const getHexagonPoints = (radius: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
        const angle = (i * 60) * Math.PI / 180;
        points.push({ x: radius * Math.cos(angle), y: radius * Math.sin(angle) });
        const nextAngle = ((i + 1) * 60) * Math.PI / 180;
        const x1 = radius * Math.cos(angle);
        const y1 = radius * Math.sin(angle);
        const x2 = radius * Math.cos(nextAngle);
        const y2 = radius * Math.sin(nextAngle);
        for (let j = 1; j <= 5; j++) {
            const t = j / 6;
            points.push({ x: x1 + (x2 - x1) * t, y: y1 + (y2 - y1) * t });
        }
    }
    points.push(points[0]);
    return points;
};

export const getFlowerPoints = (radius: number) => {
    const points = [];
    for (let i = 0; i <= 360; i += 2) {
        const t = i * Math.PI / 180;
        const r_flower = radius * (0.8 + 0.2 * Math.cos(8 * t));
        points.push({ x: r_flower * Math.cos(t), y: r_flower * Math.sin(t) });
    }
    return points;
};

export const getLinePoints = (radius: number) => {
    const points = [];
    const lineL = radius;
    const lineW = 2;
    for (let i = -90; i <= 90; i += 5) points.push({ x: lineL + lineW * Math.cos(i * Math.PI / 180), y: lineW * Math.sin(i * Math.PI / 180) });
    for (let i = 90; i <= 270; i += 5) points.push({ x: -lineL + lineW * Math.cos(i * Math.PI / 180), y: lineW * Math.sin(i * Math.PI / 180) });
    points.push(points[0]);
    return points;
};

export const getFigure8Points = (radius: number) => {
    const points = [];
    for (let i = 0; i <= 360; i += 2) {
        const t = i * Math.PI / 180;
        const scale = radius;
        const denom = 1 + Math.sin(t) * Math.sin(t);
        const x = scale * Math.cos(t) / denom;
        const y = scale * Math.cos(t) * Math.sin(t) / denom;
        points.push({ x, y });
    }
    return points;
};

export const getSpiralPoints = (radius: number) => {
    const points = [];
    for (let i = 0; i <= 360; i += 2) {
        const t = i * Math.PI / 180;
        const r_snail = radius * (0.5 + 0.5 * Math.cos(t));
        points.push({ x: r_snail * Math.cos(t), y: r_snail * Math.sin(t) });
    }
    return points;
};

export const getCrossPoints = (radius: number) => {
    const points = [];
    for (let i = 0; i <= 360; i += 2) {
        const phi = i * Math.PI / 180;
        const m = 4;
        const n1 = 0.5;
        const n2 = 1;
        const n3 = 1;
        const a = 1;
        const b = 1;
        const t1 = Math.abs(Math.cos(m * phi / 4) / a);
        const t2 = Math.abs(Math.sin(m * phi / 4) / b);
        const r_super = radius * Math.pow(Math.pow(t1, n2) + Math.pow(t2, n3), -1 / n1);
        if (isFinite(r_super)) {
            points.push({ x: r_super * Math.cos(phi), y: r_super * Math.sin(phi) });
        }
    }
    return points;
};
