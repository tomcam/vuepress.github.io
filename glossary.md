# Glossary


# H1, H2, H3, H4, H5, H6

The terms H1, H2, H3, H4, H5, H6 (upper or lower case)
all refer to [headers](#header). Sometimes but not always
they refer to the HTML version of the header, but in this
document it simply refers to their semantici importance.
And H1 header is more important than an H3, which is
more important than an H6. 

# header

A header is a headline in the document. The lower the number, the
more important the header. They have semantic meaning. Your audience, 
search engines, and screen readers are meant assign the most importance
to an H1, less to an H2, and so on. HTML only recognizes levels 1 to 6.
It's good writing practice to assign importance only to levels 1-3.

Headers are represented in Markdown like this:

```markdown
# This is an H1, It's most important.

Normal body text.

## This is an H2. It's less important.

More body text.

### An H3 is about as low as you should go

Readers only absorb about 3 levels of importance.
```

See also [H1, H2, H3, H4, H5, H6](#h1-h2-h3-h4-h5-h6).

## Markdown

The original formatting used on VuePress documents. It is an 
extended version of [markup](#markup) devised on the
blog [daring fireball](https://daringfireball.net/projects/markdown/).
Its name is a humorous take on the term [markup](#markup).

Special characters
starting lines or surrounding phrases are converted to formatting or links.

For example, a line consisting `# Welcome` gets converted to 
just the world `Welcome` but it's formatted as an HTML header, so it
will appear different from body text. In this document, it is
normally synonomous with [markup](#markup). 

## markup

In general, markup in the computer world means a way of representing
text that also includes a way to transform that text. HTML is a good
exampe of markup.

Normally in this document it refers to the original formatting used on VuePress documents. Special characters
starting lines or surrounding phrases are converted to formatting or links.

For example, in VuePress a line consisting `# Welcome` gets converted to 
just the world `Welcome` but it's formatted as an HTML header, so it
will appear different from body text. In this document, it is
normally synonomous with [markdown](#markdown), which is an extended 
version of markup. 

See the [Markdown](./markdown.md) chapter.

## page title

The page title appears in your browser and is defined either
by the first header on the page or using [YAML](./yaml.md#page-title).
It's different from the [site title](#site-title), which appears 
on all pages if defined.

## site title

The site title appears on every page if you've configured it. 
The Vuepress default theme appends it to the page name in browser titles
if it's been [defined using config.js](./config-title.md).
The site title is different from the [page title](#page-title).

