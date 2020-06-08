# Supple CSS | objects.layout

Layout makes use of `flexbox` & Custom Properties to provide for a flexible, fluid & extensible layout system. You can horizontally(on the inline axis) arrange items or even use it as a full fledged  traditional grid system.

If you want to arrange items over 2 dimensions (horizontal & vertical) we recommend using the [mesh object](../mesh).

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

A simple layout is easy to create. A layout container can have any number of child cells. When used with `.o-layout--fill` space is evenly distributed without need for `--o-layout-colspan` or sizing utilities.

**Note** `.o-layout` only accepts `.o-layout__cell` as direct descendants. This keeps our layout nicely separated from other components.

```html
<div class="o-layout o-layout--fill  o-layout--gap-base">
  <div class="o-layout__cell"><!-- content --></div>
  <div class="o-layout__cell"><!-- content --></div>
  <div class="o-layout__cell"><!-- content --></div>
  <div class="o-layout__cell"><!-- content --></div>
</div>
```

For more granular control over layout make use of modifiers, custom properties or sizing utilities.

### Modifiers on `o-layout`

```html
<div class="o-layout  [o-layout--align-inline-center  |  o-layout--align-inline-end  |  o-layout--align-block-center  |  o-layout--align-block-end  |  o-layout--fill  |  o-layout--fit  |  o-layout--equal-block-size  |  o-layout--gap-base  |  o-layout--gap-tiny  |  o-layout--gap-small  |  o-layout--gap-large  |  o-layout--gap-huge]">
  <div class="o-layout__cell"></div>
  <div class="o-layout__cell"></div>
  <div class="o-layout__cell"></div>
  <div class="o-layout__cell"></div>
</div>
```

### Modifiers on `o-layout__cell`

```html
<div class="o-layout">
  <div class="o-layout__cell  o-layout__cell--fit">Fit to content</div>
  <div class="o-layout__cell  o-layout__cell--fill">Take up remaining space</div>
  <div class="o-layout__cell  o-layout__cell--align-inline-center">Center align a single cell</div>
</div>
```

### Custom properties

```html
<div style="--o-layout-columns: 10; --o-layout-gap: 3rem;">
  <div class="o-layout__cell" style="--o-layout-colspan: 4;">
    Spans 4 of 10 columns
  </div>

  <div class="o-layout__cell" style="--o-layout-colspan: 1;">
    Spans 1 of 10 columns
  </div>

  <div class="o-layout__cell" style="--o-layout-colspan: 3;">
    Spans 3 of 10 columns
  </div>

  <div class="o-layout__cell" style="--o-layout-colspan: 2;">
    Spans 2 of 10 columns
  </div>
</div>
```

**Note** Of course this specific use of custom properties(through inline styles) is pure for example purposes. It is advised to overwrite the custom properties in your own components instead of inline styles.

### Nesting

You can nest layouts in any context. Keep in mind that the dimensions will be relative to the width of `o-layout`, and not the width of the whole application.

```html
<div class="o-layout">
  <div class="o-layout__cell  o-layout__cell--fit">
    <div class="o-layout">
      <div class="o-layout__cell">
      </div>
    </div>
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
* `.o-layout--equal-block-size`: All cells match the size of tallest cell in a row on the block axis
* `.o-layout--gap-base`: adds a base gutter between cells
* `.o-layout--gap-tiny`: adds a tiny gutter between cells
* `.o-layout--gap-small`: adds a small gutter between cells
* `.o-layout--gap-large`: adds a large gutter between cells
* `.o-layout--gap-huge`: adds a huge gutter between cells

**On the `.o-layout__cell` element**
* `.o-layout__cell`: Core layout cell element
* `.o-layout__cell--align-inline-center`: Center one cell on the inline axis
* `.o-layout__cell--fit`: Make a cell shrink wrap its content
* `.o-layout__cell--fill`: Make a cell fill the remaining space.


## Configurable variables
There are multiple ways to configure the layout object. The Custom properties are calculated at run-time, the SCSS variables will allow you to change things on build-time.

### Custom properties

**On the `.o-layout` block**

* `--o-layout-columns`: The number of columns you want to have, defaults to `12`
* `--o-layout-gap`: The width of the gutter applied between the cells, defaults to `0`

**On the `.o-layout__cell` element**

* `--o-layout-colspan`: The amount of columns this cell will span, defaults to `--o-layout-columns`

### SCSS

* `$gap-base`: base width of the gutter, defaults to `defaults.$space-base`
* `$gap-tiny`: tiny width of the gutter, defaults to `defaults.$space-tiny`
* `$gap-small`: small width of the gutter, defaults to `defaults.$space-small`
* `$gap-large`: large width of the gutter, defaults to `defaults.$space-large`
* `$gap-huge`: huge width of the gutter, defaults to `defaults.$space-huge`
* `$fit-in-breakpoint`: a list of breakpoints where `o-layout__cell-fit` is generated for,  defaults to `()`
* `$fill-in-breakpoint`: a list of breakpoints where `o-layout__cell-fill` is generated for,  defaults to `()`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use '~supple/lib/objects/layout' with (
  $fit-in-breakpoint: (lap, desk),
  $gap-small: 1rem,
);
```
or
```scss
// in your own variable file, eg. `_vars.scss`
@use '~supple/lib/objects/layout/variables' with (
  $fit-in-breakpoint: (lap, desk),
  $gap-small: 1rem,
);

// in your manifest file, eg. `styles.scss`
@use '~supple/lib/objects/layout';
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
