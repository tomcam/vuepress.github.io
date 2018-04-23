# Adding YAML front matter to a Markdown page

A Markdown page may contain directives that don't appear in the output as written, but that do affect the display. They are in a format called [YAML](./README.md#YAML). The first thing to do is to add what the default theme calls "Hero text", which is a big ol' H1 in the middle of the home page.

YAML must:
* Be the very first lines of text in your Markdown file, before even the Markdown itself
* Must start with a line consisting of `---` and nothing else
* Must end with a line consisting of `---` and nothing else
* Must contain at least one directive.

Example YAML beginning a file:

```yaml
---
home: true
---
```

## YAML may contain comments

Lines starting with a pound sign (`#`) act as comments. So the above YAML could
be written as follows and would result in the same output.

Example YAML beginning a file:

```yaml
---
# Specific to Vuepress default theme 
# for home pages 
home: true
heroText: Springfield Dim Sum
---
```

## Vuepress YAML is different depending on the theme

Most YAML directives depend on the theme itself. This section assumes you're using the Vuepress default theme.
Other Vuepress themes will have different YAML options.

Let's YAML in action. We'll use it to add a big centered title to the home page.

## Adding Hero text to the home page

The Vuepress default theme has tons of features, and many of them are designed solely for the
home page. The first thing to do is to add the YAML line `home: true`, which is a directive that 
Vuepress use the [Home.vue template](https://github.com/vuejs/vuepress/blob/master/lib/default-theme/Home.vue).

The next thing to add is the directive `heroText: Springfield Dim Sum`. 

* Update your README.md file to look like this:

```yaml
---
home: true
heroText: Springfield Dim Sum
---
 
## Location and Directions
  
```

The results immediately appear, assuming you're still running `vuepress dev` inside your project directory:

![Screen shot of finding Terminal using Spotlight](/assets/img/default-herotext.png)

