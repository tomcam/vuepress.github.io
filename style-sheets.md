# Style sheets

## Overriding the global style sheet on a per-page basis

You can create a styles that apply to only one page by doing the following.
Here's an example of making the body text red for one particular page.

* Add the style to `.vuepress/override.styl`. For example:

###### file .vuepress/override.styl

```css
/* Make all the body text red. */
.theme-container.badidea { color: red; }
```

* Add `pageClass: ` to the [YAML front mattter](./yaml.md) for that page.

```yaml
pageClass: badidea
```

#### Reference

* VuePress offical [Custom Page Classs](https://vuepress.vuejs.org/default-theme-config/#custom-page-class) documentation
