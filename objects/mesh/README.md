# Supple CSS | objects.mesh

Mesh makes use of `grid` & Custom Properties to provide for a flexible, fluid & extensible grid system. In a declaritive way you can create a variety of different grid systems for every need.

If you want to arrange items over 1 dimension (horizontal) I recommend using [objects.layout](../layout).

Read more about [Supple CSS](https://github.com/supple-css/supple).

## Table of contents

* [Features](#features)
* [Use](#use)
* [Available classes](#available-classes)
* [Configurable variables](#configurable-variables)
* [Installation](#installation)
* [Testing](#testing)
* [Browser support](#browser-support)

## Features

* Configurable with custom properties.
* Fluid grid system.
* Intelligent cell wrapping.
* Evenly fill cell spacing.
* Fluid width columns that break into more or less columns as space is available.
* Masonry layout


## Use

A simple mesh is easy to create. A mesh container can have any number of child cells.

```html
<div class="o-mesh  o-mesh--gap-base">
  <div><!-- content --></div>
  <div><!-- content --></div>
  <div><!-- content --></div>
  <div><!-- content --></div>
</div>
```

For more granular control over mesh make use of modifiers, custom properties or sizing utilities.

### Modifiers on `o-mesh`

```html
<div class="o-mesh  [o-mesh--flow  |  o-mesh--dense  |  o-mesh--gap-base]">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

### Works with `u-columns-X` on `o-mesh`

```html
<div class="o-mesh  u-columns-10">
  <div class="u-colspan-5">Spans 5 of 10 columns</div>
</div>
```

### Elements

```html
<div class="o-mesh">
  <div class="o-mesh__row">Spans a full row</div>
</div>
```

### Works with `u-colspan-X` & `u-colstart-X` on grid item

```html
<div class="o-mesh">
  <div class="u-colspan-5  u-colstart-2">Spans 5 of 12 columns and starts at column 2</div>
</div>
```

### Custom properties

```html
<div class="o-mesh" style="--columns: 10; --gap: 3rem;">
  <div style="--colspan: 4;">
    Spans 4 of 10 columns
  </div>

  <div style="--colspan: 1; --colstart: 5;">
    Spans 1 of 10 columns starts at column 5
  </div>

  <div style="--colspan: 3;">
    Spans 3 of 10 columns
  </div>

  <div style="--colspan: 2;">
    Spans 2 of 10 columns
  </div>
</div>
```

**Note** Of course this specific use of custom properties(through inline styles) is pure for example purposes. It is advised to overwrite the custom properties in your own components instead of inline styles.

### Nesting

You can nest mesh in any context. Keep in mind that the dimensions will be relative to the width of `o-mesh`, and not the width of the whole application.

```html
<div class="o-mesh">
  <div class="[ o-mesh ]  [ u-colspan-X ]">
    <div class="u-colspan-X">
    </div>
  </div>
</div>
```

### responsive modifiers
When you set breakpoints in `$row-in-query` you can use it like this:

```html
<div class="o-mesh">
  <div class="o-mesh__row@lap">
    spans 1 column and from lap breakpoint it will span 12 columns (full row).
  </div>
</div>
```


## Available classes

**On the `.o-mesh` block**

* `.o-mesh`: core mesh block
* `.o-mesh--flow`: Fluid width columns that break into more or less columns as space is available, with no media queries.
* `.o-mesh--dense`: Attempt to fill in holes earlier in the grid if smaller items come up later.
* `.o-mesh--gap-base`: adds a base gutter between cells

**On the grid item element**
* `.o-mesh__row`: Spans a full row
* `.o-mesh__row@[QUERY-NAME]`: Spans full row on a certain media query (available in `$row-in-query` SCSS setting)


## Configurable variables
There are multiple ways to configure the mesh object. The Custom properties are calculated at run-time, the SCSS variables will allow you to change things at build-time.

### Custom properties

**On the `.o-mesh` block**

* `--columns`: The number of columns you want to have, defaults to `12`
* `--gap`: The width of the gutter applied between the cells, defaults to `0`
* `--layout-gap`: Actual gap variable to be used when in conflict with other objects, defaults to `var(--gap)`.
* `--block-gap`: The space of the gutter applied between the cells on the block axis, defaults to `var(--layout-gap)`
* `--inline-gap`: The space of the gutter applied between the cells on the inline axis, defaults to `var(--layout-gap)`

**On the `.o-mesh--flow` modifier**

* `--min-inline-size`: minimum size that a cell needs to have

**On the grid item element**

* `--colspan`: The amount of columns this cell will span, defaults to `--columns`
* `--colstart`: Startpoint of the cell

### SCSS variables

* `$gaps`: a list of gaps where possible `.o-mesh--gap-X` are generated from, defaults to `('base')`
* `$row-in-query`: a list of queries where `o-mesh__row` is generated for,  defaults to `()`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/objects/mesh' with (
  $row-in-query: (lap, desk),
  $gaps: (
    'base',
    'tiny',
  ),
);
```
or
```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/@supple-kit/supple-css/objects/mesh/variables' with (
  $row-in-query: (lap, desk),
  $gaps: (
    'tiny',
    'huge',
  ),
);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/objects/mesh';
```


## Installation
Make sure you've installed/downloaded the Supple CSS library: [Supple CSS installation](../../#installation)


## Testing
Basic visual tests are in [test.html](https://supple-kit.github.io/supple-css/objects/mesh/test.html).


## Browser support

* Chromium-based browsers (Chrome, Edge, Brave, Opera)
* WebKit-based browsers (Safari, iOS Safari)
* Firefox (Gecko)
