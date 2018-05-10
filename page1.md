# Creating a simple markdown page



## Adding an image

Before adding an image, figure out where you want your images to go. In this
example for a small- to medium-sized project it's best to put them in
a root-level image directory. Vuepress sets no requirements
on your directory structure.

* It's best to create a central directory for images. For example, a
project's directory tree could like this:

```
┌── README.md
├── img/
│   ├── vpbookcover1.png
│   ├── screenshot1.png
│   └── screenshot2.png
├── css/
│   ├── template.sass
│   ├── override.sass
│   └── raw.css
├── yaml/
│   ├── README.md
|   ├── yaml1.md
|   └── yaml2.md
├── sass/
└── templates/
```

The syntax for images is the same as for links but they're preceded by a `!` character:

```markdown
![Screen shot of home page with hero text](/img/default1-heroimage.png)
```
