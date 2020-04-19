# `design-system-utils`

Low level design system util functions

## Usage

```
import { initMakeColor } from '@mgilbride/design-system-utils/lib/utils/makeColor';
const { makeColor } = initMakeColor({ ...yourPalette })

const black = makeColor('dark')
const lightBlue = makeColor('primary', 2)
const someHex = makeColor('custom', '#abcdef')
```
