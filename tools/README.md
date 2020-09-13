# Supple CSS | tools

Supple's functions and mixins.

Read more about [Supple CSS](https://github.com/supple-css/supple).

## Table of contents

* [Use](#use)
* [Available functions](#available-functions)
* [Available mixins](#available-mixins)
* [Installation](#installation)
* [Testing](#testing)
* [Browser support](#browser-support)

## Use

```scss
@use 'node_modules/supple/tools/functions';
@use 'node_modules/supple/tools/mixins';

.your-module {
  @include mixins.mq($from: name) {
    margin-inline-start: functions.value-to-rem(24px);
  }
}
```
Or alternatively you can just include `_tools.scss` and use it like this:
```scss
@use 'node_modules/supple/tools';

.your-module {
  @include tools.mixins-mq($from: name) {
    margin-inline-start: tools.functions-value-to-rem(24px);
  }
}
```

## Available functions

### `value-to-rem`
Converts `px` values to `rem`. If you pass in another format instead of `px` it will gracefully return the original value.

#### Arguments

| Name | Description | Type | Default       |
| - | - | - | - |
| `$value` | a pixel value | `Number` | - |
| `$warn` | Warn about other formats being passed | `px` | - |


#### Usage
```scss
.selector {
  margin-inline-start: functions.value-to-rem(12px);
  margin-inline-end: functions.value-to-rem(auto);
  padding-block-end: functions.value-to-rem(100%, true); // $warn = true
}
// with default settings becomes
.selector {
  margin-inline-start: 0.75rem;
  margin-inline-end: auto;
  padding-block-end: 100%; // Warning: You’ve passed in a `$value` which is not in the `px` format. I’ve returned your `100%` unmodified.
}
```

### `strip-units`
Remove the units from a given value.

#### Arguments

| Name | Description | Type | Default       |
| - | - | - | - |
| `$value` | any value | `Number` | - |


#### Usage
```scss
@use 'node_modules/supple/settings/defaults';

.selector::after {
  content: #{tools.strip-units(defaults.$space-base)};
}
// with default settings becomes:
.selector::after {
  content: 24;
}
```

## Available mixins

### `rem`
Converts a set of values to rem values

#### Arguments

| Name | Description | Type | Default       |
| - | - | - | - |
| `$property` | property name | string | - |
| `$value` | value to be converted to `rem` | `Number` | - |
| `$append` | append extra information to the value | string | - |


#### Usage
```scss
@use 'node_modules/supple/settings/defaults';

.selector {
  @include tools.mixins-rem(margin-block-start, defaults.$space-base);
  @include tools.mixins-rem(margin-block, defaults.$space-base 0.5vw);
  @include tools.mixins-rem(margin-inline, defaults.$space-base auto, !important);
}
// with default settings becomes:
.selector {
  margin-block-start: 24px;
  margin-block: 24px 0.5vw;
  margin-inline: 24px auto !important;
}
```


### `visually-hidden`
Hides an element visually while still allowing the content to be accessible to assistive technology, e.g. screen readers.

#### Usage
```scss
.selector {
  @include mixins.visually-hidden;
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

### `render-module`
Removes the `margin-bottom` from the last childs of a module.
As per: http://css-tricks.com/spacing-the-bottom-of-modules/

#### Arguments

| Name | Description | Type | Default       |
| - | - | - | - |
| `$depth` | nesting depth of `:last-child` | `Number` | 2 |


#### Usage
```scss
.selector {
  @include mixins.render-module(4);
}
// becomes:
.selector > :last-child,
.selector > :last-child > :last-child,
.selector > :last-child > :last-child > :last-child,
.selector > :last-child > :last-child > :last-child > :last-child {
  margin-block-end: 0 !important;
}
```


### `mq`
Supples wrapper for the [sass-mq mq mixin](https://sass-mq.github.io/sass-mq/#undefined-mixin-mq). For documentation please refer to the [sass-mq docs](https://sass-mq.github.io/sass-mq).

#### Usage
```scss
.selector {
  @include mixins.mq($from: lap) {
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

### `in-breakpoint`
A little helper mixin to quickly create responsive variants of a certain selector.

#### Arguments

| Name | Description | Type | Default       |
| - | - | - | - |
| `$breakpoints` | list of breakpoints | `Map` | - |
| `$selector` | css selector | `string` | - |


#### Usage
```scss
$YOURMODULE-in-breakpoint: (
  from: lap desk,
  until: desk,
);
@include in-breakpoint($YOURMODULE-in-breakpoint, '.your-selector') {
  outline: 1px solid #ff0000;
}
// becomes:
@media (min-width: 40em) {
  .your-selector\@from-lap {
    outline: qpx solid #ff0000;
  }
}
@media (min-width: 60em) {
  .your-selector\@from-desk {
    outline: qpx solid #ff0000;
  }
}
@media (max-width: 59.99em) {
  .your-selector\@until-desk {
    outline: qpx solid #ff0000;
  }
}
```

### `font-size`
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
  @include mixins.font-size($font-size: 18px);
}
// add 2 lines of `$baseline`
.selector-modifier {
  @include mixins.font-size($font-size: 18px, $modifier: +2);
}
// Self define line-height
.selector-line-height {
  @include mixins.font-size($font-size: 18px, $line-height: 1);
}

// with default settings becomes:
.selector {
  font-size: 1.125rem;
  line-height: 1.7777777778; // 24px
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

### `css-lock`
Perfect smooth scaling between any 2 values over any viewport range.
The property will start scaling and stop scaling exactly where you want.

#### Arguments

| Name | Description | Type | Default       |
| - | - | - | - |
| `$property` | property name | `String` | 'font-size' |
| `$size-min` | Minimum size in pixels | `Number` | 16px |
| `$size-max` | Maximum size in pixels | `Number` | 20px |
| `$min-bp` | Minimum breakpoint name  | `String` | lap |
| `$max-bp` | Minimum breakpoint name  | `String` | desk |

#### Usage
```scss
.selector {
  @include css-lock(font-size, 18px, 24px);
}
// You can also redefine the min- and max breakpoints like this
.selector-defined-breakpoints {
  @include mixins.css-lock(font-size, 20px, 30px, desk, wall);
}

// with default settings becomes:
.selector {
  font-size: 1.125rem;
}
@media (min-width: 40em) {
  .selector {
    font-size: calc(1.125rem + 0.375 * (100vw - 40rem) / 20);
  }
}
@media (min-width: 60em) {
  .selector {
    font-size: 1.5rem;
  }
}

.selector-defined-breakpoints {
  font-size: 1.25rem;
}
@media (min-width: 60em) {
  .selector-defined-breakpoints {
    font-size: calc(1.25rem + 0.625 * (100vw - 60rem) / 20);
  }
}
@media (min-width: 80em) {
  .selector-defined-breakpoints {
    font-size: 1.875rem;
  }
}
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
