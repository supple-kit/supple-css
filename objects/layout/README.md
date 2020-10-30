# Supple CSS | objects.layout

Layout makes use of `flexbox` & Custom Properties to provide for a flexible, fluid & extensible layout system. You can horizontally(on the inline axis) arrange items or even use it as a full fledged  traditional grid system.

If you want to arrange items over 2 dimensions (horizontal & vertical) we recommend using [objects.mesh](../mesh).

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
* Fluid layout.
* Intelligent cell wrapping.
* Evenly fill cell spacing.
* Equal height columns.
* Horizontal/vertical centering of cells.
* Cell width is controlled independently of layout gap.
* Infinite nesting.


## Use

A simple layout is easy to create. A layout container can have any number of child cells. When used with `.o-layout--fill` space is evenly distributed without need for `--colspan` or sizing utilities.

```html
<div class="o-layout  o-layout--fill  o-layout--gap-base">
  <div><!-- content --></div>
  <div><!-- content --></div>
  <div><!-- content --></div>
  <div><!-- content --></div>
</div>
```

For more granular control over layout make use of modifiers, custom properties or sizing utilities.

### Modifiers on `o-layout`

```html
<div class="o-layout  [o-layout--align-inline-center  |  o-layout--align-inline-end  |  o-layout--align-block-center  |  o-layout--align-block-end  |  o-layout--fill  |  o-layout--fit  |  o-layout--stretch  |  o-layout--gap-base]">
  <div><!-- content --></div>
  <div><!-- content --></div>
  <div><!-- content --></div>
  <div><!-- content --></div>
</div>
```

### Elements

```html
<div class="o-layout">
  <div class="o-layout__fit">Fit to content</div>
  <div class="o-layout__fill">Take up remaining space</div>
  <div class="o-layout__align-inline-center">Center align a single cell</div>
</div>
```

### Works with `u-columns-X` on `o-layout`

```html
<div class="o-layout  u-columns-10">
  <div class="u-colspan-5">Spans 5 of 10 columns</div>
</div>
```

### Works with `u-colspan-X` on the flex item

```html
<div class="o-layout">
  <div class="u-colspan-5">Spans 5 of 12 columns</div>
</div>
```

### Works with `u-offset-X` on the flex item

```html
<div class="o-layout">
  <div class="u-colspan-8  u-offset-4">Offsets 4 of 12 columns</div>
</div>
```

### Custom properties

```html
<div class="o-layout" style="--columns: 10; --gap: 3rem;">
  <div style="--colspan: 4;">
    Spans 4 of 10 columns
  </div>

  <div style="--colspan: 1;">
    Spans 1 of 10 columns
  </div>

  <div style="--colspan: 3;">
    Spans 3 of 10 columns
  </div>

  <div style="--colspan: 2; --offset: 2;">
    Spans 2 of 10 columns and offsets 2 of 10 columns
  </div>
</div>
```

**Note** Of course this specific use of custom properties(through inline styles) is pure for example purposes. It is advised to overwrite the custom properties in your own components instead of inline styles.

### Nesting

You can nest layouts in any context. Keep in mind that the dimensions will be relative to the width of `o-layout`, and not the width of the whole application.

```html
<div class="o-layout">
  <div class="o-layout__fit">
    <div class="o-layout">
      <div><!-- content --></div>
    </div>
  </div>
</div>
```

### responsive elements
When you set breakpoints in `$fill-in-breakpoint` or `$fit-in-breakpoint` you can use them like this:

```html
<div class="o-layout">
  <div class="o-layout__fit@from-lap">
    100% and from lap breakpoint it will fit to content
  </div>
  <div class="o-layout__fill@from-lap">
    100% and from lap breakpoint it will fill remaining space
  </div>
</div>
```


## Available classes

**On the `.o-layout` block**

* `.o-layout`: core layout block
* `.o-layout--align-inline-center`: center align _all_ layout cells over the inline axis
* `.o-layout--align-inline-end`: align all layout cells to the end of the inline axis
* `.o-layout--align-block-center`: center-align layout cells on the block axis
* `.o-layout--align-block-end`: end-align layout cells on the block axis
* `.o-layout--reverse`: reverse all cells in order
* `.o-layout--fill`: evenly distribute space amongst all child cells
* `.o-layout--fit`: fit all cells to their content
* `.o-layout--stretch`: All cells match the size of tallest cell in a row on the block axis
* `.o-layout--gap-[SPACE]`: adds a base gutter between cells

**On the flex item**
* `.o-layout__align-inline-center`: Center one cell on the inline axis
* `.o-layout__fit`: Make a cell shrink wrap its content
* `.o-layout__fill`: Make a cell fill the remaining space.
* `.o-layout__[fit|fill]@[from|until]-[BREAKPOINT-NAME]`: applies `fit` or `fill` at the given breakpoint. (available in `$[fit|fill]-in-breakpoint` SCSS setting)


## Configurable variables
There are multiple ways to configure the layout object. The Custom properties are calculated at run-time, the SCSS variables will allow you to change things at build-time.

### Custom properties

**On the `.o-layout` block**

* `--columns`: The number of columns you want to have, defaults to `12`
* `--gap`: The width of the gutter applied between the cells, defaults to `0`
* `--layout-gap`: Actual gap variable to be used when in conflict with other objects, defaults to `var(--gap)`.

**On the flex item element**

* `--colspan`: The amount of columns this cell will span, defaults to `--columns`
* `--offset`: The amount of columns this cell will offset, defaults to `0`

### SCSS variables

* `$gaps`: a list of gaps where possible `.o-layout--gap-X` are generated from, defaults to `('base')`
* `$fit-in-breakpoint`: a list of breakpoints where `o-layout__fit` is generated for,  defaults to `()`
* `$fill-in-breakpoint`: a list of breakpoints where `o-layout__fill` is generated for,  defaults to `()`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/objects/layout' with (
  $fit-in-breakpoint: (lap, desk),
  $gaps: (
    'base',
    'tiny',
  ),
);
```
or
```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/@supple-kit/supple-css/objects/layout/variables' with (
  $fit-in-breakpoint: (lap, desk),
  $gaps: (
    'tiny',
    'huge',
  ),
);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/objects/layout';
```


## Installation
Make sure you've installed/downloaded the Supple CSS library: [Supple CSS installation](../../#installation)


## Testing
Basic visual tests are in [test.html](./test.html).


## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox (latest)
* Safari (latest)
* Edge (latest chromium based)
* iOS (latest)
