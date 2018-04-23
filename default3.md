
# Adding Hero text to the home page

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

![Screen shot of home page with hero text](/assets/img/default-herotext.png)


