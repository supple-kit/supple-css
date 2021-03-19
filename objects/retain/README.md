# Supple CSS | objects.retain

Creates a wrapper around a block of content, centers, adds padding and retains it to your desired size.

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

* Creates a wrapper
* Multiple sizes
* Configurable with custom properties

## Use
By default the retain container has a width of 100% and is padded on both sides.

```html
<div class="o-retain">
  <!-- any content -->
</div>
```


### Modifiers on `.o-retain`

```html
<div class="o-retain  [o-retain--no-padding  |  o-retain--lap  |  o-retain--desk  |  o-retain--wall]">
  <!-- any content -->
</div>
```


### Custom properties

```html
<div class="o-retain" style="--size: 30em;">
  <!-- any content -->
</div>
```

**Note** Of course this specific use of custom properties(through inline styles) is pure for example purposes. It is advised to overwrite the custom properties in your own components instead of inline styles.

## Available classes

* `.o-retain`: core retain block
* `.o-retain--no-padding`: removes the padding
* `.o-retain--lap`: retains the size to the `lap` size in `defaults.$breakpoints`
* `.o-retain--desk`: retains the size to the `desk` size in `defaults.$breakpoints`
* `.o-retain--wall`: retains the size to the `wall` size in `defaults.$breakpoints`

## Configurable variables
There are multiple ways to configure the retain object. The Custom properties are calculated at run-time, the SCSS variables will allow you to change things at build-time.

### Custom properties

**On the `.o-retain` block**

* `--size`: The size where you want to retain to, defaults to `100%`


### SCSS variables

* `$space`: wich spacing name you want to use for the padding, defaults to `base`
* `$sizes`: list of sizes you want to create `o-retain--X` for, defaults to `(lap: 640px, desk: 960px, wall: 1280px)`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/objects/retain' with (
  $sizes: (
    lap: 640px,
    desk: 960px,
  ),
);
```
or
```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/@supple-kit/supple-css/objects/retain/variables' with (
  $sizes: (
    lap: 640px,
    desk: 960px,
  ),
);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/objects/retain';
```


## Installation
Make sure you've installed/downloaded the Supple CSS library: [Supple CSS installation](../../#installation)


## Testing
Basic visual tests are in [test.html](https://supple-kit.github.io/supple-css/objects/retain/test.html).


## Browser support

* Chromium-based browsers (Chrome, Edge, Brave, Opera)
* WebKit-based browsers (Safari, iOS Safari)
* Firefox (Gecko)
