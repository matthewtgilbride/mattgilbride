import React, { FC, useCallback } from 'react';
import { CSSObject } from '@emotion/core';
import { FormControl } from '../FormControl';
import { PaletteType, usePalette } from '../../utils/usePalette';
import { makeSpace } from '../../utils/design';

const style: CSSObject = {
  '> div': {
    flexDirection: 'row',
    alignItems: 'center',
    label: {
      padding: 0,
      paddingRight: makeSpace('xxs'),
    },
  },
};

export const ColorSchemePicker: FC = () => {
  const { setPalette, paletteType } = usePalette();
  const selectPalette = useCallback(
    (v: string) => setPalette(v as PaletteType),
    [setPalette],
  );
  return (
    <div css={style}>
      <FormControl
        type="select"
        labelText="Color Scheme"
        value={paletteType}
        onValueChange={selectPalette}
        options={[
          {
            text: 'Sixers',
            value: 'sixers',
          },
          {
            text: 'Barça ',
            value: 'barca',
          },
        ]}
      />
    </div>
  );
};
