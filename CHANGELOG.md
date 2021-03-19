# Changelog
All notable changes to this project will be documented in this file.

## 5.0.0 - 19-march-2021
This is a massive overhaul opposed to v4.0.1, there is no simple upgrade path available.

- Moved repository to [Supple Kit](https://github.com/supple-kit) as the first of the many to come tools for webdevelopment.
- Removed [sass-mq](https://github.com/sass-mq/sass-mq) in favor of a new custom MQ system.
- Added logical properties where possible so the framework is better suited for multilingual use.
- Added mesh object, based on css-grid, to create simple grid systems.
- Layout object can now be used without `o-layout__cell` child elements.
- Added colspan, colstart, offset & columns utilities to use with layout & mesh objects.
- Added better support for frameworks like svelte, react and the like.
- More use of CSS custom properties.
- Dropped IE11 support entirely

## 4.0.1 - 19-may-2020

- Fixed a bug in `o-list-clean` where it resets margin-left but should reset padding-left.

## 4.0.0 - 20-apr-2020

- Confirm to `@csstools/normalize.css` because of some problems with nested lists and buttons. Thus introducing a breaking change.
- Confirm to new stylelint-config-supple v3
- Updated code to work with dart-sass, the new default sass parser.

## 3.1.0 - 20-apr-2020

- Remove mq-base-font-size since it will no longer be included in sass-mq 6
- Added postcss normalize into the package
- Cleaned up reset file
- Added palm breakpoint

## 3.0.0 - 07-jan-2020

- Changed `$supple-space` to `$supple-space-base` for better find and replace possibilities.
- Changed `.o-layout--gutter` to `.o-layout--gutter-base` for the same reason.
- Moved `.o-retain--text` to `u-text-retain` for text truncation.
- Added `auto` margin to the `$supple-spacing-sizes` map in the spacing utility.

## 2.1.1 - 24-apr-2019

- Added `!default` to `$mq-breakpoints` in `settings/_responsive.scss` for easy overwriting
- Changed pseudo element selector from `:` to `::` for future compatibility

## 2.1.0 - 08-jan-2019

- Remove namespacing since no-one ever uses it, and it helps with autocompletion in editors
- Made it possible to generate multiple from & until's

## 2.0.3 - 20-dec-2018

- Layout cell needs to be 100% width by default, it missed the fallback for older browsers.

## 2.0.2 - 14-dec-2018

- Added possibility to remove the license header

## 2.0.1 - 13-dec-2018

- Use rem for spacing utility

## 2.0.0 - 13-dec-2018
Massive overhaul, v2 is by any means not compatible with v1 codebases.

- Converted the codebase to SCSS while maintaining custom property support.
- now uses an 8px vertical rhythm
- Added retain object
- renamed `.u-cf` to `.u-clearfix`
- Added `:focus:not(:focus-visible)` as per [https://twitter.com/LeaVerou/status/1045768279753666562](https://twitter.com/LeaVerou/status/1045768279753666562)
- Added font size mixin to help with vertical rhythm
- Added CSS lock mixin
- Added spacing utility
- Updated to `stylelint-config-supple` v2

## 1.0.1 - 09-apr-2018
- Stupid typo's

## 1.0.0 - 09-apr-2018
- Added vertical layout mode.
- Formatted flexembed fallbacks a bit more consistent.
- Removed `@apply` rules because the spec is abandoned.
- Update readme with helpful information.

First major release 🔥.

## 0.2.1 - 09-jan-2018
- Removed `:host` selector again because that is not how webcomponents work

## 0.2.0 - 29-dec-2017
- Splitted responsive fractions into separate files
- Added full fraction
- Changed flexembed X & Y ratios to a single `--o-flexembed-ratio` variable
- Enabled webcomponents by adding `:host` selector to the custom property sets
- Removed postcss-custom-properties because of aforementioned change

## 0.1.0
- Initial alpha release

## [Unreleased]
- Repository init

