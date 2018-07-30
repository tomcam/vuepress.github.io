# Style sheets

## Overriding the global style sheet on a per-page pbases

You can create a style sheet that applies to only one page by doing the following.

* Add the style to `.vuepress/override.styl`. For example:

###### file .vuepress/override.styl

```css
theme-container.badidea { color: red; }
```

* Add `pageClass: ` to the [YAML front mattter](./yaml.md) for that page.

```yaml
pageClass: badidea
```

#### Reference

* VuePress offical [Custom Page Classs](https://vuepress.vuejs.org/default-theme-config/#custom-page-class) documentation
