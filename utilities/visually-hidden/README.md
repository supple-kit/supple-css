# Supple CSS | utilities.visually-hidden

Hides an element visually while still allowing the content to be accessible to assistive technology, e.g. screen readers.

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
<button>
  This button has text that is
  <span class="u-visually-hidden">hidden visually but still available for screenreaders etc.</span>
</button>
```

### responsive modifiers
When you set media queries in `$in-query` you can use them like this:

```html
<button>
  This button has text that is
  <span class="u-visually-hidden@lap">Hidden visually from lap breakpoint but still available for screenreaders etc.</span>
</button>
```

## Available classes

**On the `.u-visually-hidden` block**

* `.u-visually-hidden`: core visually hidden block
* `.u-visually-hidden@[QUERY-NAME]`: applies visually-hidden at the given media query. (available in `$in-query` SCSS setting)

## Configurable variables

### SCSS variables

* `$in-query`: a list of breakpoints where `.u-visually-hidden@[QUERY-NAME]` is generated for, defaults to: `()`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/visually-hidden' with (
  $in-query: (lap, desk),
);
```
or
```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/visually-hidden/variables' with (
  $in-query: (
    lap
  ),
);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/@supple-kit/supple-css/utilities/visually-hidden';
```


## Installation
Make sure you've installed/downloaded the Supple CSS library: [Supple CSS installation](../../#installation)


## Testing
Basic visual tests are in [test.html](https://supple-kit.github.io/supple-css/utilities/visually-hidden/test.html).


## Browser support

* Chromium-based browsers (Chrome, Edge, Brave, Opera)
* WebKit-based browsers (Safari, iOS Safari)
* Firefox (Gecko)
