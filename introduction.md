# Introduction: Why use VuePress, and is this book for you?

I write a lot of structured information that's usually presented in web form.
Over the years I've learned that the best tool to present all this information
isn't necessarily the one with the most features. It's the one that stays
out of my way and doesn't make me learn too much. 

Most website creation tools had other problems:

* They were too complicated to set up
* They required that I write using a word processor-like interface which generated HTML.
Sounds fine, except somehow there were always problems with the
output, especially when code listings were concerned
* The sites they produced were sluggish and memory-hungry
* They required the use of a separate database installation
* They lacked built-in search
* Extending them meant dealing with outmoded programming conventions
and labyrinthine code built up over the years
* Exporting my work to another format was unncessarily complicated
* They had overly restrictive licensing terms

VuePress answered all of these problems to varying degree. 
Here are some of my favorite aspects of VuePress:

* VuePress sites load fast. Search engines and users both like this.
* The default theme is by definition very well suited to presenting
technical information because it was designed for the [Vue.js](http://vuejs.org) site. It looks good out of the box and is easy to modify thanks
to its use of [Stylus](custom-themes/custom2.md#vue-uses-stylus-optionally).
* A VuePress site is just a bunch of Markdown files. 
Markdown is nothing more than text formatted a certain way, and
saved in a file ending with the extension `md`.

For example, to start a document with a level one header, then 
include a paragraph that links to the glossary, you'd write this:

```
# Start here

Quick note: novices may need to review the [glossary](/glossary.md)
before continuing
```

If you had to write this in HTML, it would look like this:

```html
<h1>Start here</h1>

Quick note: novices may need to review the 
<a href="glossary.html">glossary</a> before continuing.
```

Markdown is easier to read even it its raw form, easier to write,
and easier to maintain. If you decide you don't like VuePress, you
can use it in many other static site generators like Jekyll or Ghost.

* VuePress has built-in search based on the contents of headers. 
The lack of full text search is easily remedied with Algolia, but
I have found in practice that I organize documents better knowing
I'm a bit limited.
* VuePress has built-in support for version control systems such as
GitHub, GitLabe, and BitBucket

## Who's the audience for VuePress?

The ideal VuePress user is probably a programmer or technical writer
who's not afraid of command line tools and using a text editor,
but who has a ton of documentation to get on the web fast.


## Disadvantages to using VuePress

Here are some reasons you might want to avoid VuePress.

* Because VuePress creates static sites, there's no interaction with
the user that the server knows about. In other words, no database forms.
To some extent you can mitigate this by using something like Google
forms, as shown by the [Feedback](/feedback.md) page on this site
* As presented here, you need to be familiar with a text editor like
Visual Studio Code, Emacs, or Vim. You'll be creating the Markdown files
in an editor separate from the website generator (which is VuePress itself).
This is different from the all-on-one experience of products such as
WordPress
* VuePress isn't installed on most shared hosting providers. 
(However, the flip side is you can get incredible free hosting
through [Netlify](/netlify.md))

