


# Overriding the Vuepress default theme's style sheet

Overriding the default theme's style sheet is simply a matter of creating or updating 
the file `/.vuepress/override.styl`.

Suppose you have the following tiny markup file named `lunch.md`:

###### file lunch.md:
```markup
# Lunch menu

## Lunch Specials
```

It would look something like this when rendered using the Vuepress default theme:

![Screen shot of markup before changing h2 style](/assets/img/style-before-override.png)

Now you decide you want to change the default theme's h2 style to give it some color
so that "Lunch Specials" pops a little more.


## Create the file `/.vuepress/override.styl`

* Create or update the file `/.vuepress/override.styl` (omit the
"e" in "style" as shown) like this:

###### file /.vuepress/override.styl:

```
h3
    color: #4FAF4C
```    

Normally Vuepress doesn't catch changes to `/.vuepress/override.styl` so you need to
take control. 

* Drop back into the terminal and press Ctrl+C to stop the sever.

* Restart the vuepress server:

```bash
$ vuepress dev
```

* Browse to the `lunch.html` page:

![Screen shot of markup after changing h2 style](/assets/img/style-after-override.png)




