# Deploying a VuePress site to Netlify

[Netlify](https://www.netlify.com/) is a high-quality web hosting provider and CDN that lets you deploy static sites for free. 
Netlify also understands modern build processes such as NPM, yarn and so on.
This makes it a perfect complement to VuePress.

This section shows you how to create a site using VuePress and deploy it using GitHub and Netlify.

## Download and install Git

* If you haven't already done so, [download and install Git](https://git-scm.com).

## Create a GitHub repository

* If you haven't already done so, create a free account on [GitHub](https://github.com/).

Create a repository named `vpdemo1` like this:

* Choose `New`.

The Create New Repository page appears.

* Under Repository Name, enter the name `vpdemo1`. You can use any name for the repo. 
This is just the name we're using for the demo.

* On your local machine, create a directory named `vpdemo1` from the command line and change 
to that directory.

## One time only: configure Git if necessary

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

```markdown

# First VuePress site

hello, world.
```

## Create a repository for your site

The magic starts here. You're going to create a proper Git repository and put it up on GitHub.

###  Initialize the repository

* First, initialize an empty source code control repository in Git format:

```bash
git init
```

This creates a hidden directory named `.git` that will contain all versions of the files you create (technically, just changes to the files).

### Add the README.md file

GitHub likes your repositories to have a file named `README.md` in the root directory. It is no accident that VuePress does too.
Add that file to the repository:

```bash
git add README.md
```

### Commit the README.md file

Changes to a file aren't part of the current version until you do a commit:

* Use git commit to update the repository with an explanatory message:

```bash
git commit -m "Smallest valid  Vuepress site"
```

You get feedback that looks roughly like this:

```
[master (root-commit) 99c62f2] Simple but complete Vuepress site
1 file changed, 3 insertions(+)
 create mode 100644 README.md
```

### Push to GitHub

* Replace `youruserid` with your GitHub user ID.

```bash
git remote add origin git@github.com:youruserid/vpdemo1
```

### Just once:

* Again, replace `youruserid` with your GitHub user ID.

```bash
git remote set-url origin https://github.com/tomcam/vpdemo1.git
```

## Make your project a Node module

VuePress requires [npm](https://docs.npmjs.com/) and turning your repository into a Node module
means Netlify can use automated build tools to run VuePress automatically. Creating `package.json` 
is the key.

Here's the quickest way to create `package.json`:

* Run `npm init` at the command line:

```bash
npm init --force
```

The `--force` option applies sensible defaults for this demo. 
Without it, npm will ask you a bunch of questions that aren't relevant here.

NPM displays the `package.json` it created:

```
pm WARN using --force I sure hope you know what you are doing.
Wrote to C:\Users\tom\code\vue\vuepress\vpdemo1\package.json:


{
  "name": "vpdemo1",
  "version": "1.0.0",
  "description": "Fascinating sentence",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/tomcam/vpdemo1.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/tomcam/vpdemo1/issues"
  },
  "homepage": "https://github.com/tomcam/vpdemo1#readme"
}
```

### Update package.json to reflect VuePress usage

This `package.json` doesn't know about VuePress. So:

* Load `package.json` into a text editor.

* Find the `scripts` declaration:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

* Update by adding a comma after `exit 1"` and the `docs:build` line as shown:

```json{3}
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "docs:build": "vuepress build"
  }
```

* Add the `dependencies` object after `homepage`, again including the comma:

```json{2-4}
 "homepage": "https://github.com/tomcam/vpdemo1#readme",
 "dependencies": {
    "vuepress": "^0.12.0"
 }
```

Here the version of VuePress is `0.12.0` but your version of VuePress will probably be different. 

* Find out what version of Vuepress you're using with this command line:

```bash
vuepress -V
```

* If it's different from the example replace the version number in your `package.json` file.

The completed `package.json` is as shown:

```json
{
  "name": "vpdemo1",
  "version": "1.0.0",
  "description": "Fascinating sentence",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
	"docs:build": "vuepress build"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/tomcam/vpdemo1.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/tomcam/vpdemo1/issues"
  },
  "homepage": "https://github.com/tomcam/vpdemo1#readme",
  "dependencies": {
    "vuepress": "^0.12.0"
  }
}
```

You don't need to do this again.

## Add package.json to the repository

Don't forget to add `package.json` to the repository, since that's where Netlify looks to 
learn how your project is built.

```bash
git add package.json
git commit -m "package.json for netlify/npm build settings"
git push -u origin master
```

## Create and deploy your site from Netlify

The final step is to provision a site from Netlify and deploy it. 
The result will be your VuePress site on a free Netlify installation.
It has HTTPS support and you can even point a domain name to it, all free.

* If you haven't done so already, [Create a Netlify account](https://app.netlify.com/signup).

It's truly free and not a timed demo. It doesn't require a credit card, just an email address and
a GitHub account. (You're not limited to GitHub but that's what we're using in this example.)

* From your [Netlify account page](https://app.netlify.com/account/sites), choose `New site from Git`.

The `Create a site` page appears.

* Under `Continuous Deployment`, choose `GitHub`.

You are probably logged into GitHub already but if you're not, a GitHub login page appears.

* Log into GitHub if you're asked.

A list of your GitHub repositories appears.

* Choose the `vpdemo1` repo

Netlify's `Deploy settings` page appears.

Leave `Branch to deploy` set to master.

* Under `Basic build settings`, enter the following for `Build command`:

```text
npm run docs:build
```

* For `Publish directory`, enter

```text
.vuepress/dist
```

The `.vuepress/dist` directory is where VuePress sends the generated static site files.

And now the grand finale!

* Choose `Deploy site`

The Deploy log with a long list of actions:

```text
9:54:00 PM: Build ready to start
9:54:01 PM: Fetching cached dependencies
9:54:02 PM: Failed to fetch cache, continuing with build
9:54:02 PM: ...

9:54:07 AM: Build script success
9:54:07 AM: Starting to deploy site from '.vuepress/dist'
9:54:07 AM: Starting post processing
9:54:07 AM: Post processing done
9:54:07 AM: Site is live
9:54:07 AM: Finished processing build request in 43.795358607s
```

Upon success a few moments later you'll be shown a page with information about your new site.
It's given some kind of crazy URL like `https://silly-alien-c1776.netlify.com/`.

Click the URL and gaze upon the greatness of your work!
