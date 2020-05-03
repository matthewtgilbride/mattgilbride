import React, { FC } from 'react';
import { ColorHex } from "@mgilbride/design-system/lib/types/composite/color.composite";

interface BarsProps {
  color: ColorHex
}

export const Bars: FC<BarsProps> = ({ color }) =>
  <svg viewBox="0 0 100 80" width="40" height="40">
    <rect fill={color} width="100" height="10" />
    <rect fill={color} y="30" width="100" height="10" />
    <rect fill={color} y="60" width="100" height="10" />
  </svg>
