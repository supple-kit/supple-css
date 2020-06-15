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
@use '~supple/lib/tools/functions';
@use '~supple/lib/tools/mixins';

.your-module {
  @include mixins.mq($from: name) {
    margin-inline-start: functions.value-to-rem(24px);
  }
}
```
Or alternatively you can just include `_tools.scss` and use it like this:
```scss
@use '~supple/lib/tools';

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
| `$value` | a pixel value | `px` | - |
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
| `$value` | any value | - | - |


#### Usage
```scss
@use '~supple/lib/settings/defaults';

.selector::after {
  content: #{tools.strip-units(defaults.$space-base)};
}
// with default settings becomes:
.selector::after {
  content: 24;
}
```

## Available mixins



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
