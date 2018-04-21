# Vuepress default theme tutorial

This is a step-by-step guide to creating a simple site
using the VuePress default theme. It's for an imaginary
restaurant named Springfield Dim Sum.

## Workflow

After you've installed [npm](https://www.npmjs.com/) and [Vuepress](https://vuepress.vuejs.org/guide/getting-started.html)
the typical workflow described here is as follows:

* Create a working directory and change to it
* Write markup files (text files with names ending in `.md` following a simple formatting convention
called [markdown](https://en.wikipedia.org/wiki/Markdown), with the home page always named `README.md`,
and save them in the working directory
* Open a terminal window and run `vuepress dev` on the command line. This generates a website from
your Vuepress source files, which include at a minimum `README.md`, and runs a webserver on your computer
* Open a browser window to [http://localhost:8080/](http://localhost:8080/) to see the live site
* Make changes to your markup files or create new ones. Vuepress sees they've been created and 
automatically generates new output each time you save a file

## Creating a directory for your Vuepress site.

First, o to your normal work area, create the working directory, and move to it. 

In this case you would replace `~/code/vue/vuepress` with wherever you choose to put your Vuepress files. This site’s directory is creatively called `demo1`. 

* 1The first thing to do is to create the working directory and a subdirectory under it named `.vuepress` (don't forget that it starts with the period character), like this:

```bash
# Create full directory path, including the
# necessary hidden directory .vuepress
$ mkdir -p ~/code/vue/vuepress/demo1/.vuepress
```

* Now go to that directory.

```bash
# Make it the working directory.
$ cd ~/code/vue/vuepress/demo1
```
# Create a minimal site, which includes nothing
# but a home page with a single h1 header.
$ echo "# hello, world." > README.md


## Adding a Vuepress default theme home page


A Vuepress site is a directory containing at least a file named README.md in Markdown form with at *least
one header.* For example:

```
## Location and Directions

```

::: tip TIP FOR DEFAULT THEME USERS
If you're using the Vuepress default theme to create your home page, you should start
with a level 2 header (`##`, as shown above). That's because the level 1 header
is provided by the `heroText` YAML markup, to be explained later.
:::

