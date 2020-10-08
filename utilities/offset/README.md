# Supple CSS | utilities.offset

Utility which provides a offset custom property for use in objects or components which can handle those offsets eg. `object.layout`.

Read more about [Supple CSS](https://github.com/supple-css/supple).

## Table of contents

* [Features](#features)
* [Use](#use)
* [Available classes](#available-classes)
* [Configurable variables](#configurable-variables)
* [Installation](#installation)
* [Browser support](#browser-support)

## Features

* Easy & flexible offsets in your objects & components
* Works nicely with `objects.layout`

## Use

```html
<div class="o-layout">
  <div class="o-layout__cell  u-offset-3">
    starts a column 3
  </div>
  <div class="o-layout__cell  u-offset-7">
    starts a column 7
  </div>
</div>
```


## Available classes
By default we generate classes for 12 columns but it can be configured with the `$columns` setting.

* `.u-offset-X`, spans over the designated number of columns
* `.u-offset-X[from|until]-[BREAKPOINT-NAME]`: applies offset at the given breakpoint. (available in `$in-breakpoint` SCSS setting)


## Configurable variables


### SCSS variables

* `$columns`, number of columns we generate classes for, defaults to `defaults.$columns`
* `$in-breakpoint`: a list of breakpoints where `.u-offset-X@[from|until]-[BREAKPOINT-NAME]` is generated for, defaults to: `()`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/offset' with (
  $columns: 10,
  $in-breakpoint: (lap, desk),
);
```
or
```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/offset/variables' with (
  $in-breakpoint: (lap, desk),
);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/offset';
```


## Installation
Make sure you've installed/downloaded the Supple CSS library: [Supple CSS installation](../../#installation)


## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox (latest)
* Safari (latest)
* Edge (latest chromium based)
* iOS (latest)
