# Supple CSS | utilities.colspan

Utility which provides a colspan custom property for use in objects or components which can handle those colspans eg. `object.layout` or `object.mesh`.

Read more about [Supple CSS](https://github.com/supple-css/supple).

## Table of contents

* [Features](#features)
* [Use](#use)
* [Available classes](#available-classes)
* [Configurable variables](#configurable-variables)
* [Installation](#installation)
* [Browser support](#browser-support)

## Features

* Easy & flexible colspans in your objects & components
* Works nicely with `objects.layout` and `objects.mesh`

## Use

```html
<div class="o-layout">
  <div class="o-layout__cell  u-colspan-7">
    spans 7 of 12 columns
  </div>
  <div class="o-layout__cell  u-colspan-5">
    spans 5 of 12 columns
  </div>
</div>
```

```html
<div class="o-mesh">
  <div class="o-mesh__cell  u-colspan-7">
    spans 7 of 12 columns
  </div>
  <div class="o-mesh__cell  u-colspan-5">
    spans 5 of 12 columns
  </div>
</div>
```


## Available classes
By default we generate classes for 12 columns but it can be configured with the `$columns` setting.

* `.u-colspan-X`, spans over the designated number of columns
* `.u-colspan-X[from|until]-[BREAKPOINT-NAME]`: applies colspan at the given breakpoint. (available in `$in-breakpoint` SCSS setting)


## Configurable variables


### SCSS variables

* `$columns`, number of columns we generate classes for, defaults to `defaults.$columns`
* `$in-breakpoint`: a list of breakpoints where `.u-colspan-X@[from|until]-[BREAKPOINT-NAME]` is generated for, defaults to: `()`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/supple/utilities/colspan' with (
  $columns: 10,
  $in-breakpoint: (lap, desk),
);
```
or
```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/supple/utilities/colspan/variables' with (
  $in-breakpoint: (lap, desk),
);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/supple/utilities/colspan';
```


## Installation
Make sure you've installed/downloaded the Supple CSS library:

* [npm](https://www.npmjs.com/package/supple): `npm install supple`
* Download: [zip](https://github.com/supple-css/supple/releases/latest)


## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox (latest)
* Safari (latest)
* Edge (latest chromium based)
* iOS (latest)
