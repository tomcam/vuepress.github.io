
# Adding Hero text to the home page

The Vuepress default theme has tons of features, and many of them are designed solely for the
home page. The first thing to do is to add the YAML line `home: true`, which is a directive that 
Vuepress use the [Home.vue template](https://github.com/vuejs/vuepress/blob/master/lib/default-theme/Home.vue).

The [tutorial](./default1.md) instructed that when using the Vuepress default theme it's best to start your markup 
with `## headline goes here`, which translates to a level 2 HTML header (i.e. `<h2>` tag). It pays off
here, because it's best that you use the hero text feature for your level 1 header on the home page.

It's normally best for your home page to have a single level 1 header because search engines
know which is the most important header. Why not have it match the most prominent-looking header
on the page too? That's how the hero text works with the default theme.

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

![Screen shot of home page with hero text](/assets/img/default-herotext.png)


