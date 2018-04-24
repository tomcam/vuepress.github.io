# Config.js: Sitewide configuration for VuePress sites

VuePress sites have a (sometimes hidden) subdirectory `.vuepress` and the
most important file there is a Javascript file name `config.js` and it contains,
surprise surprise, declarations of objects used to configure your site.

Its path, assuming your project directory is `~/code/vuepress/demo1`, would be
`~/code/vuepress/demo1/.vuepress/config.js`.

## What config.js depends on the theme

`config.js` looks different for each theme. This section documents its use with the 
VuePress default theme, but don't expect these things to work on sites
that don't use the default theme.

## The minimal VuePress config.js file

Create this minimal file and save to your `/vuepress/config.js` directory. Make sure your
site compiles properly and that the site doesn't change at all. When that works
go on to adding a [title](./config-title.md) to your VuePress site.

```yaml
module.exports = {
}
```
