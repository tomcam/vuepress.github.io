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

## Description meta-tag

Search engines normally show the `description` tag in [search results](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Active_learning_The_description's_use_in_search_engines).
---
description: lilypad lead sheet tutorial
---
# Tutorial: How to write a lead sheet using Lilypad

Let's write a complete lead sheet.
```

As you can see, the best thing to put in the description is what people are most likely to 
use when writing a search engine query.




#### References

* Mozilla: [The description's use in search engines](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Active_learning_The_description's_use_in_search_engines)
