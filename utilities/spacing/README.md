# Supple CSS | utilities.spacing

Utility classes to put specific spacing values onto elements. These include margin & padding by default but can be extended with say `inset` for positioning. Use these **only** to tweak layout on a micro level.

Read more about [Supple CSS](https://github.com/supple-css/supple).

## Table of contents

- [Use](#use)
- [Available classes](#available-classes)
- [Configurable variables](#configurable-variables)
- [Installation](#installation)
- [Browser support](#browser-support)

## Use

This utility generates set of classes mostly used by Supple's users. You can add classes to your liking by adding them to the configuration variables. Below you find some examples of how you can use this utility.

```html
<div class="u-margin--base">
	Applies margin on all sides with the value of `space.get('base')`
</div>

<div class="u-margin-inline-start--base">
	Applies margin at the start of the inline axis with the value of
	`space.get('base')`
</div>

<div class="u-margin-inline-start--large">
	Applies margin at the start of the inline axis with the value of
	`space.get('large')`
</div>

<div class="u-padding-block--base">
	Applies padding at the start and end of the block axis with the value of
	`space.get('base')`
</div>
```

The are a lot more combinations possible, please check [the variables SCSS file](./_variables.scss) for more options.

### responsive modifiers

When you set media queries in `$in-query` you can use them like this:

```html
<div class="u-padding-block-start--tiny@palm  u-padding-block-start--base@desk">
	Applies padding at the start of the block axis with the `tiny` spacing value
	until `palm` breakpoint. Applies padding at the start of the block axis with
	the value of `base` spacing value from `palm` breakpoint.
</div>
```

## Available classes

- `.u-[PROPERTY]--[SIZE]`: core spacing block

## Configurable variables

### SCSS variables

#### `$properties`

The properties that you want to generate spacings for. `key` is the classname, `value` is the property name.

**example:**

```scss
$properties: (
	'padding': 'padding',
	// generates `u-padding`
	'margin': 'margin',
	// generates `u-margin`
);

// or

$properties: (
	'p': 'padding',
	// generates `u-p`
	'm': 'margin',
	// generates `u-m`
	'i': 'inset',
	// generates `u-i`
);
```

**defaults to:**

```scss
$properties: (
	'margin-block-end': 'margin-block-end',
);
```

#### `$sizes`

And which sizes you want to generate? The names must be present in `defaults.$space-factors` in `settings/_defaults.scss`.

**Example:**

```scss
$sizes: ('tiny', 'base');
```

**Defaults to:**

```scss
$sizes: ('base');
```

#### `$in-query`

a list of media queries where `.u-[PROPERTY]--[SIZE]@[QUERY-NAME]` is generated for, defaults to: `()`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/spacing' with
	(
		$in-query: (
			lap,
			desk,
		),
		$properties: (
			'm': 'margin',
			'p': 'padding',
		),
		$sizes: (
			'base',
		)
	);
```

or

```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/spacing/variables' with
	(
		$in-query: lap,
		$sizes: (
			'tiny',
			'large',
		)
	);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/spacing';
```

## Installation

Make sure you've installed/downloaded the Supple CSS library: [Supple CSS installation](../../#installation)

## Browser support

- Chromium-based browsers (Chrome, Edge, Brave, Opera)
- WebKit-based browsers (Safari, iOS Safari)
- Firefox (Gecko)
