import React from 'react'
import {RouterContext} from "next/dist/shared/lib/router-context";
import {barcaPalette, PaletteProvider} from "../src/utils/usePalette";
import {addDecorator} from "@storybook/react";

const paletteDecorator = Story => <PaletteProvider><Story /></PaletteProvider>
addDecorator(paletteDecorator);

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: barcaPalette.contrast
      },
      {
        name: 'light',
        value: barcaPalette.text
      }
    ]
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}
