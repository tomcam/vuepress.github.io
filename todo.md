# To do

* Create a style for H6 filename designation and for H4 references.
* Revisit default.md for 


## Conventions to document

### Filenames

Use H6 for only for filenames, which should normally precede code listings

```markdown
###### file README.md
```

Use H4 for a section called Reference within a page:

### Reference section

```markdown
#### Reference (or References if more than one)

See See the [Front matter](https://vuepress.vuejs.org/guide/markdown.html#front-matter) in
the official VuePress documentaton
````
## Cover these items
You can disable the navbar in YAML with navbar: false
Also sidebar: false works too

https://github.com/vuejs/vuepress/blob/master/docs/.vuepress/config.js

## Setting title in config.js

https://github.com/vuejs/vuepress/blob/master/docs/.vuepress/config.js

See if that's only for the default theme. I assume it is.

## Images that don't get the border that all img elements are supposed to have:

* tutorial/tutorial2.html#special-properties-of-readme-md


## Markdown stuff to discuss

```
## I got yer table of contents right here                                                                              
                                                                                                                       
[[toc]]    
```

Mention https://www.markdowntutorial.com

## Config-title.md

[config-title.md](config-title.md) should be reorganized and may be broken. Move the action above the
illustrated examples. I also think it's no longer accurate.

## default-theme/hero-image.md
This fails, even though the image seems to be there: ![Screen shot of home page with hero text](/assets/img/default1-heroimage.png) 

## markdown.md

[markdown.md](./markdown.md): Add info about [escaping](https://vuepress.vuejs.org/guide/using-vue.html#escaping)

## style-overriding-default.md

[style-overriding-default.md](./style-overriding-default.md) needs to recognize
the [split](https://vuepress.vuejs.org/default-theme-config/#migrate-your-styles-to-style-styl)

