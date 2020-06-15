# Supple CSS | settings.defaults

This file contains the supple default variables, without this file the framework won't work.

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
@use '~supple/lib/settings/defaults' with (
  $columns: 10,
  $baseline: 6px,
  $space-factor-large: 10,
);
```

And when you need the variables in your own module you can use them like this:

```scss
// Use defaults and make variables available through `defaults.` prefix.
@use '~supple/lib/settings/defaults';

.your-module {
  --columns: #{defaults.$columns};
}

// or in combination with tools

// Use defaults and make variables available through `defaults.` prefix.
@use '~supple/lib/settings/defaults';
// Use tools and make tools available through the `tools.` prefix.
@use '~supple/lib/tools';

.your-module__element {
  @include tools.mixins-rem(margin-inline-start, defaults.$columns);
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

### Spacing
The following variables multiply the `$baseline` to new spacing variables for more consistency and transparency.

**example:**
```scss
$space-factor-base: 4; // 4*8px = 32px
$space-factor-tiny: 2; // 2*8px = 16px
$space-factor-small: 3; // 3*8px = 24px
$space-factor-large: 6; // 6*8px = 48px
$space-factor-huge: 12; // 12*8px = 96px
```

**defaults to:**
```scss
$space-factor-base: 3 !default; // 24px
$space-factor-tiny: 1 !default; // 8px
$space-factor-small: 2 !default; // 16px
$space-factor-large: 6 !default; // 48px
$space-factor-huge: 12 !default; // 96px
```

These multiplication factors are converted under the hood to our `$space-X` variables:

```scss
$space-base: $baseline * $space-factor-base;
$space-tiny: $baseline * $space-factor-tiny;
$space-small: $baseline * $space-factor-small;
$space-large: $baseline * $space-factor-large;
$space-huge: $baseline * $space-factor-huge;
```
These variables are used throughout supple to ensure a consistent vertical rhythm. You can also use these variables inside your own modules.

**Note** these spacing variables are not directly overwritable, so you have to alter the `$space-factor-X` variables to change the `$space-X` variables.

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
$line-height: $space-base !default; // 3 * 8px = 24px
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
// Responsive mode
$responsive: true;

// Define the breakpoint from $breakpoints that should be used as the target width for
// the fixed-width layout (i.e. when $responsive is set to 'false') in a old-ie.scss.
// This variable is also used in `objects.retain` in the `wall` modifier
$static-breakpoint-size: 1280px;

// the name of the static breakpoint
$static-breakpoint-name: wall;

// Breakpoint list
// Name your breakpoints in a way that creates a ubiquitous language across team members.
// It will improve communication between stakeholders, designers, developers, and testers.
$breakpoints: (
  palm: 320px,
  lap: 640px,
  desk: 960px,
  $static-breakpoint-name: $static-breakpoint-size
);

// Show breakpoints in the top right corner, for debug purposes
$show-breakpoints: (lap, wall);

// Customize the media type
$media-type: all;
```

**Note** Supple's responsive system is underpinned by [Sass-MQ](https://sass-mq.github.io/sass-mq/). Supple only provides mixin wrappers and config options which in turn are being fed directly to Sass-MQ. If you have any problems, please raise an issue [here](https://github.com/sass-mq/sass-mq/issues).


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


## Installation
Make sure you've installed/downloaded the Supple CSS library:

* [npm](https://www.npmjs.com/package/supple): `npm install supple`
* Download: [zip](https://github.com/supple-css/supple/releases/latest)


## Testing
Basic visual tests are in [test.html](./test.html).


## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox (latest)
* Safari (latest)
* Edge (latest chromium based)
* iOS (latest)
