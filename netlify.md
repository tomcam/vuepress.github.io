# Deploying a VuePress site to Netlify

[Netlify](https://www.netlify.com/) is a high-quality web hosting provider and CDN that lets you deploy static sites for free. 
Netlify also understands modern build processes such as NPM, yarn and so on.
This makes it a perfect complement to VuePress.

This section shows you how to create a site using VuePress and deploy it using GitHub and Netlify.

## Download Git

* If you haven't already done so, [download and install Git](https://git-scm.com).

## Create a GitHub repository

* If you haven't already done so, create a free account in [GitHub](https://github.com/).

Create a repository named `vpdemo1` like this:

* Choose `New`.

The Create New Repository page appears.

* Under Repository Name, enter the name `vpdemo1`. You can use any name for the repo. 
This is just the name we're using for the demo.

* On your local machine, create a directory named `vpdemo1` from the command line and change 
to that directory.

## One tie only: configure Git if necessary

Git needs to know your login ID for the repository. You only need to do this once if you've
never run Git before. Skip it if you've created repos with Git previously.

* Run these commands. Replace `yourname@example.com` with your GitHub email address and `youruserid` with your GitHub login ID.

```bash
git config --global user.email yourname@example.com
git config --global user.name youruserid
```

## Create a minimal VuePress site

This example shows you end-to-end deployment and doesn't require a complex project. Let's create the smallest
valid VuePress site.

* Create a text file named `README.md` with the following contents:

```markup
# First VuePress site

hello, world.
```


