# Adding a Hero image to the home page

Another feature you can add to a home page using the VuePress default theme is a big, defining picture called a hero image. 
You add the hero image using YAML just like the `heroText` header added in the previous section.

Here's an example:

![Screen shot of home page with hero image labeled](/assets/img/default1-heroimage-labeled.png)


* Add the YAML line `heroImage: /img/springfield-dim-sum-800px.png`, 
which directs that the hero image to be used
is in the directory `/img`.

The next thing to add is the directive `heroText: Springfield Dim Sum`. 

* Update your README.md file to look like this:

```yaml
---
home: true
heroText: Springfield Dim Sum
heroImage: heroImage: /img/springfield-dim-sum-800px.png
---

## Location and Directions
  
```

You will of course need to create a new subdirectory named `/img/` and to put that image into it.

The results immediately appear, assuming you're still running `vuepress dev` inside your project directory:

![Screen shot of home page with hero text](/assets/img/default1-heroimage.png)

Thanks to [gnokii](https://openclipart.org/user-detail/gnokii) at 
[openclipart](https://openclipart.org) for 
[this image](https://openclipart.org/detail/133159/chinese-fast-food).

