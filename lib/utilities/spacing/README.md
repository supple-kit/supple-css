# Supple CSS | utilities.spacing

Utility classes to put specific spacing values onto elements. These include margin & padding by default but can be extended with say `inset` for positioning. Use these **only** to tweak layout on a micro level.

Read more about [Supple CSS](https://github.com/supple-css/supple).

## Table of contents

* [Use](#use)
* [Available classes](#available-classes)
* [Configurable variables](#configurable-variables)
* [Installation](#installation)
* [Browser support](#browser-support)

## Use
This utility generates set of classes mostly used by supple's users. You can add classes to your liking by adding them to the configuration variables. Below you find some examples of how you can use this utility.

```html
<div class="u-margin-base">
  Applies margin on all sides with the value of `defaults.$space-base`
</div>

<div class="u-margin-inline-start-base">
  Applies margin at the start of the inline axis with the value of `defaults.$space-base`
</div>

<div class="u-margin-inline-start-large">
  Applies margin at the start of the inline axis with the value of `defaults.$space-large`
</div>

<div class="u-margin-inline-end-auto">
  Applies margin at the end of the inline axis with the value of `auto`
</div>

<div class="u-padding-block-base">
  Applies padding at the start and end of the block axis with the value of `defaults.$space-base`
</div>

<div class="u-padding-block-start-none">
  Applies padding at the start of the block axis with the value of `0`
</div>
```
The are a lot more combinations possible, please check [the variables SCSS file](./_variables.scss) for more options.

### responsive modifiers
When you set breakpoints in `$in-breakpoint` you can use them like this:

```html
<div class="u-padding-block-start-none@until-palm  u-padding-block-start-base@from-desk">
  Applies padding at the start of the block axis with the value of `0` until `palm` breakpoint.
  Applies padding at the start of the block axis with the value of `defaults.$space-base` from `palm` breakpoint.
</div>
```

## Available classes

* `.u-[PROPERTY]-[DIRECTION]-[SIZE]`: core visually hidden block

## Configurable variables

### SCSS variables

#### `$properties`

The properties that you want to generate spacings for. `key` is the classname, `value` is the property name.

**example:**
```scss
$properties: (
  'padding': 'padding', // generates `u-padding`
  'margin': 'margin', // generates `u-margin`
);

// or

$properties: (
  'p': 'padding', // generates `u-p`
  'm': 'margin', // generates `u-m`
  'i': 'inset', // generates `u-i`
);
```
**defaults to:**
```scss
$properties: (
  'margin': 'margin',
);
```

#### `$directions`

In which directions you want your spacings to be generated? `key` is the classname, `value` is the property name.

**Example:**
```scss
$directions: (
  null: null, // generates `u-margin`
  '-block': '-block-start' '-block-end', // generates `u-margin-block-end` class with start & end properties
  '-block-end': '-block-end', // generates `u-margin-block-end`
  '-inline-start': '-inline-start' // generates `u-margin-inline-start`
);

// or

$directions: (
  '-b-e': '-block-end', // generates `u-m-b-e`
  '-i-s': '-inline-start', // generates `u-m-i-s`
);
```

**Defaults to:**
```scss
$directions: (
  '-block-end': '-block-end',
);
```

#### `$sizes`

And which sizes you want to generate? `key` is the classname, `value` is the value (duh!)

**Example:**
```scss
$sizes: (
  null: null, // generates `u-margin` with value of `defaults.$space-base`
  '-tiny': defaults.$space-tiny, // generates `u-margin-tiny` with value of `defaults.$space-tiny`
  '-auto': auto // generates `u-margin-auto` with value of `auto`
);

// or

$sizes: (
  '-t': defaults.$space-tiny, // generates `u-m-t` with value of `defaults.$space-tiny`
  '-a': auto // generates `u-m-a` with value of `auto`
);
```
**Defaults to:**
```scss
$sizes: (
  null: defaults.$space-base,
  '-none': 0
);
```

#### `$in-breakpoint`
a list of breakpoints where `.u-[PROPERTY]-[DIRECTION]-[SIZE]@[from|until]-[BREAKPOINT-NAME]` is generated for, defaults to: `()`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use '~supple/lib/utilities/spacing' with (
  $in-breakpoint: (lap, desk),
  $properties: (
    'm': 'margin',
    'p': 'padding',
  ),
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
