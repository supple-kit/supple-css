# Supple CSS | objects.flow

Create flow and rhythm between elements. As per: https://every-layout.dev/layouts/stack/.

Read more about [Supple CSS](https://github.com/supple-css/supple).

## Table of contents

- [Use](#use)
- [Available classes](#available-classes)
- [Configurable variables](#configurable-variables)
- [Installation](#installation)
- [Testing](#testing)
- [Browser support](#browser-support)

## Use

```html
<div class="o-flow">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
    temporibus numquam repellendus repellat eaque illum, praesentium facere iure
    fugiat obcaecati? Facere, reprehenderit recusandae quae ea numquam id ut
    doloribus adipisci.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
    asperiores minima porro nemo, perferendis magni molestias rem illum,
    inventore fuga sunt! Amet, quisquam voluptatum hic modi doloribus rerum
    eveniet sint?
  </p>

  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ul>
</div>
```

## Available classes

**On the `.o-flow` block**

- `.o-flow`: core flow object
- `.o-flow--[GAP-SIZE]`: size modifier, generated by `$gap-sizes` SCSS variable.

## Configurable variables

There are multiple ways to configure the flow object. The Custom properties are calculated at run-time, the SCSS variables will allow you to change things at build-time.

### Custom properties

**On the `.o-flow` block**

- `--gap`: Amount of space you want to have, defaults to `space.get('base')`.
- `--flow-gap`: Actual gap variable to be used when in conflict with other objects, defaults to `var(--gap)`.

### SCSS variables

#### `$gap`

The mount of spacing you want to generate on the main block axis.

**Defaults to:**

```scss
$gap: 'base';
```

#### `$gap-sizes`

And which size modifiers you want to generate?

**Example:**

```scss
$gap-sizes: ('tiny');
```

**Defaults to:**

```scss
$gap-sizes: ();
```

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/objects/flow' with (
  $gap: 'tiny'
);
```

or

```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/@supple-kit/supple-css/objects/flow/variables' with (
  $gap: 'tiny'
);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/objects/flow';
```

## Installation

Make sure you've installed/downloaded the Supple CSS library: [Supple CSS installation](../../#installation)

## Testing

Basic visual tests are in [test.html](https://supple-kit.github.io/supple-css/objects/flow/test.html).

## Browser support

- Chromium-based browsers (Chrome, Edge, Brave, Opera)
- WebKit-based browsers (Safari, iOS Safari)
- Firefox (Gecko)
