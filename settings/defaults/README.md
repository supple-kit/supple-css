# Supple CSS | settings.defaults

This file contains the Supple default variables, without this file the framework won't work.

Read more about [Supple CSS](https://github.com/supple-css/supple).

## Table of contents

* [Use](#use)
* [Configurable SCSS variables](#configurable-scss-variables)
* [Installation](#installation)
* [Testing](#testing)
* [Browser support](#browser-support)

## Use
You can override the default variables like this:

```scss
// in you own settings file eg. `_vars.scss` or from you manifest file eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/settings/defaults' with (
  $columns: 10,
  $baseline: 6px,
  $space-factors: (
    'base': 3,
    'tiny': 1,
  ),
);
```

And when you need the variables in your own module you can use them like this:

```scss
// Use defaults and make variables available through `defaults.` prefix.
@use 'node_modules/@supple-kit/supple-css/settings/defaults';

.your-module {
  --columns: #{defaults.$columns};
}

// or in combination with tools

// Use defaults and make variables available through `defaults.` prefix.
@use 'node_modules/@supple-kit/supple-css/settings/defaults';
// Use tools and make tools available through the `tools.` prefix.
@use 'node_modules/@supple-kit/supple-css/tools/rem';

.your-module__element {
  @include rem.convert(margin-inline-start, defaults.$baseline);
}
```


## Configurable SCSS variables

### `$baseline`
By default supple creates an 8 point baseline to create vertical (and horizontal) rhythm. Everything is spaced by this baseline: margins, paddings and gaps in `objects.mesh` and `objects.layout`. More information:
* [https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632](https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632)
* [https://medium.freecodecamp.org/8-point-grid-typography-on-the-web-be5dc97db6bc](https://medium.freecodecamp.org/8-point-grid-typography-on-the-web-be5dc97db6bc)

**example:**
```scss
$baseline: 6px; // Creates 6px baseline
```

**defaults to:**
```scss
$baseline: 8px !default;
```

### `$space-factors`
The following map keys multiply the `$baseline` to consistent and transparent spacing rules.

**example:**
```scss
$space-factors: (
  'base': 4, // 4*8px = 32px
  'tiny': 2, // 2*8px = 16px
  'small': 3, // 3*8px = 24px
  'large': 6, // 6*8px = 48px
  'huge': 12, // 12*8px = 96px
);
```

**defaults to:**
```scss
$space-factors: (
  'tiny': 1, // 1*8px = 8px
  'small': 2, // 2*8px = 16px
  'base': 3, // 3*8px = 24px
  'large': 6, // 6*8px = 48px
  'huge': 12, // 12*8px = 96px
) !default;
```

These multiplication factors are converted to a `rem` value and available through our `space.get()` function:

```scss
@use 'node_modules/@supple-kit/supple-css/tools/space';

.your-selector {
  margin-block-end: space.get('base');
}
```
This map is used throughout supple to ensure a consistent vertical rhythm. You can also use `space.get()` inside your own modules.

**Note** `$space-factors` needs to contain atleast one entry named 'base' since supple-css internally relies on this.

### Typography
You can set the base font-size and line-height of the application:

**example:**
```scss
$font-size: 20px;
$line-height: 4 * $baseline; // 4 * 8px = 32px
```

**defaults to:**
```scss
$font-size: 16px !default;
$line-height: map.get($space-factors, 'base') * $baseline !default; // 3 * 8px = 24px
```

### Grid
You can set a global `$columns` variable which is used in `objects.layout`, `objects.mesh`, `utilities.colspan` & `utilities.colstart`.

**example:**
```scss
$columns: 24;
```

**defaults to:**
```scss
$columns: 12;
```

**Note** this is only a global columns setting shared across modules, you can override module specific columns in their own `_variable.scss` file.

### Responsive
Working with breakpoints is pretty straightforward. You can add as many breakpoints as you want. You can show the breakpoints for debug purposes. And even disable responsive mode altogether.

**example:**
```scss
// Breakpoint list
// Name your breakpoints in a way that creates a ubiquitous language across team members.
// It will improve communication between stakeholders, designers, developers, and testers.
$breakpoints: (
  palm: 320px,
  lap: 640px,
  desk: 960px,
  wall: 1280px
);


// Query list, which is used by the `responsive.mq()` mixin.
// Name your queries in a way that creates a ubiquitous language across team members.
// You can reference `$breakpoints` by name or you can enter a `px` or `em` value
// You can create complex media queries like this:
$queries: (
  // min-width
  palm: palm,
  lap: lap,
  desk: desk,
  wall: wall,
  // max-width
  until-desk: (
    max: desk
  ),
  // min-width & max-width
  lap-until-desk: (
    min: lap,
    max: desk
  ),
  // min-width & max-width with generic px value
  lap-until-generic: (
    min-width: lap,
    max-width: 1024px
  ),
  // You can also apply height queries
  height-large-until-huge: (
    min-height: 640px,
    max-height: 1024px
  )
);

```

### Namespace
By default all responsive classes are prefixed with `@`. This way it is clear that, for example, `u-colspan-8@from-palm` is a responsive modifier. You can however change the `@` to anything you like:

**Example:**
```scss
$responsive-modifier: '--';
```

**Defaults:**
```scss
$responsive-modifier: unquote('\\@') !default;
```


### Technology
Sometimes 3rd party technologies don't play nice with some supple modules.
The settings you find in this category enables us to use supple with technologies like css-modules.

**Example:**
```scss
$css-modules: true;
```

**Defaults:**
```scss
$css-modules: false !default;
```


## Installation
Make sure you've installed/downloaded the Supple CSS library: [Supple CSS installation](../../#installation)


## Browser support

* Chromium-based browsers (Chrome, Edge, Brave, Opera)
* WebKit-based browsers (Safari, iOS Safari)
* Firefox (Gecko)
