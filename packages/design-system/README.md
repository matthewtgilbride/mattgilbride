# `design-system`

Low level design system util functions

## Usage

```
import { initMakeColor } from '@mgilbride/design-system/lib/utils/makeColor';
const { makeColor } = initMakeColor({ ...yourPalette })

const black = makeColor('dark')
const lightBlue = makeColor('primary', 2)
const someHex = makeColor('custom', '#abcdef')
```
