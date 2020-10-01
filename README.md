# Supple (S)CSS framework <img src="https://supple-css.github.io/supple/supple-logo.svg" alt="supple Logo" width="90" height="90" align="right">

[![npm (scoped)](https://img.shields.io/npm/v/supple.svg)](https://github.com/supple-css/supple/releases) [![npm](https://img.shields.io/npm/l/supple.svg)](https://github.com/supple-css/supple/blob/master/LICENSE) [![changelog](https://img.shields.io/badge/changelog-md-blue.svg)](https://github.com/supple-css/supple/blob/master/CHANGELOG.md)

## Introduction
Supple CSS is a reliable and testable [Sass](https://sass-lang.com/) framework in its truest sense. It's based on the [ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528) methodology and is suited very well for **component-based UI development**. Supple CSS plays well with React, Angular, Vue, Svelte, and every other component-based approach to UI development.

## Table of contents

* [Why use Supple](#why-use-supple)
* [Features](#features)
* [Browser support](#browser-support)
* [Installation](#installation)
* [Getting started](#getting-started)

## Why use supple:
> It is a small but powerful (S)CSS framework designed especially with the latest browsers in mind. The framework is made with an eye on the future. It uses utilizes new [CSS webstandards](https://cssdb.org/) like custom properties, Grid layout, Flexbox, logical properties.

Supple provides little to no design which means no undoing other people’s design decisions.

## Features
A grasp of Supple's features:

* Sensible, powerful reset for web applications.
* Suite of functions and mixins for speedy development.
* CSS Grid & Flexbox objects for creating layouts.
* Objects for reusable solutions to common features.
* Variety of utility classes for the most common problems like visually hiding, spacing, and more.

### Size

The framework including all modules weighs less than **1.5kB**. With this small payload, you have the power to build an entire website without even writing a single line of CSS. You can reduce the payload even further by only including the modules you need, and configure those modules to your needs.

## Browser support
Supple supports all major browsers which can render the following features:

* [custom properties](https://caniuse.com/#feat=css-variables)
* [logical properties](https://caniuse.com/#feat=css-logical-props)
* [CSS Grid Layout](https://caniuse.com/#feat=css-grid)
* [CSS Flexible Box Layout (flexbox)](https://caniuse.com/#feat=flexbox)

Basically that comes down to:

* Google Chrome (latest)
* Opera (latest)
* Firefox (latest)
* Safari (latest)
* Edge (latest chromium based)
* iOS (latest)


## Installation

### Prerequisites
Supple is built with the latest version of [Sass](https://sass-lang.com/) so your build-pipeline must be equipped with [Dart Sass](https://sass-lang.com/dart-sass).

### Install

* npm: `npm install @supple-kit/supple-css --save`

## Getting started
The framework is very design-free. this means that the style and design of your site are left entirely up to you. Because Supple gives you lots of customizable foundations you only need to add the final layer: **UI**.

Supple is built using the [Sass module system](https://css-tricks.com/introducing-sass-modules/) and it is advised to structure your application the same way.

Below are some examples of how to use and structure the framework:

### With 1 manifest file, eg. `styles.scss`

```scss
// styles.scss
@use 'settings/your-own-vars';
@use 'node_modules/@supple-kit/supple-css/objects/mesh';
@use 'components/your-own-component';
@use 'node_modules/@supple-kit/supple-css/utilities/colspan';
```

```scss
// settings/_your-own-vars.scss
@use 'node_modules/@supple-kit/supple-css/settings/defaults' with (
  $font-size: 20px,
  $columns: 10,
  $breakpoints: (
    lap: 320px,
    desk: 960px,
  ),
);

@use 'node_modules/@supple-kit/supple-css/objects/mesh/variables' with (
  $columns: 24,
);
```

```scss
// components/_your-own-component.scss
@use 'node_modules/@supple-kit/supple-css/settings/defaults';
@use 'node_modules/@supple-kit/supple-css/tools/space';
@use 'settings/your-own-vars';

.your-own-component {
  margin-inline-start: space.get('base');
  transition-timing-function: your-own-vars.$animation-timing-function;
}
```

### In a component-based setup like React, Vue, Svelte, etc.

```scss
// settings/_your-own-vars.scss
@use 'node_modules/@supple-kit/supple-css/settings/defaults' with (
  $font-size: 20px,
  $columns: 10,
  $breakpoints: (
    lap: 320px,
    desk: 960px,
  ),
);
```

```javascript
// components/your-own-component/index.js
import './index.scss';

// rest of your javascript code
```

```scss
// components/your-own-component/index.scss
@use 'settings/your-own-vars';
@use 'node_modules/@supple-kit/supple-css/settings/defaults';
@use 'node_modules/@supple-kit/supple-css/tools/space';

.your-own-component {
  margin-inline-start: space.get('base');
  transition-timing-function: your-own-vars.$animation-timing-function;
}

```


## Available modules
All Supple's modules are created based on the [ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528) methodology.

ITCSS stands for Inverted Triangle CSS and it helps you organize your project's CSS files in such a way that you can better deal with CSS specifics like a global namespace, the cascade, and selector specificity. I advise you to read ITCSS documentation to fully grasp the ideas about the methodology.

**Note** every module has its readme on how to use the module. In the list below you can click through to the connected documentation.

### Settings
This layer is the first layer and holds any global settings for your project. It should only house settings that need to be accessed from anywhere.

* [settings/defaults](settings/defaults), supples core settings.

**NOTE**: Any variable that does not need to be accessed globally should belong in the module to which it relates.

### Tools
The tools layer houses your globally available tooling, mixins, and functions.

* [tools](tools).

**NOTE**: Any mixin or function that does not need to be accessed globally should belong in the module template to which it relates.

### Generic
It contains ground-zero styles like global box-sizing rules, CSS resets, and so on.

* [generic/reset](generic/reset), A reset of sensible defaults suitable for web applications.

### Elements
These are bare, unclassed HTML elements. The Elements layer binds onto HTML element (or 'type') selectors only.

Elements are most likely the last layer in which we'd find element-based selectors, and is very rarely added to or changed after initial setup. Once we have defined element-level styles, all additions and deviations should be implemented using classes.

* **[elements/headings/_index.scss](elements/headings/_index.scss), a simple heading level structure**.

### Objects
This layer is concerned with styling non-cosmetic design patterns, or 'objects'. This can range from something like a `.o-retain` element to `.o-layout` systems.

* [objects/list-clean](objects/list-clean), strip appearance from lists by removing their bullets and indents
* [objects/retain](objects/retain), page-level constraining and wrapping elements
* [objects/layout](objects/layout), arrange items horizontally on the inline-axis with flexbox.
* [objects/mesh](objects/mesh), fluid & extensible grid system based on CSS grid.
* [objects/aspect-ratio](objects/aspect-ratio), retain a specific aspect ratio but adapt to elements of variable widths
* [objects/flow](objects/flow), Create flow and rhythm between elements.


All Objects are prefixed with `o-`.

### Components
This layer contains our recognizable components, chunks of UI.

All Components are prefixed with `c-`.

**NOTE**: Because supple is a design-free framework this layer is empty. You can add your own components to your project.

### Utilities
this layer contains some handy helpers & overrides. This is the most specific layer of the application which trumps everything defined before.

* [utilities/colspan](utilities/colspan), provides a colspan custom property for use in objects or components.
* [utilities/colstart](utilities/colstart), provides a column start custom property for use in objects or components.
* [utilities/clearfix](utilities/clearfix), Clears floats.
* [utilities/spacing](utilities/spacing), utility classes to put specific spacing values onto elements.
* [utilities/visually-hidden](utilities/visually-hidden), hides an element visually while still allowing the content to be accessible.
* [utilities/hidden](utilities/hidden), completely remove from the flow and hide it from screenreaders.

All Utilities are prefixed with `u-`.


## Browserstack
Every feature in Supple is extensively tested in browserstack:

[<img src="https://supple-css.github.io/supple/browserstack-logo.png" alt="browserstack logo" width="152" height="80">](https://www.browserstack.com/)


## Credits

Supple is derived from the ideas of many other developers:

* [Harry Roberts](https://twitter.com/csswizardry) for his awesome ideas with ITCSS and numerous other CSS stuff.
* [Nicole Sullivan](https://twitter.com/stubbornella) for her work on OOCSS.
* [Jonathan Snook](https://twitter.com/snookca) for his work on SMACSS.
* [Nicolas Gallagher](https://twitter.com/necolas) for his work on numerous CSS things.
* [Machiel Hulsbosch](http://www.hulsbos.ch/) for the supple logo.
* [Joris Hulsbosch](https://me.portfolioris.nl/) for general advice and in-field testing.

And probably more…
