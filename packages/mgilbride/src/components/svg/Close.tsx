import React, { FC } from 'react'
import { ColorHex } from "@mgilbride/design-system/lib/types/composite/color.composite";

interface CloseProps {
  color: ColorHex
}

export const Close: FC<CloseProps> = ({ color }) =>
  <svg viewBox="0 0 100 80" width="40" height="40">
    <line stroke={color} x1="0" x2="80" y1="0" y2="80" strokeWidth="10" />
    <line stroke={color} x1="0" x2="80" y1="80" y2="0" strokeWidth="10" />
  </svg>
