import { Color, ColorFixed, ColorScalable } from '../primitive/color.primitive';
/**
 * @todo Convert ColorHex to actual type-checked regex value
 * once this issue has been closed
 * https://github.com/Microsoft/TypeScript/issues/6579
 */
export declare type ColorHex = string;
export declare type ColorBlendRatios = 0.25 | 0.5 | 0.75;
export declare type ColorScalePosition = -3 | -2 | -1 | 1 | 2 | 3;
export declare type ColorScales = {
    [key in ColorScalePosition]: ColorHex;
};
export declare type PaletteFixed = {
    [key in ColorFixed]: ColorHex;
};
export declare type PaletteScalable = {
    [key in ColorScalable]: ColorHex;
};
export interface Palette {
    fixed: PaletteFixed;
    scalable: PaletteScalable;
}
export declare type FixedColorConfig = [ColorFixed];
export declare type ScaledColorConfig = [ColorScalable, ColorScalePosition];
export declare type CustomColorConfig = ['custom', ColorHex];
export declare type ColorConfig = FixedColorConfig | ScaledColorConfig | CustomColorConfig;
export declare type ColorMap = {
    [key in Color]: ColorHex;
};
export declare type ColorMapScalable = {
    [key in ColorScalable]: ColorScales;
};
export declare type MakeColor = (config: ColorConfig) => ColorHex;
export declare type InitMakeColor = (palette: Palette) => {
    makeColor: MakeColor;
};
//# sourceMappingURL=color.composite.d.ts.map