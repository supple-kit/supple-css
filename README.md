# Supple (S)CSS framework <img src="https://supple-css.github.io/supple/supple-logo.svg" alt="supple Logo" width="90" height="90" align="right">

[![npm (scoped)](https://img.shields.io/npm/v/supple.svg)](https://github.com/supple-css/supple/releases) [![npm](https://img.shields.io/npm/l/supple.svg)](https://github.com/supple-css/supple/blob/master/LICENSE) [![changelog](https://img.shields.io/badge/changelog-md-blue.svg)](https://github.com/supple-css/supple/blob/master/CHANGELOG.md)

## Why use supple:
> It is a small but powerfull (S)CSS framework designed specially with the latest browsers in mind. The framework is made with an eye on the future. It uses custom properties for configuration and utilises new [CSS webstandards](https://cssdb.org/).

Supple provides little to no design wich means no undoing other peoples design decisions.

Use supple if:

* You appreciate the value of Object Oriented code and the need for scalability and reuse.
* You need a powerful library of defaults & objects.
* You need a framework that is robust and evolves constantly.

### Size

The core framework including all modules without fallbacks for `custom-properties` weighs about 2.15kB. You can reduce the payload by only including the modules you need, and configure those modules to your needs.

If you want the framework to include all fallbacks for `custom-properties` the framework comes in at 2.48kB.


## Browser support
Supple supports all [major browsers which can render CSS custom properties](http://caniuse.com/#feat=css-variables).

If you want to support older browsers (mostly IE11) you’ll need to include the [_fractions.scss](lib/utilities/_fractions.scss) utility to support our [_layout.scss](lib/objects/_layout.scss) grid system. Other modules also have some configuration to support older browsers, please refer to their own readme files.

### Browserstack
Every feature in Supple is extensively tested in browserstack:

[<img src="https://supple-css.github.io/supple/browserstack-logo.png" alt="browserstack logo" width="152" height="80">](https://www.browserstack.com/)

## Installation

* npm: `npm install supple --save`

**Note**: It is advised to add [postcss-autoprefixer](https://github.com/postcss/autoprefixer) to automatically generate vendor prefixes.

## Available modules
All supple submodules are created based on the [ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528) methodology.

ITCSS stands for Inverted Triangle CSS and it helps you organize your project's CSS files in such a way that you can better deal with CSS specifics like global namespace, the cascade and selector specificity.

### Settings
This layer is the first layer and holds any global settings for your project. It should only house settings that need to be accessed from anywhere.

**NOTE**: Any variable that does not need to be accessed globally should belong in the module to which it relates.

* [settings/_defaults.scss](lib/settings/_defaults.scss), supples core settings.
* [settings/_responsive.scss](lib/settings/_responsive.scss), breakpoint settings based on [Sass MQ](https://sass-mq.github.io/sass-mq/).

### Tools
The tools layer houses your globally available tooling, mixins and functions.

* [tools/_functions.scss](lib/tools/_functions.scss).
* [tools/_mixins.scss](lib/tools/_mixins.scss).

**NOTE**: Any mixin or function that does not need to be accessed globally should belong in the module template to which it relates.

### Generic
It contains ground-zero styles like [Normalize.css](http://necolas.github.io/normalize.css/), global box-sizing rules, CSS resets and so on.

* [generic/_normalize.scss](lib/generic/_normalize.scss), to flatten cross browser inconsistencies.
    * **Note:** *Although supple has a prepackaged version of normalize.css it is encouraged to include the latest version from [normalize.css](http://necolas.github.io/normalize.css/).*
* [generic/_reset.scss](lib/generic/_reset.scss), a thin layer on top of normalize.css that provides a starting point more suitable for web applications.

### Elements
These are bare, unclassed HTML elements. The Elements layer binds onto HTML element (or 'type') selectors only.

Elements are most likely the last layer in which we'd find element-based selectors, and is very rarely added to or changed after initial setup. Once we have defined element-level styles, all additions and deviations should be implemented using classes.

* [elements/_headings.scss](lib/elements/_headings.scss), a simple heading level structure.

### Objects
This layer is concerned with styling non-cosmetic design patterns, or 'objects'. This can range from something as a `.o-wrapper` element to  `.o-layout` systems.

* [objects/list-clean](lib/objects/list-clean), strip appearance from lists by removing their bullets and indents
* [objects/layout](lib/objects/layout), fluid and nestable layout system based on flexbox.
* [objects/aspect-ratio](lib/objects/aspect-ratio), retain a specific aspect ratio but adapt to elements of variable widths
* [objects/retain](lib/objects/retain), page-level constraining and wrapping elements

All Objects should be prefixed with `o-`.

### Components
This layer contains our recognisable components, chunks of UI.

All Components should be prefixed with `c-`.

**NOTE**: Because supple is a design-free framework this layer is completely empty. You can add your own components to your project.

### Utilities
this layer contains some handy helpers & overrides. This is the most specific layer of the application which trumps everything defined before.

* [utilities/_fractions.scss](lib/utilities/_fractions.scss), sizes in human readable format (*).
* [utilities/clearfix](lib/utilities/clearfix), Clears floats.
* [utilities/module](lib/utilities/module), removes the `margin-bottom` from the last childs of a module.
* [utilities/spacing](lib/utilities/spacing), utility classes to put specific spacing values onto elements.
* [utilities/visually-hidden](lib/utilities/visually-hidden), hides an element visually while still allowing the content to be accessible.
* [utilities/hidden](lib/utilities/hidden), completely remove from the flow and hide it from screenreaders.

(*) This set of utilities is only needed if you want to support browsers without custom property support.

All Utilities should be prefixed with `u-`.

## Getting started
Supple is a very design-free framework. This means that the style and design of your site is left entirely up to you.
Because supple gives you lots of customisable foundations, you need to add the final layer: **UI**.

It is advised that you will use supple code throughout your own styles, a ***sample*** `styles.scss` file would look like this:

```scss
/* Settings */
@import "node_modules/supple/lib/settings/defaults";
@import "settings/vars";
@import "settings/colors";

/* Tools */
@import "node_modules/supple/lib/tools/functions";
@import "node_modules/supple/lib/tools/mixins";

/* Generic */
@import "normalize";
@import "node_modules/supple/lib/generic/reset";

/* Elements */
@import "node_modules/supple/lib/elements/headings";
@import "elements/links";

/* Objects */
@import "node_modules/supple/lib/objects/list-clean";
@import "node_modules/supple/lib/objects/layout";
@import "node_modules/supple/lib/objects/flexembed";
@import "objects/box";
@import "objects/media";

/* Components */
@import "components/buttons";
@import "components/masthead";
@import "components/navigation.main";

/* Utilities */
@import "node_modules/supple/lib/utilities/fractions";
@import "node_modules/supple/lib/utilities/module";
@import "node_modules/supple/lib/utilities/visually-hidden";
@import "node_modules/supple/lib/utilities/hidden";
@import "utilities/visibility";
@import "utilities/text";
```
The file [index.scss](index.scss) is added as a reference file on how you could implement the smaller modules.

## Credits

Supple is derived by the ideas of many other developers:

* [Harry Roberts](https://twitter.com/csswizardry) for his awesome ideas with ITCSS and numerous other CSS stuff.
* [Nicole Sullivan](https://twitter.com/stubbornella) for her work on OOCSS.
* [Jonathan Snook](https://twitter.com/snookca) for his work on SMACSS.
* [Nicolas Gallagher](https://twitter.com/necolas) for his work on numerous CSS things.
* [Machiel Hulsbosch](http://www.hulsbos.ch/) for the supple logo.

And probably more…
