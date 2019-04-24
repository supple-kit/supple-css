# Changelog
All notable changes to this project will be documented in this file.

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
- Update readme with helpfull information.

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

