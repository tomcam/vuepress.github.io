# Changing page information with YAML

Each page in a VuePress site can optionally start with information designed to change
its behavior. It's in a format called [YAML](http://yaml.org/), and is delineated by lines consisting of
exactly three dashes. They must start the file, and look something like this:

```markdown
---
title: Dude!
---
# hello, world.
```

Because it precedes the page content it is sometimes referred to as [front matter](https://jekyllrb.com/docs/frontmatter/).

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

## description meta-tag

Search engines normally show the `description` tag in [search results](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Active_learning_The_description's_use_in_search_engines).

To define a meta-tag in YAML front matter you need to precede it with
1. A line consisting solely of the term `meta:`, immediately followed
2. A line starting with exactly 2 spaces, then the term `name:`
3. The meta-tag itself (`description` in this example)
4. A line starting with exactly two spaces, then the term `contents:`, and finally what you want in meta-tag 
(`lilypad lead sheet tutorial`) in this example

Here's what the complete meta-tag looks like as YAML front matter:

```markdown
---
meta:
  - name: description
  - contents: lilypad lead sheet tutorial
---
# Tutorial: How to write a lead sheet using Lilypad

Let's write a complete lead sheet.
```

### Including multiple meta-tags

You can include more than one meta-tag by repeating the `name` and `contents` elements. For example:

```markdown
---
meta:
  - name: description
  - contents: lilypad lead sheet tutorial
  - name: keywords
  - contents: lilypad notation editor, lead sheet, music notation software
---
```
## keywords meta-tag

Search engines may sometimes use `keywords` meta tag to assist in determining
what to search for.

To define a meta-tag in YAML front matter you need to precede it with
1. A line consisting solely of the term `meta:`, immediately followed
2. A line starting with exactly 2 spaces, then the term `name:`
3. The meta-tag itself (`description` in this example)
4. A line starting with exactly two spaces, then the term `contents:`, and finally what you want in meta-tag 
(`lilypad notation editor, lead sheets, music notation software`) in this example

Here's what the complete meta-tag looks like as YAML front matter:

```markdown
---
meta:
  - name: keywords
  - contents: lilypad notation editor, lead sheet, music notation software
---
# Tutorial: How to write a lead sheet using Lilypad

Let's write a complete lead sheet.
```

The difference between this and the [description](description-meta-tag) 
is that keywords let people search for multiple terms that may or
may not appear on this partiular page.

::: tip
Search engines supposedly don't use the `keyword` meta-tag anymore due to its use
as a keyword spamming tool, but
the truth is they don't publish their search algorithms.
:::

### Including multiple meta-tags

You can include more than one meta-tag by repeating the `name` and `contents` elements. For example:

```markdown
---
meta:
  - name: description
  - contents: lilypad lead sheet tutorial
  - name: keywords
  - contents: lilypad notation editor, lead sheet, music notation software
---
```

#### References

* Mozilla: [The description's use in search engines](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Active_learning_The_description's_use_in_search_engines)
