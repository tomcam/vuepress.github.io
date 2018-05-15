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

To override the VuePress default theme's global styles define the new styles in
a file named `/.vuepress/override.styl`. VuePress uses the [Stylus](http://stylus-lang.com/) ]
preprocessor, although Stylus is compatible with CSS. Stylus is easier to read and write
than CSS, and converts the `.styl` files to CSS automatically. 
Let's change the h2 using Stylus since you probably know CSS already.

* Create or update the file `/.vuepress/override.styl` (omit the
"e" in "style" as shown) like this:

###### file /.vuepress/override.styl:

```
h3
    color: #4FAF4C
```    

* Browse to the `lunch.html` page:

![Screen shot of markup after changing h2 style](/assets/img/style-after-override.png)




