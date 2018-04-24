# Adding YAML front matter to a VuePress home page

A Markdown page may contain directives that don't appear in the output as written, but that do affect the display. They are in a format called [YAML](./README.md#YAML). The first thing to do is to add what the default theme calls "Hero text", which is a big ol' H1 in the middle of the home page.

YAML must:
* Start the very first lines of text in your Markdown file, before even the Markdown itself
* Must start with a line consisting of `---` and nothing else
* Must end with a line consisting of `---` and nothing else
* Must contain at least one directive.

Example YAML beginning a file:

```yaml
---
home: true
---
```

## YAML is optional

Not all files contain YAML. It is very likely to appear on your home page, but
it's possible that many pages in your site with simpler formatting won't needed it.

## YAML may contain comments

Lines starting with a pound sign (`#`) act as comments. So the above YAML could
be written as follows and would result in the same output.

Example YAML beginning a file:

```yaml
---
# Specify this is the home page 
# (and therefore uses the Home.vue template)
home: true

# Put a big centered H1 in the middle of the page
heroText: Springfield Dim Sum
---
```

## VuePress YAML is different depending on the theme

Most YAML directives depend on the theme itself. This section assumes you're using the VuePress default theme.
Other VuePress themes will have different YAML options.

Let's YAML in action. We'll use it to add a big centered title to the home page.
