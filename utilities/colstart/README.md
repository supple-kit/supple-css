# Supple CSS | utilities.colstart

Utility which provides a colstart custom property for use in objects or components which can handle those colstarts eg. `object.mesh`.

Read more about [Supple CSS](https://github.com/supple-css/supple).

## Table of contents

- [Features](#features)
- [Use](#use)
- [Available classes](#available-classes)
- [Configurable variables](#configurable-variables)
- [Installation](#installation)
- [Browser support](#browser-support)

## Features

- Easy & flexible column starts in your objects & components
- Works nicely with `objects.mesh`

## Use

```html
<div class="o-mesh">
	<div class="u-colstart-3">starts at column 3</div>
	<div class="u-colstart-7">starts at column 7</div>
</div>
```

## Available classes

By default we generate classes for 12 columns but it can be configured with the `$columns` setting.

- `.u-colstart-X`, spans over the designated number of columns
- `.u-colstart-X@[QUERY-NAME]`: applies colstart at the given media query. (available in `$in-query` SCSS setting)

## Configurable variables

### SCSS variables

- `$columns`, number of columns we generate classes for, defaults to `defaults.$columns`
- `$in-query`: a list of breakpoints where `.u-colstart-X@[QUERY-NAME]` is generated for, defaults to: `()`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/colstart' with
	(
		$columns: 10,
		$in-query: (
			lap,
			desk,
		)
	);
```

or

```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/colstart/variables' with
	(
		$in-query: (
			lap,
			desk,
		)
	);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/colstart';
```

## Installation

Make sure you've installed/downloaded the Supple CSS library: [Supple CSS installation](../../#installation)

## Browser support

- Chromium-based browsers (Chrome, Edge, Brave, Opera)
- WebKit-based browsers (Safari, iOS Safari)
- Firefox (Gecko)
