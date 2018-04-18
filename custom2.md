# Adding style to a custom theme

[Creating a minimal custom theme](./custom1.md) showed how to create the smallest possible
Vuepress theme. Let's add some styling to it. The theme is called `starter2`.

## Create a theme directory in /usr/local/lib/node_modules

Create the them `vuepress-theme-starter2` in '/usr/local/lib/node_modules' 
and make it your working directory:

```bash
# Create a directory for the them under node_modules. 
$ sudo mkdir -p /usr/local/lib/node_modules/vuepress-theme-starter2

# Make it the working directory.
$ cd /usr/local/lib/node_modules/vuepress-theme-starter2
```

## Create the files Layout.vue and Home.vue

The file `Layout.vue` is important because it's the default template for
all web pages. Styles you add to `Layout.vue` are accessible to
all other web pages in your Vuepress installation.

For clarity Vuepress preprocesses the styles you define. [Stylus](http://stylus-lang.com/), 
the source language, resembles YAML or a simplfied version of CSS. For example, instead of
changing the color of `<h1>` headers to red like this:

```css
/* Old hotness: CSS */
h1 { color: red; }
```

You use Stylus:

```YAML
// Stylus is the new hotness
h1
  color: red
```

### Layout.vue

* Add this file to the theme directory and name it `Layout.vue`. Give it these contents:

```
<template>
    <Content/>
</template>

<style lang="stylus">
html, body
  padding 0
  margin 1em 5em 10em 5em

body
  font-family -apple-system, "Droid Sans", sans-serif
  font-size 16px

strong
  font-weight 600

h1, h2, h3, h4, h5, h6
  font-weight 600
  line-height 1.25

h1
  color: #231F20

h2
  color: #BB4430

a
  color: #7EBDC2

p, ul, ol
  line-height 1.7
</style>

```

* Create an identical file in the same directory and name it `Home.vue`. Give it these contents:

```
<template> 
    <Content/> 
</template> 
```
## Create a Vuepress site

Go to your normal work area and generate a Vuepress site. In this case
you would replace ~/code/vue/vuepress with wherever you choose to put
your Vuepress files. This site's directory is creatively called `demo2`.

```bash
# Create full directory path, including the
# necessary hidden directory .vuepress
$ mkdir -p ~/code/vue/vuepress/demo2/.vuepress

# Make it the working directory.
$ cd ~/code/vue/vuepress/demo2
```

* Create the following README.md file:

```
# Your First Lilypad Score

This section goes through the creation of a simple score

## The minimum file

* From the *File* menu, choose *New*.

A simple notepad appears.
```

### Name theme in config.js

Create the file `./vuepress/config.js`:

```
# Replace vim with your favorite editor 
$ vim .vuepress/config.js
```

* Edit `./vuepress/config.js` so it looks like this:

```
const base = process.env.GH ? '/vuepress/' : '/'
module.exports = {
    title: "Demo2",
    description: "Starter2 custom Vuepress theme has style sheet",
    theme: "starter2"
}
```

## Generate the site and run the server:

```bash
$ vuepress dev
```
And visit your site:

![Screen shot of the minimal VuePress theme named starter1](/assets/img/starter2-vuepress-custom-theme.png)

## Put styles in a /styles/ directory for reuse

One of the best parts about static site generators is that encourage modular CSS use.
Vuepress tends to put its styles in small files, clearly defined by purpose. 
The convention is to put a `/styles/` directory in the theme's root directory.

* Create a `/styles/` directory in the theme directory.

```bash
$ sudo mkdir /usr/local/lib/node_modules/vuepress-theme-starter2/styles
```

The styles defined in `Layout.vue` are of general use in most pages, so we'll create a separate
style sheet module for them called `theme.styl`.

* Create the [Stylus](http://stylus-lang.com/) file named `/usr/local/lib/node_modules/vuepress-theme-starter2/styles/theme.styl` with the following contents:

```
html, body
  padding 0
  margin 1em 5em 10em 5em

body
  font-family -apple-system, "Droid Sans", sans-serif
  font-size 16px

strong
  font-weight 600

h1, h2, h3, h4, h5, h6
  font-weight 600
  line-height 1.25

h1
  color: #231F20

h2
  color: #BB4430

a
  color: #7EBDC2

p, ul, ol
  line-height 1.7
```

* Modify `/usr/local/lib/node_modules/vuepress-theme-starter2/Layout.vue` by replacing the
inline styles with an `@import` statement as follows:

```
<template>
    <Content/>
</template>

<style lang="stylus">
@import './styles/theme.styl'
</style>
```

If everything went well your site looks identical, but now you'll find it easier to create templates.

You can find a repository at https://github.com/tomcam/vuepress-theme-starter2
