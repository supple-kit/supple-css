# Supple CSS | utilities.spacing

Utility classes to put specific spacing values onto elements. These include margin & padding by default but can be extended with say `inset` for positioning. Use these **only** to tweak layout on a micro level.

**Note** By default there will be a LOT of classes generated, it is advised to alter the defaults so you only generate what you use in your project. Check out [Configurable variables](#configurable-variables) for more info.

Read more about [Supple CSS](https://github.com/supple-css/supple).

## Table of contents

* [Use](#use)
* [Available classes](#available-classes)
* [Configurable variables](#configurable-variables)
* [Installation](#installation)
* [Browser support](#browser-support)

## Use
This utility generates a lot of classes so I’m showing only the most used ones.

```html
<div class="u-margin">
  Applies margin on all sides with the value of `defaults.$space-base`
</div>

<div class="u-margin-inline-start">
  Applies margin at the start of the inline axis with the value of `defaults.$space-base`
</div>

<div class="u-margin-inline-start-large">
  Applies margin at the start of the inline axis with the value of `defaults.$space-large`
</div>

<div class="u-margin-inline-end-auto">
  Applies margin at the end of the inline axis with the value of `auto`
</div>

<div class="u-padding-block">
  Applies padding at the start and end of the block axis with the value of `defaults.$space-base`
</div>

<div class="u-padding-block-start-none">
  Applies padding at the start of the block axis with the value of `0`
</div>
```
The are a lot more combinations possible, please check [the SCSS file](./_index.scss) for more options.

### responsive modifiers
When you set breakpoints in `$in-breakpoint` you can use them like this:

```html
<div class="u-padding-block-start-none@until-palm  u-padding-block-start@from-desk">
  Applies padding at the start of the block axis with the value of `0` until `palm` breakpoint.
  Applies padding at the start of the block axis with the value of `defaults.$space-base` from `palm` breakpoint.
</div>
```

## Available classes

* `.u-[PROPERTY]-[DIRECTION]-[SIZE]`: core visually hidden block

## Configurable variables

### SCSS variables

* `$properties`: a list of properties, defaults to `('padding': 'padding', 'margin': 'margin')` where the key is the classname and value is the property.
* `$directions`: a list of directions, defaults to `(null: null, '-block': '-block', '-block-start': '-block-start', '-block-end': '-block-end', '-inline': '-inline', '-inline-start': '-inline-start', '-inline-end': '-inline-end')` where the key is the classname and value is the property.
* `$sizes`: a list of sizes, defaults to `(null: defaults.$space-base, '-base': defaults.$space-base, '-tiny': defaults.$space-tiny, '-small': defaults.$space-small, '-large': defaults.$space-large, '-huge': defaults.$space-huge, '-auto': auto, '-none': 0)` where the key is the classname and value is the value.
* `$in-breakpoint`: a list of breakpoints where `.u-[PROPERTY]-[DIRECTION]-[SIZE]@[from|until]-[BREAKPOINT-NAME]` is generated for, defaults to: `()`

**Note** With those defaults there will be a LOT of classes generated, it is advised to alter the defaults so you only generate what you use in your project.

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use '~supple/lib/utilities/spacing' with (
  $in-breakpoint: (lap, desk),
  $sizes: (
    '-base': defaults.$space-base,
  )
);
```
or
```scss
// in your own variable file, eg. `_vars.scss`
@use '~supple/lib/utilities/spacing/variables' with (
  $in-breakpoint: (
    from: lap,
    until: lap desk,
  ),
  $directions: (
    '-block': '-block',
  )
);

// in your manifest file, eg. `styles.scss`
@use '~supple/lib/utilities/spacing';
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
