# Change page information with YAML

#### Reference

See the [Front matter](https://vuepress.vuejs.org/guide/markdown.html#front-matter) in
the official VuePress documentaton

## Page title

VuePress derives the title of the page (normally shown in search engines and browser tabs) from
the contents of its first header. You can override it by using the `title` attribute:

```markdown
---
title: World's best guitar
---
# About the Fender Performer

The Fender Performer debuted in 1986.
```

In the example above, the page title in your browser browser tab would contain 
the text `About the Fender Performer`. That's overridden by the `title` attribute.
Instead, it would contain the text `World's best guitar`.
