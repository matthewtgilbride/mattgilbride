import { SizeUnits } from '../../types/composite/size.composite';

/**
 * given a size argument, adjusts the returned size according to the baseline grid
 */
export const snapToGrid = (
  ...args: NumericSnapArgs | StringSnapArgs
): string => {
  if (isNumericSnapArgs(args)) {
    const [value, unit, baselineGrid, multiplier] = args;
    return `${snapValue(value, baselineGrid, multiplier)}${unit}`;
  }

  const [v, baselineGrid, multiplier] = args;
  const [value, unit] = stringToValueAndUnit(v);
  return `${snapValue(value, baselineGrid, multiplier)}${unit}`;
};

type NumericSnapArgs = [number, SizeUnits, number, number?];
type StringSnapArgs = [string, number, number?];
export function isNumericSnapArgs(
  args: NumericSnapArgs | StringSnapArgs,
): args is NumericSnapArgs {
  return typeof args[0] === 'number';
}

/**
 * do the arithmetic
 */
function snapValue(
  value: number,
  baselineGrid: number,
  multiplier = 1,
): number {
  const transformedValue = value * multiplier;
  return Math.round(transformedValue / baselineGrid) * baselineGrid;
}

const InvalidSizeString = (arg: string): Error =>
  new Error(`${arg} is not a valid CSS size string`);
/**
 * split's a CSS size string e.g. "15px" into it's numeric and unit values
 * @param arg
 */
function stringToValueAndUnit(arg: string): [number, string] {
  const split = arg.split(/(em|rem|px)/g);
  if (split.length === 2) {
    const [num, unit] = split;
    const value = parseFloat(num);
    if (!Number.isFinite(value)) {
      throw InvalidSizeString(arg);
    }
    return [value, unit];
  }
  throw InvalidSizeString(arg);
}
