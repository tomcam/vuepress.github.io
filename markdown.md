# Markdown in VuePress: a visual guide

## Code listings in Markdown files

If you're writing technical documentation you may want a way to delineate blocks of 
code, sometimes known as a *code fence*. The result is also known as a *code block*.

### Creating a code block, aka code fence

The simplest way to show code is to wrap it between two lines consisting of 3 backticks in a row:
    
    ```
    title: Welcome to Example.com
    ```

And the result would be:

 ```
 title: Welcome to Example.com
 ```

You can get exactly the same effect by preceding each line of code with exactly 4 spaces.

### Vue code inside code blocks

If you're documenting Vue.js itself, see [Escaping](https://vuepress.vuejs.org/guide/using-vue.html#escaping).

### Keyword highlighting

The above example is valid YAML. You could follow the 3 backticks with the word `yaml`
to show it with keyword highlighting:

    ```yaml
    title: Welcome to Example.com
    ```
 The published result would show like this:
 
````yaml
 title: Welcome to Example.com
````
 
Many, many languages are supported. Here are a few examples:

#### bash

Markdown source:

    ```bash
    echo hello, world.
    ```
Published result:

```bash
 echo hello, world.
``` 
#### Javascript

Markdown source:

    ```js
    document.write('hello, world.)
    ```
    
Published result:

```js
  document.write('hello, world.)
```
  
#### Markdown 
 
Markdown source:

     ```markdown
      ### hello, world.
     ```
    
Published result:

```markdown
### hello, world.
```
 
#### Markdown (alternative)
 
Markdown source:

     ```md
      ### hello, world.
     ```
    
Published result:

```md
### hello, world.
```
 
#### Python
 
Markdown source:

    ```python
    print("hello, world.")
    ```

Published result:

```python
print("hello, world.")
```

### Languages with keyword highlighting support in VuePress

VuePress gets its keyword highlighting support through the [Prism](prismjs.com) Javascript library.

::: tip
There are too many languages to make an exhaustive list here, but you can find them
in the PrismJS source file [components.json](https://github.com/PrismJS/prism/blob/master/components.json).
:::

Here are many of the most common ones.
 
| Language      | Tag           |
| ------------- |:------------:| 
| Applecript    | applescript  |
| Asciidoc      | asciidoc     |
| ASP.NET       | aspnet       |
| batch files   | batch        |
| CSS           | css          |
| Go            | go           |
| HTTP          | http         |
| Java          | java         |
| Javascript    | js           |
| JSON          | json         |
| Markup        | markup       |
| Markdown      | markdown     |
| Markdown      | md           |
| Objective-C   | objectivec   |
| PHP           | php          |
| Powershell    | powershell   |
| Python        | py           | 
| Ruby          | ruby         |
| SASS          | sass         |
| SQL           | sql          |
| Swift         | swift        |
| VB.NET        | vbnet        |
| Vim           | vim          |
| Wiki          | yaml         |

Complete list can be found in the "languages" node of 
the PrismJS source file [components.json](https://github.com/PrismJS/prism/blob/master/components.json).

## Tables in VuePress Markdown

VuePress uses [GitHub-style table markdown](https://help.github.com/articles/organizing-information-with-tables

Tables consist of a two-line required header, then zero or more rows.

### Required table header

* At least one header consisting of a line surrounded by pipe characters, like this: `| Header |`
* A line of dashes below the header surrounded by pipe characters like this, like this: `| ------ |`

### Table rows

Under the header come optional rows. They consist of text surrounded by pipe characters, like this: `| Row 1 |`

Let's put it all together.

### Simple table example

To get a table that looks like this:

| Header                |                            |
| --------------------- | -------------------------- |
| Row 1, Column 1       | Row 2, Column 2            |

You'd use the following markdown:

    | Header                |                            |
    | --------------------- | -------------------------- |
    | Row 1, Column 1       | Row 2, Column 2            |



| Header                |                            |
| --------------------- | -------------------------- |

| Header                |           
| --------------------- | 

| Header                |                            |
| --------------------- | -------------------------- |
| Row 1, Column 1       | Row 2, Column 2            |


| Simple 2 table with   | 2 columns and a header     |

| Header                | Column 1       | Column 2      |
| --------------------- |:--------------:| -------------:|
| Left aligned          | Center aligned | Right aligned |
| Number demo           |                |   1           |
|                       |                |   123         |
|                       |                |   $456.67     |

For more examples, see the 
[GitHub style documentation](https://help.github.com/articles/organizing-information-with-tables/).

