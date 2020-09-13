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
When you set breakpoints in `$in-breakpoint` you can use them like this:

```html
<button>
  This button has text that is
  <span class="u-visually-hidden@from-lap">Hidden visually from lap breakpoint but still available for screenreaders etc.</span>
</button>
```

## Available classes

**On the `.u-visually-hidden` block**

* `.u-visually-hidden`: core visually hidden block
* `.u-visually-hidden@[from|until]-[BREAKPOINT-NAME]`: applies visually-hidden at the given breakpoint. (available in `$in-breakpoint` SCSS setting)

## Configurable variables

### SCSS variables

* `$in-breakpoint`: a list of breakpoints where `.u-visually-hidden@[from|until]-[BREAKPOINT-NAME]` is generated for, defaults to: `()`

You can overwrite the SCSS variables the following ways:

```scss
// in your manifest file, eg. `styles.scss`
@use 'node_modules/supple/utilities/visually-hidden' with (
  $in-breakpoint: (lap, desk),
);
```
or
```scss
// in your own variable file, eg. `_vars.scss`
@use 'node_modules/supple/utilities/visually-hidden/variables' with (
  $in-breakpoint: (
    from: lap,
    until: lap desk,
  ),
);

// in your manifest file, eg. `styles.scss`
@use 'node_modules/supple/utilities/visually-hidden';
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
