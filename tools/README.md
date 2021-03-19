# Supple CSS | tools

Supple's functions and mixins.

Read more about [Supple CSS](https://github.com/supple-css/supple).

## Table of contents

* [Use](#use)
* Modules
  * [Space](#space)
  * [Rem](#rem)
  * [Accessibility](#accessibility)
  * [Typography](#typography)
  * [Responsive](#responsive)
* [Installation](#installation)
* [Testing](#testing)
* [Browser support](#browser-support)


## Use
Supple’s tools are categorised so you only need to `@use` the tools you want:
```scss
@use 'node_modules/@supple-kit/supple-css/tools/space';
@use 'node_modules/@supple-kit/supple-css/tools/responsive';

.your-module {
  @include responsive.mq('lap') {
    margin-inline-start: space.get('tiny');
  }
}
```


## Space
This layer contains everything space related. You can `@use` this tool in your own component like this:
```scss
@use 'node_modules/@supple-kit/supple-css/tools/space';
```

### function: `space.get()`
Returns the spacing value converted to `rem` units. The `$name` must be present in `defaults.$space-factors` and will be multiplied by `defaults.$baseline`.

#### Arguments
| Name | Description | Type | Default       |
| - | - | - | - |
| `$name` | name of space variable | `String` | 'base' |

#### Usage
```scss
.selector {
  margin-inline-start: space.get('tiny');
  margin-inline-end: space.get('large');
}
// with default settings becomes
.selector {
  margin-inline-start: 0.5rem;
  margin-inline-end: 3rem;
}
```

### function: `space.get-factor()`
Returns the spacing-factor value. The `$name` must be present in `defaults.$space-factors`.

#### Arguments
| Name | Description | Type | Default       |
| - | - | - | - |
| `$name` | name of space variable | `String` | 'base' |

#### Usage
```scss
.selector {
  margin-inline-start: calc(#{space.get-factor('small')} * #{defaults.$baseline});
}
// with default settings becomes
.selector {
  margin-inline-start: calc(2 * 8px);
}
```


## Rem
This layer is used to convert any `px` value to `rem`. You can `@use` this tool in your own component like this:

```scss
@use 'node_modules/@supple-kit/supple-css/tools/rem';
```

### function: `rem.convert()`
Converts `px` values to `rem`. If you pass in another format instead of `px` it will gracefully return the original value.

#### Arguments

| Name | Description | Type | Default       |
| - | - | - | - |
| `$value` | value to be converted to `rem` | `Number` | - |

#### Usage
```scss
.selector {
  margin-block-start: rem.convert(24px);
  margin-block: rem.convert(24px 0.5vw);
  margin-inline: rem.convert(24px auto 12px 50%);
}
// with default settings becomes:
.selector {
  margin-block-start: 1.5rem;
  margin-block: 1.5rem 0.5vw;
  margin-inline: 1.5rem auto 0.75rem 50%;
}
```


## Accessibility
This layer contains some accessibility helper mixins. You can `@use` this tool in your own component like this:

```scss
@use 'node_modules/@supple-kit/supple-css/tools/a11y';
```

### Mixin: `a11y.visually-hidden`
Hides an element visually while still allowing the content to be accessible to assistive technology, e.g. screen readers.

#### Usage
```scss
.selector {
  @include a11y.visually-hidden;
}
// becomes:
.selector {
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  block-size: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  inline-size: 1px !important;
}
```


## Typography
This layer contains all the functions & mixins regarding to typography.
You can `@use` this tool in your own component like this:

```scss
@use 'node_modules/@supple-kit/supple-css/tools/typography';
```

### Mixin `typography.font-size`
Generates a rem font-size and a baseline-compatible unitless line-height from a pixel font-size value.

#### Arguments

| Name | Description | Type | Default       |
| - | - | - | - |
| `$font-size` | font size in pixels | `Number` | - |
| `$line-height` | line height, `auto` automatically sets lineheight based on `$baseline` | `any` | auto |
| `$modifier` | numer of `$baseline` you want to top up on the line-height | `Number` | 0 |
| `$important` | sets important keyword | `Bool` | false |

#### Usage
```scss
.selector {
  @include typography.font-size($font-size: 18px);
}
// add 2 lines of `$baseline`
.selector-modifier {
  @include typography.font-size($font-size: 18px, $modifier: +2);
}
// Self define line-height
.selector-line-height {
  @include typography.font-size($font-size: 18px, $line-height: 1);
}

// with default settings becomes:
.selector {
  font-size: 1.125rem;
  line-height: 1.7777777778; // 32px
}
.selector-modifier{
  font-size: 1.125rem;
  line-height: 2.6666666667; // 48px
}
.selector-line-height {
  font-size: 1.125rem;
  line-height: 1; // 18px
}
```


## Responsive
This layer contains all the tools for responsive web design.
You can `@use` this tool in your own component like this:

```scss
@use 'node_modules/@supple-kit/supple-css/tools/responsive';
```

### Mixin: `responsive.mq()`
Apply a media query defined in `defaults.$queries`.

#### Usage
```scss
.selector {
  @include responsive.mq('lap') {
    outline: 1px solid #ff0000;
  }
}
// with default settings becomes:
@media (min-width: 40em) {
  .selector {
    margin-block-end: 0 !important;
  }
}
```

### function: `responsive.lock()`
Perfect smooth scaling between any 2 values over any viewport range.
The property will start scaling and stop scaling exactly where you want.

#### Arguments

| Name | Description | Type | Default       |
| - | - | - | - |
| `$size-min` | Minimum size in pixels | `Number` | 16px |
| `$size-max` | Maximum size in pixels | `Number` | 20px |
| `$min-bp` | Minimum breakpoint name  | `String` | lap |
| `$max-bp` | Minimum breakpoint name  | `String` | desk |

#### Usage
```scss
.selector {
  font-size: responsive.lock(18px, 24px);
}
// You can also redefine the min- and max breakpoints like this
.selector-defined-breakpoints {
  font-size: responsive.lock(20px, 30px, desk, wall);
}

// with default settings becomes:
.selector {
  font-size: clamp(1.125rem, .375rem + 1.875vw, 1.5rem);
}

.selector-defined-breakpoints {
  font-size: clamp(1.25rem, -.625rem + 3.125vw, 1.875rem);
}
```

### Mixin: `responsive.in-query()`
A little helper mixin to quickly create responsive variants of a certain selector.
The mixin's `@content` will be also applied to the parent selector.

#### Arguments

| Name | Description | Type | Default       |
| - | - | - | - |
| `$queries` | list of breakpoints | `List` | - |


#### Usage
```scss
$YOURMODULE-in-query: (lap, desk);
.your-selector {
  @include responsive.in-query($YOURMODULE-in-query) {
    outline: 1px solid #ff0000;
  }
}
// becomes:
@media (min-width: 40em) {
  .your-selector\@lap {
    outline: 1px solid #ff0000;
  }
}
@media (min-width: 60em) {
  .your-selector\@desk {
    outline: 1px solid #ff0000;
  }
}
```


## Installation
Make sure you've installed/downloaded the Supple CSS library: [Supple CSS installation](../../#installation)


## Browser support

* Chromium-based browsers (Chrome, Edge, Brave, Opera)
* WebKit-based browsers (Safari, iOS Safari)
* Firefox (Gecko)
