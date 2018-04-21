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

## Opening a terminal

You'll need to drop into your operating system's command line to use Vuepress. First open
a terminal.

### Opening a terminal on MacOS

The quickest way to find the terminal program on MacOS is this way:

* Choose the Spotlight icon, normally at the top of the screen
* Search for the word `terminal` and you'll see something like this in the results. Highlight the Terminal icon:

![Screen shot of finding Terminal using Spotlight](/assets/img/macos-spotlight-terminal.png)

### Creating a Terminal shortcut on the MacOS dock (one time only)

You'll be using the Terminal a lot, so make a shortcut for it. You only need to
do this once.

* Under `Top Hits`, Drag the Terminal icon to the bottom of your screen, into the Dock.

![Screen shot of Terminal being dragged from Spotlight to Dock](/assets/img/macos-dock-dragging-terminal.png)

Now you'll be able to start the terminal much faster next time.

## Creating the directories for your Vuepress site.

Go to your normal work area, create the working directory, and move to it. 

In this case you would replace `~/code/vue/vuepress` with wherever you choose to put your Vuepress files. This site’s directory is creatively called `demo1`. 

* The first thing to do is to create the working directory and a subdirectory under it named `.vuepress` (don't forget that it starts with the period character), like this:

```bash
# Create full directory path, including the
# necessary hidden directory .vuepress
$ mkdir -p ~/code/vue/vuepress/demo1/.vuepress
```

* Now change to that directory. You will run `vuepress dev` or `vuepress build` from within it.

```bash
# Make it the working directory.
$ cd ~/code/vue/vuepress/demo1
```

## Creating a minimal home page, which consists a file named README.md with a single header.


A Vuepress site is a directory containing at least a file named README.md in Markdown form with at *least
one header.* Create a file named `README.md` with the following contents:

```
## Location and Directions

```

::: tip TIP FOR DEFAULT THEME USERS
If you're using the Vuepress default theme to create your home page, you should start
with a level 2 header (`##`, as shown above). That's because the level 1 header
is provided by the `heroText` YAML markup, to be explained later.
:::

