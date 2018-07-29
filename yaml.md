# Change page information with YAML

Each page in a VuePress site can optionally start with information designed to change
its behavior. It's in a format called [YAML](http://yaml.org/), and is delineated by lines consisting of
exactly three dashes. They must start the file, and look something like this:

```markdown
---
title: Dude!
---
# hello, world.
```

Because it precedes the page content is is sometimes referred to as [front matter](https://jekyllrb.com/docs/frontmatter/).

#### References

* Official VuePress [front matter](https://vuepress.vuejs.org/guide/markdown.html#front-matter) documentaton
* Official Jekyll [front matter](https://jekyllrb.com/docs/frontmatter/) documenation
* [YAML](http://yaml.org/) standard

## Page title

VuePress derives the title of the page (normally shown in search engines and browser tabs) from
the contents of its first header. You can override it by using the `title` attribute using 
[YAML front matter](./yaml.md):

```markdown
---
title: World's best guitar
---
# About the Fender Performer

The Fender Performer debuted in 1986.
```

In the example above, without the YAML, your browser tab's page title would normally contain 
the text `About the Fender Performer`. 
That's overridden by the YAML `title` attribute.
Instead, it would contain the text `World's best guitar`.

## Description meta-tag

Search engines normally show the `description` tag in [search results](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Active_learning_The_description's_use_in_search_engines).

```markdown
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
