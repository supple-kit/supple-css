# Supple CSS | objects.aspect-ratio

For use with multi-media embeds such as videos, images or slideshows, that need to retain a specific aspect ratio but adapt to elements of variable widths.

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

* Fluid multi-media embeds.
* Retains to a specific aspect ratio.
* Configurable with custom properties.


## Use
By default the aspect ratio container has a ratio of 1:1, a perfect square.

**Note** `.o-aspect-ratio` only accepts `.o-aspect-ratio__item` as direct descendant.

```html
<div class="o-aspect-ratio">
  <iframe class="o-aspect-ratio__item" src=""></iframe>
</div>
```

### Modifiers on `.o-aspect-ratio`

```html
<div class="o-aspect-ratio [o-aspect-ratio--4by3  |  o-aspect-ratio--16by9  |  o-aspect-ratio--2by1]">
  <iframe class="o-aspect-ratio__item" src=""></iframe>
</div>
```

### Custom properties

```html
<div class="o-aspect-ratio" style="--aspect-ratio: (560/315);">
  <img class="o-aspect-ratio__item" src="" />
</div>
```

**Note** Of course this specific use of custom properties(through inline styles) is pure for example purposes. It is advised to overwrite the custom properties in your own components instead of inline styles.

## Available classes

**On the `.o-aspect-ratio` block**

* `.o-aspect-ratio`: core aspect ratio block
* `.o-aspect-ratio--4by3`: creates a embed with an aspect ratio of 4 by 3 (configurable in `$ratios` SCSS variable)
* `.o-aspect-ratio--16by9`: creates a embed with an aspect ratio of 16 by 9 (configurable in `$ratios` SCSS variable)
* `.o-aspect-ratio--2by1`: creates a embed with an aspect ratio of 2 by 1 (configurable in `$ratios` SCSS variable)

**On the `.o-aspect-ratio__item` element**

* `.o-aspect-ratio__item`: core aspect ratio item element

## Configurable variables
There are multiple ways to configure the aspect-ratio object. The Custom properties are calculated at run-time, the SCSS variables will allow you to change things at build-time.

### Custom properties

**On the `.o-aspect-ratio` block**

* `--ratio`: The aspect ratio you want to have, defaults to `(1:1)`

### SCSS variables

* `$ratios`: a list of ratios where `.o-aspect-ratio--XbyX` is generated for, defaults to: `((2:1), (4:3), (16:9))`
* `$space`: defines the `margin-block-end` space to create a nice vertical rhythm, defaults to `defaults.$space-base`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/supple/lib/objects/aspect-ratio' with (
  $ratios: (
    (4:3),
    (16:9),
  ),
);
```
or
```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/supple/lib/objects/aspect-ratio/variables' with (
  $ratios: (
    (4:3),
    (16:9),
  ),
);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/supple/lib/objects/aspect-ratio';
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
