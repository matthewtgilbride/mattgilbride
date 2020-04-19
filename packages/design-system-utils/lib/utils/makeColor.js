"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polished_1 = require("polished");
exports.initMakeColor = (palette) => {
    const createColor = (scale, color, darken = false) => polished_1.mix(scale, darken ? palette.fixed.dark : palette.fixed.light, palette.scalable[color]);
    const createColorScale = (hex) => ({
        [-3]: createColor(0.75, hex, true),
        [-2]: createColor(0.5, hex, true),
        [-1]: createColor(0.25, hex, true),
        1: createColor(0.25, hex),
        2: createColor(0.5, hex),
        3: createColor(0.75, hex),
    });
    const colorMap = Object.entries(palette)
        .map(([_, colors]) => (Object.assign({}, colors)))
        .reduce((flattenedMap, innerMap) => (Object.assign(Object.assign({}, flattenedMap), { innerMap })), {});
    const colorMapScalable = Object.keys(palette.scalable).reduce((resultMap, key) => (Object.assign(Object.assign({}, resultMap), { [key]: createColorScale(key) })), {});
    return {
        makeColor: (config) => {
            if (config.length === 1) {
                return colorMap[config[0]];
            }
            if (config[0] === 'custom') {
                return config[1];
            }
            return colorMapScalable[config[0]][config[1]];
        },
    };
};
//# sourceMappingURL=makeColor.js.map