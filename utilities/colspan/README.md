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
  <div class="u-colspan-7">
    spans 7 of 12 columns
  </div>
  <div class="u-colspan-5">
    spans 5 of 12 columns
  </div>
</div>
```

```html
<div class="o-mesh">
  <div class="u-colspan-7">
    spans 7 of 12 columns
  </div>
  <div class="u-colspan-5">
    spans 5 of 12 columns
  </div>
</div>
```


## Available classes
By default we generate classes for 12 columns but it can be configured with the `$columns` setting.

* `.u-colspan-X`, spans over the designated number of columns
* `.u-colspan-X@[QUERY-NAME]`: applies colspan at the given media query. (available in `$in-query` SCSS setting)


## Configurable variables


### SCSS variables

* `$columns`, number of columns we generate classes for, defaults to `defaults.$columns`
* `$in-query`: a list of queries where `.u-colspan-X@[QUERY-NAME]` is generated for, defaults to: `()`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/colspan' with (
  $columns: 10,
  $in-query: (lap, desk),
);
```
or
```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/colspan/variables' with (
  $in-query: (lap, desk),
);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/colspan';
```


## Installation
Make sure you've installed/downloaded the Supple CSS library: [Supple CSS installation](../../#installation)


## Browser support

* Chromium-based browsers (Chrome, Edge, Brave, Opera)
* WebKit-based browsers (Safari, iOS Safari)
* Firefox (Gecko)
