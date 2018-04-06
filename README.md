# supple - v0.2.1

<img src="https://raw.githubusercontent.com/supple-css/supple/master/_assets/supple-logo.svg" align="right" width="80" height="80" alt="Supple Logo">

[![npm][npm-image]][npm-url] [![license][license-image]][license-url]
[![changelog][changelog-image]][changelog-url]

**NOTE: This is a alpha release, dragons ahead**

**Why use supple:**
It is a small but powerfull CSS framework designed specially with the latest browsers in mind. The framework is made with an eye on the future. It uses custom properties for configuration and utilises new [CSS webstandards](https://jonathantneal.github.io/css-db/) to let you forget about any preprocessor.

Supple provides little to no design wich means no undoing other peoples design decisions.

Use supple if:

* You want to write just CSS ;-)
* You need a powerful library of defaults & objects.
* You appreciate the value of Object Oriented code and the need for scalability
  and reuse.
* You need a framework that is robust and evolves constantly.

## Browser support
Supple supports all [major browsers which can render CSS custom properties](http://caniuse.com/#feat=css-variables) given you configure your build process with the following postcss plugins:

* [postcss-easy-import](https://github.com/TrySound/postcss-easy-import)
* [postcss-apply](https://github.com/pascalduez/postcss-apply)
* [postcss-custom-media](https://github.com/postcss/postcss-custom-media)
* [postcss-autoprefixer](https://github.com/postcss/autoprefixer)

## Installation
* yarn: `yarn add supple --dev`
* npm: `npm install supple --save-dev`

## Available modules
All supple submodules are created based on the ITCSS principle.

ITCSS stands for Inverted Triangle CSS and it helps you to organize your project CSS files in such way that you can better deal with CSS specifics like global namespace, cascade and selectors specificity.

### Settings
This layer is the first layer and holds any global settings for your project. It should only house settings that need to be accessed from anywhere.

**NOTE**: Any variable that does not need to be accessed globally should belong in the component to which it relates.

* [defaults.css](lib/settings/defaults.css)

### Tools
The tools layer houses your globally available tooling, mixins and functions.
Supple does not have any global tools, so this layer is empty by default.

**NOTE**: Any mixin or function that does not need to be accessed globally should belong in the component to which it relates.

### Generic
It contains ground-zero styles like [Normalize.css](http://necolas.github.io/normalize.css/), global box-sizing rules, CSS resets and so on.

* It’s advised to include [normalize.css](http://necolas.github.io/normalize.css/), it is installed by default.
* [reset.css](lib/generic/reset.css)
* [vertical-rhythm.css](lib/generic/vertical-rhythm.css)

### Elements
These are bare, unclassed HTML elements. The Elements layer binds onto HTML element (or 'type') selectors only.

Elements are most likely the last layer in which we'd find element-based selectors, and is very rarely added to or changed after initial setup. Once we have defined element-level styles, all additions and deviations should be implemented using classes.

**NOTE**: Because supple is a design-free framework this layer is completely empty.

### Objects
This layer is concerned with styling non-cosmetic design patterns, or 'objects'. This can range from something as a `.o-wrapper` element to  `.o-layout` systems.

* [list-clean.css](lib/objects/list-clean.css)
* [layout.css](lib/objects/layout.css)
* [flexembed.css](lib/objects/flexembed.css)

All Objects should be prefixed with `o-`.

### Components
This layer contains our recognisable components, chunks of UI.

All Components should be prefixed with `c-`.

**NOTE**: Because supple is a design-free framework this layer is completely empty. You can add your own components to your project.

### Utilities
this layer contains some handy helpers & overrides. This is the most specific layer of the application which trumps everything defined before.

* [fractions.css](lib/utilities/fractions.css) - *
* [float.css](lib/utilities/float.css)
* [module.css](lib/utilities/module.css)
* [visually-hidden.css](lib/utilities/visually-hidden.css)
* [hidden.css](lib/utilities/hidden.css)

(*) This set if utilities is only needed if you want to support browsers without custom property support. Fractions also have a breakpoint specific file so you can granularly control the amount of CSS.

All Utilities should be prefixed with `u-`.

## Getting started
Supple is a very design-free framework. This means that the style and design of your site is left entirely up to you.
Because supple gives you lots of customisable foundations, you need to add the final layer: **UI**.

It is advised that you will use supple code throughout your own, a sample `styles.css` file would look like this:

```scss
/* Settings */
@import "node_modules/supple/lib/settings/defaults.css";
@import "settings/vars.css";
@import "settings/colors.css";

/* Tools */
@import "tools/apply-rules.css";

/* Generic */
@import "normalize.css";
@import "node_modules/supple/lib/generic/reset.css";
@import "node_modules/supple/lib/generic/vertical-rhythm.css";

/* Elements */
@import "elements/headings.css";
@import "elements/links.css";

/* Objects */
@import "node_modules/supple/lib/objects/list-clean.css";
@import "node_modules/supple/lib/objects/layout.css";
@import "node_modules/supple/lib/objects/flexembed.css";
@import "objects/box.css";
@import "objects/media.css";

/* Components */
@import "components/buttons.css";
@import "components/masthead.css";
@import "components/navigation.main.css";

/* Utilities */
@import "node_modules/supple/lib/utilities/fractions.css";
@import "node_modules/supple/lib/utilities/fractions@desk.css";
@import "node_modules/supple/lib/utilities/float.css";
@import "node_modules/supple/lib/utilities/module.css";
@import "node_modules/supple/lib/utilities/visually-hidden.css";
@import "node_modules/supple/lib/utilities/hidden.css";
@import "utilities/visibility.css";
@import "utilities/text.css";
```
The file [index.css](index.css) is added as a reference file on how you could implement the smaller modules.

## Credits

Supple is derived by the ideas of many other developers:

* [Harry Roberts](https://twitter.com/csswizardry) for his awesome ideas with ITCSS and numerous other CSS stuff
* [Nicole Sullivan](https://twitter.com/stubbornella) for her work on OOCSS
* [Jonathan Snook](https://twitter.com/snookca) for his work on SMACSS
* [Nicolas Gallagher](https://twitter.com/necolas) for his work on numerous CSS things

And probably more…
