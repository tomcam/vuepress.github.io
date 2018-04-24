# Adding a title, hamburger menu, and search to your site

The simplest addition to [config.sys](./config1.md) is the `title` attribute. 
This gives your site a whole list of features: search, a consistent title across
all the pages in your site, and a hamburger menu that automatically uses
the titles from your directory of markdown files to create a table of contents.

First, let's take a look at a simple site with no `config.sys` at all:

![Screen shot of home page without title from config.js](/assets/img/config-title-notitle.png)

The README.md for such a site would look like this:

#### file README.md
```yaml
---
home: true 
heroText: Springfield Dim Sum
heroImage: /img/springfield-dim-sum-800px.png
tagline: Healthy, Delicious Dim Sum 7 Days a Week!
actionText: See our Menu →
actionLink: ./menu.md
features:
- title: Parking
  details: Plenty of free parking at night and free validation during the busin
---
```

* Now create the file `/.vuepress/config.js` with the following contents:

module.exports = {
    title: "Dim Sum!"
}

In a moment you'll see a change:

![Screen shot of home page with title from config.js](/assets/img/config-title.png)

Explore these new features. For example, click the search icon and type something in:

![Screen shot of home page with the user typing in "S" then "E"](/assets/img/config-title-start-search.png)



