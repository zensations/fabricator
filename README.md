# Customized Fabricator by Zensations.

Difference to the original fabricator:
- Icon font generator out of .svg files (now using fontawesome but can be replaced by any .svg icons)
- Partials basic setup and structure with some mixins / extends
- Added a base component under materials and corresponding .scss for base tags h1, p, etc.
- Added DRY SCSS mixins based on https://github.com/Snugug/toolkit

### Generate icon fonts
The icons have to be generated manually by running "gulp icons". We removed it from building every time as
it is usesed not that often and costs about 3-4 seconds. You can add it back if you want it run everytime.


<p align="center">
  <img src="http://fbrctr.github.io/assets/toolkit/images/logo.svg" width="500">
</p>

# Fabricator

> _fabricate_ - to make by assembling parts or sections.

Fabricator is a tool for building website UI toolkits - _think ["Tiny Bootstraps, for Every Client"](http://daverupert.com/2013/04/responsive-deliverables/#tiny-bootstraps-for-every-client)_

## Documentation

#### [Read the docs →](http://fbrctr.github.io/docs)

## Demo

#### [Default Fabricator Instance →](http://fbrctr.github.io/demo)

## Credits

Created by [Luke Askew](http://twitter.com/lukeaskew).

Logo by [Abby Putinski](https://abbyputinski.com/)

## License

[The MIT License (MIT)](http://opensource.org/licenses/mit-license.php)
