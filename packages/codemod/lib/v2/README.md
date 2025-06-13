# Canvas Kit Tokens Migration Codemod

This codemod helps migrate Canvas Kit tokens from `@workday/canvas-kit-react/tokens` to
`@workday/canvas-tokens-web` v2 format. It automatically transforms token usage in your codebase to
use the new token system.

## Important Notes

- **Run on Small Batches**: We recommend running the codemod on a small number of files at a time.
  This allows for easier manual review of the changes and helps catch any potential issues early.
- **Use Semantic Tokens**: Always prefer system (semantic) tokens over base tokens. This simplifies
  future migrations to new branding colors and maintains better consistency across your application.

## Required Dependencies

The codemod requires the following packages to be installed:

- `@workday/canvas-kit-styling`
- `@workday/canvas-tokens-web`

Additionally, you need to import the following CSS variable files in your application's root file
(e.g., `index.ts` or `App.tsx`):

```ts
import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
```

These imports are required to ensure the CSS variables are properly attached to the root and
available throughout your application.

## Installation

You can run the codemod using npx:

```sh
npx @workday/canvas-tokens-codemod v2 [path]
```

Or install the package and run it directly:

```sh
yarn add @workday/canvas-tokens-codemod
canvas-tokens-codemod v2 [path]
```

> Note: These codemods only work on .js, .jsx, .ts, and .tsx extensions. You may need to make some
> manual changes in other file types (.json, .mdx, .md, etc.).

> Note: You may need to run your linter after executing the codemod, as its resulting formatting
> (spacing, quotes, etc.) may not match your project's styling.

## What This Codemod Does

The codemod performs the following transformations:

### Colors

- Converts color tokens from `@workday/canvas-kit-react/tokens` to the new system
- Transforms color usage in `createStyles`, `createStencil`, and CSS objects
- Maps old color tokens to new semantic color tokens
- Adds required imports for `cssVar` and new token packages

#### Color Token Mappings to System

##### Background Colors

| Old Token                 | New Token                           |
| ------------------------- | ----------------------------------- |
| `colors.frenchVanilla100` | `system.color.bg.default`           |
| `colors.blueberry200`     | `system.color.bg.primary.soft`      |
| `colors.blueberry400`     | `system.color.bg.primary.default`   |
| `colors.blueberry500`     | `system.color.bg.primary.strong`    |
| `colors.blueberry600`     | `system.color.bg.primary.stronger`  |
| `colors.cantaloupe100`    | `system.color.bg.caution.softer`    |
| `colors.cantaloupe400`    | `system.color.bg.caution.default`   |
| `colors.cantaloupe500`    | `system.color.bg.caution.strong`    |
| `colors.cantaloupe600`    | `system.color.bg.caution.stronger`  |
| `colors.cinnamon100`      | `system.color.bg.critical.softer`   |
| `colors.cinnamon500`      | `system.color.bg.critical.default`  |
| `colors.cinnamon600`      | `system.color.bg.critical.strong`   |
| `colors.greenApple100`    | `system.color.bg.positive.softer`   |
| `colors.greenApple400`    | `system.color.bg.positive.default`  |
| `colors.greenApple500`    | `system.color.bg.positive.strong`   |
| `colors.greenApple600`    | `system.color.bg.positive.stronger` |
| `colors.licorice100`      | `system.color.bg.muted.softer`      |
| `colors.licorice200`      | `system.color.bg.muted.soft`        |
| `colors.licorice300`      | `system.color.bg.muted.default`     |
| `colors.licorice500`      | `system.color.bg.muted.strong`      |
| `colors.soap100`          | `system.color.bg.alt.softer`        |
| `colors.soap200`          | `system.color.bg.alt.soft`          |
| `colors.soap300`          | `system.color.bg.alt.default`       |
| `colors.soap400`          | `system.color.bg.alt.strong`        |
| `colors.soap500`          | `system.color.bg.alt.stronger`      |
| `colors.blackPepper400`   | `system.color.bg.contrast.default`  |
| `colors.blackPepper500`   | `system.color.bg.contrast.strong`   |

##### Foreground Colors

| Old Token                 | New Token                          |
| ------------------------- | ---------------------------------- |
| `colors.blackPepper300`   | `system.color.fg.default`          |
| `colors.blackPepper400`   | `system.color.fg.strong`           |
| `colors.blackPepper500`   | `system.color.fg.stronger`         |
| `colors.blueberry400`     | `system.color.fg.primary.default`  |
| `colors.blueberry500`     | `system.color.fg.primary.strong`   |
| `colors.cinnamon500`      | `system.color.fg.critical.default` |
| `colors.frenchVanilla100` | `system.color.fg.inverse`          |
| `colors.licorice100`      | `system.color.fg.disabled`         |
| `colors.licorice200`      | `system.color.fg.muted.soft`       |
| `colors.licorice300`      | `system.color.fg.muted.default`    |
| `colors.licorice400`      | `system.color.fg.muted.strong`     |
| `colors.licorice500`      | `system.color.fg.muted.stronger`   |

##### Border Colors

| Old Token                 | New Token                              |
| ------------------------- | -------------------------------------- |
| `colors.blackPepper400`   | `system.color.border.contrast.default` |
| `colors.blackPepper500`   | `system.color.border.contrast.strong`  |
| `colors.blueberry400`     | `system.color.border.primary.default`  |
| `colors.cantaloupe400`    | `system.color.border.caution.default`  |
| `colors.cantaloupe600`    | `system.color.border.caution.strong`   |
| `colors.cinnamon500`      | `system.color.border.critical.default` |
| `colors.frenchVanilla100` | `system.color.border.inverse`          |
| `colors.licorice100`      | `system.color.border.input.disabled`   |
| `colors.licorice200`      | `system.color.border.input.default`    |
| `colors.licorice500`      | `system.color.border.input.strong`     |
| `colors.soap300`          | `system.color.border.input.inverse`    |
| `colors.soap400`          | `system.color.border.divider`          |
| `colors.soap500`          | `system.color.border.container`        |

##### Other Colors

| Old Token                      | New Token                           |
| ------------------------------ | ----------------------------------- |
| `colors.blackPepper600`        | `system.color.static.black`         |
| `colors.toastedMarshmallow600` | `system.color.static.gold.stronger` |

### Border Radius

- Converts border radius tokens to the new shape tokens
- Transforms `borderRadius.m` to `system.shape.x1`

#### Shape Token Mappings

| Old Token             | New Token            |
| --------------------- | -------------------- |
| `borderRadius.zero`   | `system.shape.zero`  |
| `borderRadius.s`      | `system.shape.half`  |
| `borderRadius.m`      | `system.shape.x1`    |
| `borderRadius.l`      | `system.shape.x2`    |
| `borderRadius.circle` | `system.shape.round` |

### Space

- Converts all space tokens to the new system tokens
- Maps old space values to new scale:

| Old Token    | New Token           |
| ------------ | ------------------- |
| `space.zero` | `system.space.zero` |
| `space.xxxs` | `system.space.x1`   |
| `space.xxs`  | `system.space.x2`   |
| `space.xs`   | `system.space.x3`   |
| `space.s`    | `system.space.x4`   |
| `space.m`    | `system.space.x6`   |
| `space.l`    | `system.space.x8`   |
| `space.xl`   | `system.space.x10`  |
| `space.xxl`  | `system.space.x16`  |
| `space.xxxl` | `system.space.x20`  |

### Typography

- Converts font family tokens to system tokens
- Transforms font size tokens to new system tokens
- Converts font weight tokens to system tokens
- Handles type levels and their properties
- Transforms typography in component styles

#### Font Family Mappings

| Old Token                                | New Token                   |
| ---------------------------------------- | --------------------------- |
| `type.properties.fontFamilies.default`   | `system.fontFamily.default` |
| `type.properties.fontFamilies.monospace` | `system.fontFamily.mono`    |

#### Font Size Mappings

| Old Token                       | New Token                        |
| ------------------------------- | -------------------------------- |
| `type.properties.fontSizes[10]` | `system.fontSize.subtext.small`  |
| `type.properties.fontSizes[12]` | `system.fontSize.subtext.medium` |
| `type.properties.fontSizes[14]` | `system.fontSize.subtext.large`  |
| `type.properties.fontSizes[16]` | `system.fontSize.body.small`     |
| `type.properties.fontSizes[18]` | `system.fontSize.body.medium`    |
| `type.properties.fontSizes[20]` | `system.fontSize.body.large`     |
| `type.properties.fontSizes[24]` | `system.fontSize.heading.small`  |
| `type.properties.fontSizes[28]` | `system.fontSize.heading.medium` |
| `type.properties.fontSizes[32]` | `system.fontSize.heading.large`  |
| `type.properties.fontSizes[40]` | `system.fontSize.title.small`    |
| `type.properties.fontSizes[48]` | `system.fontSize.title.medium`   |
| `type.properties.fontSizes[56]` | `system.fontSize.title.large`    |

#### Font Weight Mappings

| Old Token                             | New Token                   |
| ------------------------------------- | --------------------------- |
| `type.properties.fontWeights.regular` | `system.fontWeight.regular` |
| `type.properties.fontWeights.medium`  | `system.fontWeight.medium`  |
| `type.properties.fontWeights.bold`    | `system.fontWeight.bold`    |

### Depth

- Converts depth tokens to objects with `boxShadow` property
- Handles special case for depth[0] (converts to `boxShadow: "none"`)
- Transforms depth tokens in nested CSS selectors
- Handles depth tokens in component props

## What to Expect

After running the codemod, your code will:

1. Use the new token system with `cssVar` and system tokens
2. Have updated imports for the new token packages
3. Use semantic color tokens instead of direct color values
4. Have consistent spacing and typography using the new scale

## Example Transformations

### Before

```typescript
import {colors} from '@workday/canvas-kit-react/tokens';

const styles = createStyles({
  background: colors.frenchVanilla100,
  color: colors.blueberry400,
});
```

### After

```typescript
import {cssVar} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  background: system.color.bg.default,
  color: system.color.fg.primary.default,
});
```

## Summary

- The codemod handles various edge cases including aliased imports and nested CSS selectors
- It preserves existing code structure while updating token usage
- It adds necessary imports automatically
- It handles template literals and spread operators in CSS objects
- It maintains proper type safety through the transformation process
