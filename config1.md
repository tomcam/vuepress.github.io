# Config.js: Sitewide configuration for VuePress sites

VuePress sites have a (sometimes hidden)`.vuepress`  subdirectory and the
most important file there is a Javascript file named `config.js`.
It contains, surprise surprise, declarations of objects used to configure your site.

Its full pathname, assuming your project directory is `~/demo1`, would be
`~/demo1/.vuepress/config.js`.

## What config.js does depends on the theme

`config.js` looks different for each theme. This section documents its use with the 
VuePress default theme, but don't expect everything to work on sites
that don't use the default theme.

## The minimal VuePress config.js file

Create this minimal file and save to your `/vuepress/config.js` directory. Make sure your
site compiles properly. Your site shouldn't change at all when you've created
this minimal `config.js`. 

When that works go on to adding a [title](./config-title.md) to your VuePress site.

```yaml
module.exports = {
}
```
