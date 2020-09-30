# Supple CSS | utilities.module

Removes bottom margin from the last child of a module. As per: http://css-tricks.com/spacing-the-bottom-of-modules/.

Read more about [Supple CSS](https://github.com/supple-css/supple).

## Table of contents

* [Use](#use)
* [Available classes](#available-classes)
* [Configurable variables](#configurable-variables)
* [Installation](#installation)
* [Testing](#testing)
* [Browser support](#browser-support)

## Use

```html
<div class="u-module">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus numquam repellendus repellat eaque
    illum, praesentium facere iure fugiat obcaecati? Facere, reprehenderit recusandae quae ea numquam id ut doloribus
    adipisci.</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus asperiores minima porro nemo, perferendis magni
    molestias rem illum, inventore fuga sunt! Amet, quisquam voluptatum hic modi doloribus rerum eveniet sint?</p>

  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ul>
</div>
```

## Available classes

**On the `.u-module` block**

* `.u-module`: core visually hidden block

## Configurable variables

### SCSS variables

* `$depth`: levels `:last-child` descendants to clear, defaults to `2`;

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/module' with (
  $depth: 4,
);
```
or
```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/module/variables' with (
  $depth: 3,
);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/module';
```


## Installation
Make sure you've installed/downloaded the Supple CSS library:

* [npm](https://www.npmjs.com/package/supple): `npm install @supple-kit/supple-css`
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
